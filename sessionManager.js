module.exports = (function (){
    let session = {};
    function getSession(senderId){
        return session[senderId] ? session[senderId] : null;
    }
    function setSession(senderId, data){
        session[senderId] = data;
    }
    return { getSession : getSession, setSession : setSession };
    
})();