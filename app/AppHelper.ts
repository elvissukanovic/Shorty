const { remote } = require('electron');

export default class AppHelper {
  static minimizeAppWindow = () => {
    const tmp = remote.BrowserWindow.getFocusedWindow();
    if (tmp) tmp.minimize();
  };
}
