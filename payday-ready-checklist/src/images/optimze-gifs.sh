#!/bin/sh

for file in ./*.gif; do
  if [[ "$file" != *"optimized"* ]]; then
    gifsicle --colors 128 --resize-fit-width 350 -i "$file" > "${file%.*}-optimized.gif"
  fi
done

