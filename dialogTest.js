"use strict"
let story = require("./chatDialogs/testChatDialog.js");
let sessionManager = require("./sessionManager.js");
let senderID = "1213212121";


nextMessage(senderID);
nextMessage(senderID);
nextMessage(senderID,0);

    
function sendTextMessage(senderId, text){
    console.log(text);
}

function nextMessage(senderID, selection){
    let userSession = sessionManager.getSession(senderID);
    let storyResult = story(userSession, selection); 
    sendTextMessage(senderID, storyResult.value);
    sessionManager.setSession(senderID, storyResult.state);
}