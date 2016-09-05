"use strict"
let story = require("./defaultChatDialog.js");
let sessionManager = require("../session/sessionManager.js")(null);  //empty config
let senderID = "1213212121";


nextMessage(senderID);
nextMessage(senderID,2);

    
function sendTextMessage(senderId, text){
    console.log(text);
}

function nextMessage(senderID, selection){
    sessionManager.getSession(senderID).then((sessionInformation) => {
        let storyResult = story(senderID, sessionInformation.session, selection);     
        sendTextMessage(senderID, storyResult.value);
        if(storyResult.choices){
            sendTextMessage(senderID, storyResult.choices);
        }
        sessionManager.setSession(senderID, storyResult.state);
    });    
}