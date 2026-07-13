console.log('process.versions.electron:', process.versions.electron);
console.log('process.type:', process.type);
console.log('process.electronBinding:', typeof process.electronBinding);
try {
  const { app } = require('electron/main');
  console.log('require electron/main app:', typeof app);
} catch (e) {
  console.log('require electron/main failed:', e.message);
}
