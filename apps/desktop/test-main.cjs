console.log('process.versions:', JSON.stringify(process.versions, null, 2));
console.log('process.type:', process.type);
console.log('process.resourcesPath:', process.resourcesPath);

// Check if electron binding is available
try {
  const bindings = process._linkedBinding('electron_common_features');
  console.log('electron bindings:', typeof bindings);
} catch(e) {
  console.log('no electron bindings:', e.message);
}

// Try to get electron from internal modules
try {
  const electron = process.electronBinding || process._linkedBinding;
  console.log('electronBinding:', typeof electron);
} catch(e) {
  console.log('error:', e.message);
}
