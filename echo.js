#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise;
let command = process.argv[2];

async function echo() {
    // Use 'await' in here
    // Your implementation here
    console.log(command);
    // console.log(2);
}

echo();
