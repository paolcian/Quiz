const readline = require('readline');
const {Quiz} = require("./src/quiz");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const theQuiz = new Quiz();

  function readQuestion() {
      const question = theQuiz.getCurrentQuestion();

      if (question === undefined) {
          console.log('======KONIEC GRY! Punktow:', theQuiz.totalPoints);
          process.exit();
          return;
      }
      console.log(' - Pytanie', question.questionText);
      let questionNumber = 1;
      for (const answer in question.answers) {
          console.log(' Odp ', questionNumber++, answer);
      }
      ;

  }

  rl.on('line', text => {
      theQuiz.answer(parseInt(text));
      readQuestion();
      rl.resume();

  });

  readQuestion();

  rl.resume();


/*const theQuiz = new Quiz();
console.log(theQuiz.getCurrentQuestion());
theQuiz.answer(2);
console.log(theQuiz.totalPoints);
console.log(theQuiz.getCurrentQuestion());
theQuiz.answer(2);
console.log(theQuiz.totalPoints);*/

/*const q1 = new Question(
    'Czy udzielisz dobrej odpowiedzi?', 
        {
    'Tak, oczywiście!': 1, 
    'Raczej nie': 0,
    'Zdecydowanie nie wiem': 0.25,
    }
);*/
/*console.log(q1.getPointsForAnswer(2.5));*/