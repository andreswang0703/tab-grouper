# Tab Grouper 🗂️

**Tab Grouper** is a minimal Chrome extension that helps you manage your tabs more efficiently using keyboard shortcuts. Group tabs by domain, include neighboring tabs, or ungroup with a single key press.

---

## 🚀 Features

- ✅ Group all tabs in the current window that share the same domain
- ✅ Group the tab to the left or right of the current tab
- ✅ Automatically create or extend tab groups
- ✅ Ungroup the current tab's group
- ✅ Ungroup all tabs in the current window
- ✅ Close all tabs after the current tab
- ✅ Switch to the first or last tab

---

## 🎮 Hotkeys

You can customize these under `chrome://extensions/shortcuts`.

| Command                      | Default (Windows/Linux) | Default (macOS)        | Description                                |
|-----------------------------|--------------------------|------------------------|--------------------------------------------|
| Group tabs by domain        | `Alt+Shift+G`            | `Command+Shift+1`      | Groups all tabs that match current domain  |
| Group right neighbor tab    | `Ctrl+Shift+Right`       | `Command+Shift+Right`  | Adds the tab to the right into the group   |
| Group left neighbor tab     | `Ctrl+Shift+Left`        | `Command+Shift+Left`   | Adds the tab to the left into the group    |
| Ungroup current tab group   | `Ctrl+Shift+U`           | `Command+Shift+U`      | Removes current tab from group             |
| Close tabs after current tab| User assigned            | User assigned          | Closes all tabs after the current tab      |
| Switch to first tab         | User assigned            | User assigned          | Activates the first tab in the window      |
| Switch to last tab          | User assigned            | User assigned          | Activates the last tab in the window       |

> 💡 *Double press the ungroup shortcut within a second to ungroup all tabs in the window.*
> 💡 *Assign shortcuts for user-assigned commands under `chrome://extensions/shortcuts`.*

---

## 🛠️ How to Use

1. Install the extension from the Chrome Web Store (or sideload it using `Load unpacked`).
2. Open multiple tabs from similar domains or organize your workflow tabs.
3. Use the keyboard shortcuts to group, navigate, and organize tabs without using the mouse.
4. Click the extension icon to rename the tab group if desired.

---

## 🔒 Permissions

| Permission   | Why It's Needed                          |
|--------------|------------------------------------------|
| `tabs`       | To access and manipulate browser tabs    |

✅ No data is collected or transmitted.  
✅ No tracking or third-party services used.


---

## 🛠 Setup & Build Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Local development

```bash
npm run dev
```

### 3. Build zip

```bash
npm run build
```
