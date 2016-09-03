"use strict"
module.exports = function(senderId, messageText, choices){
     let messageData = { 
            recipient: {
                id: senderId
            },          
            message: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "button",
                        text: messageText,
                        buttons : []
                    }
                }
            }
     };
         
    for (let i = 0; i < choices.length; ++i) {
        let choice = choices[i];        
        messageData.message.attachment.payload.buttons.push({ type: "postback", title: choice.text, payload: i });
    }
    
    return JSON.stringify(messageData);   
}



