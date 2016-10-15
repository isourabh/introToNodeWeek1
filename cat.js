#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise;
let command = process.argv[2];

async function cat() {
    let content = await fs.readFile(command);
    console.log(content.toString());
    // console.log(2);
}

cat();
