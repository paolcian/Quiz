class Question {
    constructor(questionText, answers){


        for(const key in answers){
            if(
                (typeof key !== 'string')
                ||
                (typeof answers[key] !== 'number')
            )

            {
                throw new Error('Invalid key or value of question answer.');
                
            }
            

        }

        this.answers = answers;
        this.questionText = questionText;

    }


getPointsForAnswer(answerNumber){
    const answerKeys = Object.keys(this.answers);
    const key = answerKeys[answerNumber - 1];
    const answerPoints = this.answers[key];

    if (typeof answerPoints !== 'number') {

    //return typeof answerPoints === 'number' ? answerPoints: -1;
        throw new Error('Invalid option');
    }

    return answerPoints;
    }

}

module.exports = {
    Question,
}
