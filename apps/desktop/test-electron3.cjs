console.log('process.versions.electron:', process.versions.electron);
const m = require('electron');
console.log('require result type:', typeof m);
if (typeof m === 'object' && m !== null) {
  console.log('app:', typeof m.app);
  console.log('BrowserWindow:', typeof m.BrowserWindow);
}
