var friendData = require("../data/friends.js");



module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        var user = req.body;
        console.log(user);
        console.log(user.scores)
        console.log(friendData)
        

        for (var i = 0; i < user.scores.length; i++) {
            var numberScores = parseInt(user.scores[i]);
            console.log(numberScores);
        }

        var bestFriendIndex = 0;
        var minimumDifference = 40;     
        
        for(var i = 0; i < friendData.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friendData[i].scores.length; j++) {
              var difference = Math.abs(user.scores[j] - friendData[i].scores[j]);
              totalDifference += difference;
            }

            if(totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }

        friendData.push(user);
        res.json(friendData[bestFriendIndex]);

    });
};