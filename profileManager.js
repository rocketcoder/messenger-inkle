"use strict"
const request = require("request");
const config = require("config");
const PAGE_ACCESS_TOKEN = (process.env.MESSENGER_PAGE_ACCESS_TOKEN) ?
  (process.env.MESSENGER_PAGE_ACCESS_TOKEN) :
  config.get('pageAccessToken');
function ProfileManager(){
    this.getProfile = (senderId) => {
        let graphPromise = new Promise((resolve, reject) => {
            request({
                    uri: 'https://graph.facebook.com/v2.6/',
                    qs: { fields : ["first_name","last_name","locale","timezone","gender"], access_token: PAGE_ACCESS_TOKEN },
                    method: 'GET'
                }, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        resolve(body);
                    }
                    else{
                        reject(error);
                    }
            }); 
        });   
        return graphPromise;
    };
}

module.exports = new ProfileManager();