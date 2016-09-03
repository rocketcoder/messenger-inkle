"use strict"
let Story = require('inkjs').Story;
let json = require('./testChatDialog.json');
let choiceFormatter = require('./defaultChoiceRenderer.js');

module.exports = function (senderId, storyState, selectedChoiceIndex){
    
    var inkStory = new Story(json);
    if(storyState){
        inkStory.state.LoadJson(storyState);
    }
        
    if(inkStory.currentChoices.length > 0 && selectedChoiceIndex >= 0){
        inkStory.ChooseChoiceIndex (selectedChoiceIndex);
    }
      
    if(inkStory.canContinue){  
        let messageText = inkStory.Continue();
    
        if(inkStory.currentChoices.length > 0){                
            let renderedChoices = choiceFormatter(senderId, messageText, inkStory.currentChoices);
            return { "value" : renderedChoices, "state" : inkStory.state.toJson() };
        }
        else 
            return { "value" : messageText, "state" : inkStory.state.toJson() };        
    }    
    else{
        return { "value" : null, "state" : inkStory.state.toJson() };
    }    
    
}


