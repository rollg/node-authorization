// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'app-id', // your App ID
        'clientSecret'  : 'app-secred', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'consumer-key',
        'consumerSecret'    : 'consumer-secret',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'client-id',
        'clientSecret'  : 'client-secret',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};
