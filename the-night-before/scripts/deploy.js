require("dotenv").config();

const parseArgs = require("minimist");
const ftp = require("vinyl-ftp");
const fs = require("vinyl-fs");

const argv = require("minimist")(process.argv.slice(2));
const { src, dest } = argv;
if (!src)
  throw new Error(
    "You must specify where the source files to upload are, using --src"
  );
if (!dest)
  throw new Error(
    "You must specify where the destination directory on the ftp server is, using using --dest"
  );

const conn = ftp.create({
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASS,
  parallel: 10,
  log: console.log
});

fs
  .src([src], { buffer: false })
  .pipe(conn.newer(dest))
  .pipe(conn.dest(dest));
