const electron = require('electron');
console.log('type:', typeof electron);
console.log('keys:', Object.keys(electron).slice(0, 20).join(', '));
console.log('app:', typeof electron.app);
