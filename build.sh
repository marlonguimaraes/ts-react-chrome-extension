rm -rf dist
parcel build html/*.html react/*.tsx chrome/*.ts
cp -r images dist/
cp manifest.json dist/
