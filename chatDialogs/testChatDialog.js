"use strict"
let Story = require('inkjs').Story;
let json = require('./testChatDialog.json');
let choiceFormatter = require('./defaultChoiceRenderer.js');

module.exports = function (storyState, selectedChoiceIndex){
    
    var inkStory = new Story(json);
    if(storyState){
        inkStory.state.LoadJson(storyState);
    }
        
    if(inkStory.currentChoices.length > 0 && selectedChoiceIndex >= 0){
        inkStory.ChooseChoiceIndex (selectedChoiceIndex);
    }
        
    if(inkStory.currentChoices.length > 0){        
        let renderedChoices = choiceFormatter(inkStory.currentChoices);
        return { "value" : renderedChoices, "state" : inkStory.state.toJson() };
    }
    else{           
        if(inkStory.canContinue){
            return { "value" : inkStory.Continue(), "state" : inkStory.state.toJson() };        
        }    
        else{
            return { "value" : null, "state" : inkStory.state.toJson() };
        }    
    }
}


