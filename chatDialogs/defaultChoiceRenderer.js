"use strict"
module.exports = function(senderId, messageText, choices){
     var messageData = {
    recipient: {
      id: senderId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: []
        }
      }
    }
  };  
         
    for (let i = 0; i < choices.length; ++i) {
        let choice = choices[i];        
        messageData.message.attachment.payload.elements.push(
        {
            title: "Option " + i,
            subtitle: messageText,
            buttons : [{ type: "postback", title: choice.text, payload: i }]
        });
    }
    
    
    return JSON.stringify(messageData);   
}
