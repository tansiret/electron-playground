console.log('main project working');

const deskgap = require("deskgap");
const app = deskgap.app;
const BrowserWindow = deskgap.BrowserWindow;
const path = require("path");
const url = require("url");

let win;
 function createWindow() {
   win = new BrowserWindow({width: 565, minWidth: 565, maxWidth: 565, height: 545, minHeight: 535, maxHeight: 545, icon: path.join(__dirname + '/icon.png')});
   win.loadURL(url.format({
     pathname: path.join(__dirname, 'index.html'),
     protocol: 'file',
     slashes: true
   }));

   win.on('closed', () => {
     win = null;
   })
 }

 app.on('ready', createWindow);

 app.on('activate', () => {
   if (win === nul) {
     createWindow()
   }
 })

 deskgap.app.on('browser-window-created',function(e,window) {
     window.setMenu(null);
 });
