#!/usr/bin/env babel-node

require('./helper');
let fs = require('fs').promise;
let toRemove = process.argv[2];
async function rm() {
    console.log(toRemove);
    let pathStat = await fs.stat(toRemove);
    if(pathStat.isDirectory()) {
        await deleteFolderRecursive(toRemove);
    }
    else {
        await fs.unlink(toRemove);
    }
}

async function deleteFolderRecursive(path){
        let files = await fs.readdir(path);
        for (let file of files) {
            let curPath = path + "/" + file;
            let stat = await fs.stat(curPath);
            if (stat.isDirectory()) { // recurse
               await deleteFolderRecursive(curPath);
            } else { // delete file
                await fs.unlink(curPath);
            }
        }
        ;
        await fs.rmdir(path);
};

rm();