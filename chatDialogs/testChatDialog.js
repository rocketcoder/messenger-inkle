var Story = require('inkjs').Story;
var json = require('./testChatDialog.json');


module.exports = function (storyState){
    var inkStory = new Story(json);
    if(storyState)
        inkStory.LoadJson(JSON.stringify(storyState));
        
    if(inkStory.canContinue)
        return inkStory.Continue();
    else
        return null;    
}
