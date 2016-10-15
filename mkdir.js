#!/usr/bin/env babel-node

require('./helper');
let fs = require('fs').promise;
let newDir = process.argv[2];
let path = '';
async function createDir(path) {
    await fs.mkdir(path);
}
async function checkDir(path) {
    fs.stat(path,function (err,success) {
        if(err) {
            createDir(path);
        }
    });
}
async function mkdir() {
    let dirs = newDir.split('/');
        for (let dir of dirs) {
            path = path + dir;
            await checkDir(path);
            path = path + '/';
        }

}

mkdir();