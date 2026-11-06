const fs = require('node:fs');

if (fs.existsSync('index.php')) {
  console.log('OK: existe index.php');
} else {
  console.error('ERROR: falta index.php');
  process.exitcode = 1;
}
