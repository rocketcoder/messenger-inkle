var Story = require('inkjs').Story;
var json = require('./testChatDialog.json');


module.exports = function (storyState){
    var inkStory = new Story(json);
    if(storyState)
        inkStory.LoadJson(JSON.stringify(storyState));
        
    if(inkStory.canContinue)
        return { "value" : inkStory.Continue(), "state" : inkStory.storyState }; 
    else
        return { "value" : null, "state" : inkStory.storyState };    
}
