#!/bin/sh
if [ -f index.php ]; then
  echo "OK: existe index.php"
else
  echo "ERROR: falta index.php"
  exit 1
fi
