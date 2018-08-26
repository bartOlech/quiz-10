import HistoryQuestions from '../history.json'

const question=document.querySelector('#question');
const answer1=document.querySelector('#answer-1');
const answer2=document.querySelector('#answer-2');
const answer3=document.querySelector('#answer-3');
const answer4=document.querySelector('#answer-4');
const buttonNextQuestions=document.querySelector('#button-next-question');


export const History=()=>{
    question.innerHTML=HistoryQuestions[0].question;
    answer1.innerHTML=HistoryQuestions[0].answer1;
    answer2.innerHTML=HistoryQuestions[0].answer2;
    answer3.innerHTML=HistoryQuestions[0].answer3;
    answer4.innerHTML=HistoryQuestions[0].answer4;

    const x = document.querySelectorAll('a');
    let elementClicked='';


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
      buttonNextQuestions.addEventListener('click', function(){

            if(elementClicked.innerHTML===HistoryQuestions[0].trueAnswer){
                console.log('poprawna odpowiedź')
            }else{
                console.log('błędna odpowiedź')
            }
        
      })
}