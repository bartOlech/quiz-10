import {Result} from './results';
import {CheckAnswer} from './checkAnswer';


const question=document.querySelector('#question');
const answer1=document.querySelector('#answer-1');
const answer2=document.querySelector('#answer-2');
const answer3=document.querySelector('#answer-3');
const answer4=document.querySelector('#answer-4');
const questionNumberH3=document.querySelector('#question-number h3');
const buttonNextQuestions=document.querySelector('#button-next-question');
let pointsAmount=0;
let questionNumber=1;
let elementClicked='';

export const Category=(categoryQuestions)=>{
    question.innerHTML=categoryQuestions[0].question;
    answer1.innerHTML=categoryQuestions[0].answer1;
    answer2.innerHTML=categoryQuestions[0].answer2;
    answer3.innerHTML=categoryQuestions[0].answer3;
    answer4.innerHTML=categoryQuestions[0].answer4;
    
    console.log(CheckAnswer)

    //   buttonNextQuestions.addEventListener('click', function(){
    //     questionNumber++;
    //     questionNumberH3.innerHTML=`Pytanie ${questionNumber}`;


    //         if(elementClicked.innerHTML===categoryQuestions[0].trueAnswer){
    //             console.log('poprawna odpowiedź')
    //            pointsAmount++;
    //             Result(pointsAmount)
    //         }else{
    //             console.log('błędna odpowiedź')
    //             Result(pointsAmount)
    //         }
        
    //   })
}