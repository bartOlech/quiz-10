import {Result} from './results';

const x = document.querySelectorAll('a');
let elementClicked='';
const questionNumberH3=document.querySelector('#question-number h3');
const buttonNextQuestions=document.querySelector('#button-next-question');
let pointsAmount=0;
let questionNumber=1;
let idArray=0;
let newestArray;
const question=document.querySelector('#question');
const answer1=document.querySelector('#answer-1');
const answer2=document.querySelector('#answer-2');
const answer3=document.querySelector('#answer-3');
const answer4=document.querySelector('#answer-4');

export const CheckAnswer=(categoryQuestions)=>{
  newestArray=categoryQuestions;
  //adds text to the page from array
  question.innerHTML=newestArray[0].question;
  answer1.innerHTML=newestArray[0].answer1;
  answer2.innerHTML=newestArray[0].answer2;
  answer3.innerHTML=newestArray[0].answer3;
  answer4.innerHTML=newestArray[0].answer4;

  //chooses the correct answer
    for(let i = 0; i < x.length; i++){
        x[i].addEventListener("click", function (){
          for(let i = 0; i < x.length; i++){
            if(x[i].style.color === ""){
              x[i].setAttribute('style', 'background:#EB8500');
              x[i].setAttribute('class', '')
              this.setAttribute('style', 'background:#D95240; border:1px solid #ecebeb')
              this.setAttribute('class', 'checked')
              elementClicked=this
            }
          }
       });
      } 
      //button that adds another question
      buttonNextQuestions.addEventListener('click', function(){
        //clear select styles
        for(let i = 0; i < x.length; i++){
          x[i].setAttribute('class', '');
          x[i].setAttribute('style', 'background:#EB8500');
        }

        questionNumber++;
        //checks whether the correct answer was selects 

        if(elementClicked.innerHTML===newestArray[0].trueAnswer){
          pointsAmount++;
          console.log(pointsAmount)
        }else{
          console.log(pointsAmount)
        }

        //removes the first element from array
        newestArray=newestArray.filter(e=>e.id!==idArray)
        idArray++;

        question.innerHTML=newestArray[0].question;
        answer1.innerHTML=newestArray[0].answer1;
        answer2.innerHTML=newestArray[0].answer2;
        answer3.innerHTML=newestArray[0].answer3;
        answer4.innerHTML=newestArray[0].answer4;

        //updates text (number of questions)
        questionNumberH3.innerHTML=`Pytanie ${questionNumber}`;
        
        for(let i = 0; i < x.length; i++){
          x[i].addEventListener("click", function (){
            for(let i = 0; i < x.length; i++){
              if(x[i].style.color === ""){
                x[i].setAttribute('style', 'background:#EB8500');
                x[i].setAttribute('class', '')
                this.setAttribute('style', 'background:#D95240; border:1px solid #ecebeb')
                this.setAttribute('class', 'checked')
                elementClicked=this
              }
            }
         });
        } 
        if(questionNumber===10){
          Result(pointsAmount);
        }
      })
}