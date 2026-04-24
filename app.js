
// don't convert to ES module like vscode wants to, it could mess you up
const { app, BrowserWindow, globalShortcut } = require('electron');

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadFile("dist/electron-template/browser/index.html");

    // DevTools are now closed by default, use F12 to toggle them

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

app.on('window-all-closed', () => {
    // Unregister all global shortcuts
    globalShortcut.unregisterAll();

    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.whenReady().then(() => {
    createWindow();

    // Register F12 to toggle DevTools
    globalShortcut.register('F12', () => {
        if (mainWindow && mainWindow.webContents) {
            if (mainWindow.webContents.isDevToolsOpened()) {
                mainWindow.webContents.closeDevTools();
            } else {
                mainWindow.webContents.openDevTools();
            }
        }
    });
});

// Create a new window when the app is activated (e.g., clicking the Dock icon on macOS)
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// Clean up global shortcuts when app is quitting
app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});
