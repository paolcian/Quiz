const {readFileSync} = require('fs');
const {shuffle} = require("../lib/shuffle");
const {Question} = require("./question");

class Quiz {
    constructor(){
        const file = readFileSync('./data/questions.json', 'utf8');
        this.answers = shuffle(JSON.parse(file).map(data => {
            return new Question(
                data.question,
                data.answers,
            );
        })
        );
        this.totalPoints = 0;
        this.currentQuestionIndex = 0;

    }

    getCurrentQuestion() {
        return this.answers[this.currentQuestionIndex];
    }

    answer(answerNumber) {
        const question = this.getCurrentQuestion();
        this.totalPoints += question.getPointsForAnswer(answerNumber);
        
        this.currentQuestionIndex++;
    }
}


module.exports = {
    Quiz,
}