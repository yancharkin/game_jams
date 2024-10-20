const path = require('path')
const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const fs = require('fs');

function createWindow () {
    let win = new BrowserWindow({
        backgroundColor: "#1e3a29",
        frame: true,
        resizable: true,
        width: 1024,
        height: 576,
        icon: path.join(__dirname, 'icon.png')
    })
    win.removeMenu();
    win.on('close', () => app.quit());
    try {
        win.loadFile('index.html');
    } catch (error) {
        win.loadURL(`file://${__dirname}/index.html`);
    }
    //win.webContents.openDevTools();
}
try {
    app.whenReady().then(createWindow);
} catch (error) {
    try {
        app.on('ready', createWindow);
    } catch (error) {
        console.log(error);
    }
}
