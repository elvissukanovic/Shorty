export default class AppHelper {
  static minimizeAppWindow = () => {
    const remote = window.require ? window.require('electron').remote : null;
    const WIN = remote?.getCurrentWindow();
    WIN?.minimize();
  };
}
