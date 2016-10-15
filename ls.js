#!/usr/bin/env babel-node

require('./helper');
let fs = require('fs').promise;
let dir = process.argv[2];
let option = process.argv[3];
let path = require('path');

async function ls(rootPath) {
    // Use 'await' inside 'async function's
    let promise = fs.readdir(rootPath);
    let fileNames = await promise;
    for(let fileName of fileNames){
        let filePath = path.join(rootPath , fileName);
        let stats = await fs.stat(filePath);
        let isDirectory = stats.isDirectory();
        if(isDirectory == false) {
            if(dir == rootPath)
                console.log(fileName);
            else {
                let relativePath = filePath;
                relativePath = relativePath.replace(dir,'');
                console.log(relativePath);
            }
        }
        else {
            if(option == '-R')
            await ls(filePath);
        }
    }
}
async function main() {
     await ls(dir)
}
main();
    