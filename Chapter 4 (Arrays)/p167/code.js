var scores = [60, 50, 60, 58, 54, 54,
                58, 50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 51,
                69, 64, 66, 55, 52, 61,
                46, 31, 57, 52, 44, 18,
                41, 53, 55, 61, 51, 44];

function printAndGetHighScore(scores) {
    var highScore = 0;
    var output;
    for(var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " " + scores[i];
    console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highScore) {
    var highScores = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            highScores.push(i); 
        }
    }   
    return highScores;
}

var highScore = printAndGetHighScore(scores);
var highScores = getBestResults(scores, highScore);

console.log ("Bubbles tests: " + scores.length);
console.log ("Highest bubble score: " + highScore);

console.log ("Solutions with highest score: " + highScores);