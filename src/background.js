import { getDomain } from 'tldts';

chrome.commands.onCommand.addListener(async (command) => {

    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const allTabs = await chrome.tabs.query({ currentWindow: true });
    const currentIndex = allTabs.findIndex(t => t.id === activeTab.id);
    if (!activeTab || !activeTab.url) {
        console.debug("no active tabs");
        return;
    }

    switch (command) {
        case "group-tabs-by-domain":

            const baseDomain = getDomain(activeTab.url);
            if (!baseDomain) return;

            const matchingTabs = allTabs.filter(tab => {
            return getDomain(tab.url) === baseDomain;
            });

            if (matchingTabs.length > 1) {
            const tabIds = matchingTabs.map(tab => tab.id);
            chrome.tabs.group({ tabIds });
            }
            break;


        case "group-right-neighbor-tab":
            
            const nextTab = allTabs[(currentIndex + 1) % allTabs.length];

            if (nextTab) {
                await chrome.tabs.update(nextTab.id, { active: true });
                let groupId;

                console.debug("groupId: " + activeTab.groupId);
                if (activeTab.groupId >= 0) {
                    groupId = activeTab.groupId;
                } else {
                    groupId = await chrome.tabs.group({ tabIds: [activeTab.id] });
                }

                await chrome.tabs.group({ groupId, tabIds: [nextTab.id] });
            }
            break;
        
        case "group-left-neighbor-tab":
            
            const previousTab = allTabs[(currentIndex - 1) % allTabs.length];
            if (previousTab) {
                await chrome.tabs.update(previousTab.id, { active: true });
                let groupId;
                if (activeTab.groupId >= 0) {
                    groupId = activeTab.groupId;
                } else {
                    groupId = await chrome.tabs.group({ tabIds: [activeTab.id] });
                }

                await chrome.tabs.group({ groupId, tabIds: [previousTab.id] });
            }
            break;

        // simulate a double press given that chrome extension keyboard 
        // does not allow key sequence
        case "ungroup-current":
            const now = Date.now();

            if (now - lastTriggerTimeForUngroup < 800) {
                console.log("Ungrouping all groups");
                let allTabIds = allTabs.map(tab => tab.id);
                await chrome.tabs.ungroup(allTabIds);
            } else {
                console.log("Ungrouping current group");
                let groupId = activeTab.groupId;
                const tabsInGroup = await chrome.tabs.query({ groupId, currentWindow: true });
                const tabIds = tabsInGroup.map(tab => tab.id);
                await chrome.tabs.ungroup(tabIds);
            }

            lastTriggerTimeForUngroup = now;
            break;
             
    }
});

let lastTriggerTimeForUngroup = 0;