"use strict"
let sessionManager = require("../session/sessionManager.js")(null);  //pass the Facebook Page Access Token to get the profile information
let senderID = "1111111111";
sessionManager.getSession(senderID).then((sessionInformation) => {
    console.log(sessionInformation);
}).then(() => {
    return sessionManager.setSession(senderID, "xxxxx").then((sessionInformation) => {
        console.log(sessionInformation);
    });
}).then(() => {
    sessionManager.getSession(senderID).then((sessionInformation) => {
        console.log(sessionInformation);
    });    
});