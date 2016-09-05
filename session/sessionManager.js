"use strict"
let profileManager = require('./profileManager.js');

module.exports = function (fbPageAccessToken){    
    //In Memory session caches.... maybe one day or Blob storage, nosql db?
    let session = {};
    let profiles = {};
    let profileEnabled = fbPageAccessToken ? true : false;
    let faceBookPageAccessToken = fbPageAccessToken;
    ///Get the session data.  If the profile is not set, use this chance to look up the FaceBook profile
    function getSession(senderId){
        let profilePromise = getProfile(senderId);
        let sessionPromise = new Promise((resolve, reject) => { 
            let sessionObj = session[senderId] ? session[senderId] : null;
            resolve(sessionObj);             
        });
                    
        return Promise.all([profilePromise, sessionPromise]).then((profile, session) => {
           return { profile : profile, session: session }; 
        });        
    }
    
    ///Sets the session data
    function setSession(senderId, data){
        let profilePromise = getProfile(senderId);
        let sessionPromise = new Promise((resolve, reject) => {
            session[senderId] = data;
            resolve(data);    
        });
        return sessionPromise;
    }
    
    //Only looks up the FaceBook profile information if it doesn't already exist in cache
    function getProfile(senderId){
        let profilesPromise = new Promise((resolve, reject) => { 
            if(profileEnabled === true && !profiles[senderId]){
                new profileManager(faceBookPageAccessToken).getProfile(senderId).then((profile) => {
                    profiles[senderId] = profile;     
                    resolve(profile);               
                }).catch((err) => {
                    reject(err);
                });
            }
            else{
                resolve(profiles[senderId]);
            }
        });
        return profilesPromise;
    }
    return { getSession : getSession, setSession : setSession };    
};