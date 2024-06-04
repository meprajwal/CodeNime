#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <theme_name>"
  exit 1
fi

THEME_NAME=$1
BASE_DIR="themes/base"
NEW_THEME_DIR="themes/$THEME_NAME"

mkdir -p $NEW_THEME_DIR/images
mkdir -p $NEW_THEME_DIR/stickers
cp $BASE_DIR/dark.json $NEW_THEME_DIR/dark.json
cp $BASE_DIR/light.json $NEW_THEME_DIR/light.json

echo "Theme $THEME_NAME created successfully!"
