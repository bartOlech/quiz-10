import {Result} from './results';

const answers = document.querySelectorAll('a');
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
const pageMainContent= document.querySelector('#page-main-content');
let isMarked=false;

export const CheckAnswer=(categoryQuestions)=>{
  newestArray=categoryQuestions;
  //first adds text to the page from array
  question.innerHTML=newestArray[0].question;
  answer1.innerHTML=newestArray[0].answer1;
  answer2.innerHTML=newestArray[0].answer2;
  answer3.innerHTML=newestArray[0].answer3;
  answer4.innerHTML=newestArray[0].answer4;

  isMarked?buttonNextQuestions.disabled=false:buttonNextQuestions.disabled=true;

  //first chooses the correct answer
    for(let i = 0; i < answers.length; i++){
      answers[i].addEventListener("click", function (){
        isMarked=true
        isMarked?buttonNextQuestions.disabled=false:buttonNextQuestions.disabled=true;
          for(let i = 0; i < answers.length; i++){
            if(answers[i].style.color === ""){
              answers[i].setAttribute('style', 'background:#EB8500');
              answers[i].setAttribute('class', '')
              this.setAttribute('style', 'background:#D95240; border:1px solid #ecebeb')
              this.setAttribute('class', 'checked')
              elementClicked=this
            }
          }
       });
      } 
      //button that adds another question
      buttonNextQuestions.addEventListener('click', function(){
        //adding animation to next question
        pageMainContent.classList.add('pre-animation');
        pageMainContent.classList.remove('page-main-content');
        //disabled buttonNextQuestions
        isMarked?buttonNextQuestions.disabled=false:buttonNextQuestions.disabled=true;
        //changes the content of the button
        questionNumber===9?buttonNextQuestions.innerHTML='Pokaż wynik':null;
        //clear select styles
        for(let i = 0; i < answers.length; i++){
          answers[i].setAttribute('class', '');
          answers[i].setAttribute('style', 'background:#EB8500');
        }
        questionNumber++;
        //checks whether the correct answer was selects 
        elementClicked.innerHTML===newestArray[0].trueAnswer?pointsAmount++:null;
        //if questions array is empty show the result otherwise removes the first element from array
        if(questionNumber===11){
          Result(pointsAmount);
        }else{
          newestArray=newestArray.filter(e=>e.id!==idArray)
          idArray++;
          question.innerHTML=newestArray[0].question;
          answer1.innerHTML=newestArray[0].answer1;
          answer2.innerHTML=newestArray[0].answer2;
          answer3.innerHTML=newestArray[0].answer3;
          answer4.innerHTML=newestArray[0].answer4;
          //updates text (number of questions)
        questionNumberH3.innerHTML=`Pytanie ${questionNumber}`;
        //adding animation to next question
        setTimeout(function(){
          pageMainContent.classList.remove('pre-animation')
          pageMainContent.classList.add('page-main-content');
        },50)
        
        for(let i = 0; i < answers.length; i++){
          answers[i].addEventListener("click", function (){
            //disabled buttonNextQuestions
            isMarked=true
            isMarked?buttonNextQuestions.disabled=false:buttonNextQuestions.disabled=true;
            for(let i = 0; i < answers.length; i++){
              if(answers[i].style.color === ""){
                answers[i].setAttribute('style', 'background:#EB8500');
                answers[i].setAttribute('class', '')
                this.setAttribute('style', 'background:#D95240; border:1px solid #ecebeb')
                this.setAttribute('class', 'checked')
                elementClicked=this
                isMarked=false;
              }
            }
         });
        }
        } 
      })
}