#!/bin/bash

cd province
pwd
node index.js
echo "Done generate province"

cd ..
cd district
pwd
node index.js
echo "Done generate district"

cd ..
cd sub-district
pwd
node index.js
echo "Done generate sub-district"