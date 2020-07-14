// const fs = require('fs');
// const random_words_api = require()


class Dictionary {
    constructor(){
        // this.words = fs.readFileSync(__dirname + '/words-list.txt').toString().split("\n").filter(word => word.length > 2);
        this.words = ["fallowing", "enols", "cachets", "corroborees", "thorning", "briefers", "interfuses", "selamliks", "suspecting", "ozonation", "mummifying", 
        "closedowns", "silentness", "reraised", "trenches", "recontaminates", "tearful", "sandglass", "gummers", "fret", "orchestrate", "honan", "profanenesses", 
        "mainlands", "lockable", "rottweilers", "retune", "frankforts", "butanol", "neurone", "skimp", "usuals", "woozier", "obsession", "slapdashes", "genetic", 
        "charbroiled", "censurers", "ataxias", "toled", "vainness", "tuppences", "dumbed", "minicomputer", "cricked", "connecters", "cherimoya", "equalized", 
        "fugitivenesses", "modillions", "extremity", "freehanded", "euphuisms", "eelpout", "suppressants", "phycoerythrins", "spirochaete", "backwash", "onagers", 
        "unhandsome", "crescendo", "cognized", "morosity", "catacomb", "gotcha", "rudds", "theatrical", "troubleshot", "opining", "panacean", "enamored", "eucritic", 
        "coordination", "plover", "talcose", "movie", "comedians", "sauciest", "pretension", "chromosomal", "ion", "esotropic", "kaoliangs", "untested", "unclogged", 
        "alible", "palier", "andesites", "sheeney", "centiliter", "tunic", "stoppable", "recidivist", "cosmolining", "hypnosis", "spodumene", "umping", "standings", 
        "crasser", "valvelet"];
    }

    randomWord(){
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
}

module.exports = Dictionary;

// let dict = new Dictionary();

// console.log(dict.random_word());