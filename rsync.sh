#!/usr/bin/env bash
# rsync doc to dev server
# rsync . videodesk@91.121.106.24
# WARNING, this is a git repo and 
# dirty rsync could cause git conflicts
rsync -a -c -z -l -vv -e ssh --delete --stats --exclude-from 'rsync_exclude.txt' "./build/" "videodesk@91.121.106.24:./www/doc.videodesk.com/build/"