'use strict;'

const fs = require('fs');

const raw = fs.readFileSync('src/_data/themes.json');
let { twcss } = JSON.parse(raw);

console.log(twcss);

fs.writeFile("src/styles/tailwind.css", twcss, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 