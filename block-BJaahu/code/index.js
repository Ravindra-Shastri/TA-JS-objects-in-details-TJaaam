
let question = {
title: 'Where is the capital of Jordan',
 options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
 correctAnswerIndex: 1,

title: "where is the capital of Jamaica",
 options: ["Tashkent","Amaan","Kubait City","Nairobi"],
 correctAnswerIndex: 2,
 isAnswerCorrect(index){
  return index === question.correctAnswerIndex;
},
getCorrectAnswer(){
  return question.options[question.correctAnswerIndex];
}
}

// Prototypal pattern

let questionMethods = {
    isAnswerCorrect = function(index){
        return index === this.question.correctAnswerIndex;
      },
    getCorrectAnswer = function(){
        return this.question.options[this.question.correctAnswerIndex];
      }
}

function createQuestion(title,options,correctAnswerIndex){
let question = Object.create(createQuestion.prototype);
question.title = title;
question.options = options;
question.correctAnswerIndex = correctAnswerIndex;

return question;
}


const firstQuestion = createQuestion(
    "where is the capital of Jordan",
    ["Tashkent","Amaan","Kubait City","Nairobi"],
    1
    );
    
const secondQuestion = createQuestion(
    "where is the capital of Jamaica",
    ["Tashkent","Amaan","Kubait City","Nairobi"],
    2
    );

// pseudoclassical Pattern

function CreateQuestion(title,options,correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    }

createQuestion.prototype = {
    isAnswerCorrect = function(index){
            return index === this.question.correctAnswerIndex;
      },
    getCorrectAnswer = function(){
        return this.question.options[this.question.correctAnswerIndex];
      } 
}


    //class Pattern 

    class CreateQuestion{
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
        }
    isAnswerCorrect(index){
            return index === this.question.correctAnswerIndex;
      }
    getCorrectAnswer(){
        return this.question.options[this.question.correctAnswerIndex];
      } 
    }
    

    const firstQuestion = new.CreateQuestion(
        "where is the capital of Jordan",
        ["Tashkent","Amaan","Kubait City","Nairobi"],
        1
        );
        
    const secondQuestion = new.CreateQuestion(
        "where is the capital of Jamaica",
        ["Tashkent","Amaan","Kubait City","Nairobi"],
        2
        );
        