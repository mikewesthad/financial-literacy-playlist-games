# "The Night Before" Game

A choose your own adventure game about preparing for your first day on the job, for the Workforce 101 Playlist (Chicagobility).

[Link](https://www.mikewesthad.com/financial-literacy-playlist-games/the-night-before/)

## Editing

Built with [Twine](http://twinery.org). You can load & edit the game file by dragging and dropping it into the Twine editor.

## Deploying

There are two places games are uploaded - GitHub pages & Convergence servers. `npm run deploy` will deploy to both ftp and GitHub pages.

The GitHub pages upload source is specified in the `deploy:gh-pages` script. It will upload the files to a folder with a name matching `$npm_package_name`.

The ftp upload destination is pulled from package.json: `$npm_package_config_ftp_dest/$npm_package_name`. The ftp upload source can be configured in the `deploy:ftp` script. To upload to Convergence servers, make sure to have a `.env` in this format:

```
FTP_HOST=blah.hosting.com
FTP_USER=the_username
FTP_PASS=the_password
```
