module.exports = function(Jikeuser) {

    Jikeuser.sayHi = function  (callback) {
        callback(null, 'Hi');
    };
    Jikeuser.remoteMethod(
        'sayHi',
        {
            'accepts': [],
            'returns': [
                {'arg': 'result', 'type': 'string'}
            ],
            'http': {
                'verb': 'get',
                'path': '/say-hi'
            }
        }
    );
};
