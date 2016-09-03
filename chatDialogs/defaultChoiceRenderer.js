"use strict"
module.exports = function(choices){    
    let choicesArray = [];    
    for (let i = 0; i < choices.length; ++i) {
        let choice = choices[i];
        choicesArray.push("Choice " + (i + 1) + ". " + choice.text);        
    }
    return choicesArray.join("\n");    
}