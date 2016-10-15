#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise;
let file = process.argv[2];

async function touch() {
    let fd = await fs.open(file, 'a');
    let stat = await fs.stat(file);
    let mtime = new Date();
    let content = await fs.futimes(fd,stat.atime, mtime);
    fd.close;
}

touch();