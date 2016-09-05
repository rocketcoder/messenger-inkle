"use strict"
const request = require("request");

function ProfileManager(PAGE_ACCESS_TOKEN){
    this.PAGE_ACCESS_TOKEN = PAGE_ACCESS_TOKEN;      
    this.getProfile = (senderId) => {
        console.log("calling profile manager");
        let graphPromise = new Promise((resolve, reject) => {
            request({
                    uri: `https://graph.facebook.com/v2.6/${senderId}`,
                    qs: { fields : "first_name,last_name,locale,timezone,gender", access_token: this.PAGE_ACCESS_TOKEN },
                    method: 'GET'
                }, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        try{
                            resolve(JSON.parse(body));
                        }
                        catch(jsonParseError){
                            reject(jsonParseError);
                        }
                    }
                    else{
                        reject(error);
                    }
            }); 
        });   
        return graphPromise;
    };
}

module.exports = ProfileManager;