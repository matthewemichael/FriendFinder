var friendArray = require('../data/friends.js')

module.exports = function(app) {


    app.get('/api/friends', function(req, res) {
            res.json(friendArray);
        })
        
    app.post('/api/friends', function(req, res) {
        var bestFriend = bestMatch(req);
        friendArray.push(req.body);
        res.json(bestFriend);
    })

};

function bestMatch(req) {
    var matchIndex = 0;
    var differences = [];

    for (var i = 0; i < friendArray.length; i++) {

        var totalDifference = 0;

        for (var j = 0; j < friendArray[i].scores.length; j++) {
            totalDifference += Math.abs(req.body.scores[j] - friendArray[i].scores[j]);
        }

        differences.push(totalDifference);

    }

    matchIndex = differences.indexOf(Math.min.apply(Math, differences));
    return friendArray[matchIndex];
}