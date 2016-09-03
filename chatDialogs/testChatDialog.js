"use strict"
var Story = require('inkjs').Story;
var json = require('./testChatDialog.json');


module.exports = function (storyState){
    var inkStory = new Story(json);
    if(storyState)
        inkStory.state.LoadJson(storyState);
        
    if(inkStory.canContinue)
        return { "value" : inkStory.Continue(), "state" : inkStory.state.ToJson() }; 
    else
        return { "value" : null, "state" : inkStory.state.ToJson() };    
}
