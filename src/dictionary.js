const fs = require('fs');

class Dictionary {
    constructor(){
        this.words = fs.readFileSync(__dirname + '/words-list.txt').toString().split("\n").filter(word => word.length > 2);
    }

    random_word(){
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
}

module.exports = Dictionary;

// let dict = new Dictionary();

// console.log(dict.random_word());