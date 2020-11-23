var chalk = require('chalk');
var readlineSync = require ('readline-sync');
var score=0;
var counter=0;
const log = console.log;
console.log(chalk.red('How well do you know about me ?'));



console.log(chalk.blue('Let us get started'));

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer)
  {
    console.log(chalk.green('Right ! '));
    score = score+1;
  }
  else {
    console.log(chalk.red('Wrong ! '));
  }
  console.log("Current Score is ",score);
  console.log('---------------------------');
}
var hiscore =
[
  {
    name:"Madhav",
    score:3
  },
  {
    name:"Virat",
    score:3
  }
]
var questions = [{
  question:'What is my name ? ',
  answer:'Madhav'
},{
  question:'Where do i live ? ',
  answer:'Vizag'
},{
  question:'Am i Married ? ',
  answer:'No'
},{
  question:'Which sport do i like ? ',
  answer:'Football'
}];
for (var i = 0;i<questions.length;i++)
{
  var currentQuestion = questions[i];
  play (currentQuestion.question, currentQuestion.answer)
}
for(var j=0;j<hiscore.length;j++)
{
  if(hiscore[j].score<score)
  {
    counter=counter+1;
  }
}
console.log('Final score is '+score);
if(counter>0)
{
  console.log("WOAH !!!! You've beaten high score");
}
console.log('-------');
