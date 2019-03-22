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
const timerBorder=document.querySelector('#timer-border');
const userName = document.querySelector('#input-nick');
let isMarked=false;
//timer
let loader = document.querySelector('#timer-loader')
, border = document.querySelector('#timer-border')
, α = 0
, π = Math.PI
, t = 100;

function getUserFromDB() {
  return fetch(`http://localhost:8080/dbusers`, {
    method: 'get',
    body: JSON.stringify(),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json().then(json => {
      
      const user1 = {
        user: JSON.stringify(json[0].user),
        points: JSON.stringify(json[0].points)
      }
      const user2 = {
        user: JSON.stringify(json[1].user),
        points: JSON.stringify(json[1].points)
      }
      const user3 = {
        user: JSON.stringify(json[2].user),
        points: JSON.stringify(json[2].points)
      }
      const user4 = {
        user: JSON.stringify(json[3].user),
        points: JSON.stringify(json[3].points)
      }
      const user5 = {
        user: JSON.stringify(json[4].user),
        points: JSON.stringify(json[4].points)
      }

      document.querySelector('#ranking-nick').innerHTML = user1.user.substr(1).slice(0, -1);
      document.querySelector('#ranking-nick-2').innerHTML = user2.user.substr(1).slice(0, -1);
      document.querySelector('#ranking-nick-3').innerHTML = user3.user.substr(1).slice(0, -1);
      document.querySelector('#ranking-nick-4').innerHTML = user4.user.substr(1).slice(0, -1);
      document.querySelector('#ranking-nick-5').innerHTML = user5.user.substr(1).slice(0, -1);

      document.querySelector('#points-amount').innerHTML = `${user1.points} pkt.`;
      document.querySelector('#points-amount-2').innerHTML = `${user2.points} pkt.`;
      document.querySelector('#points-amount-3').innerHTML = `${user3.points} pkt.`;
      document.querySelector('#points-amount-4').innerHTML = `${user4.points} pkt.`;
      document.querySelector('#points-amount-5').innerHTML = `${user5.points} pkt.`;
    }))
}

function nextQuestions(){
  α = 0
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
    
    function update() {
      return fetch(`http://localhost:8080/users?user=${userName.value}&points=${pointsAmount}`, {
        method: 'put',
        body: JSON.stringify(),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(checkStatus).then(getUserFromDB(pointsAmount))
    }
    
    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }
    
    update()

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
}
}

function analyzeAnswer(){
  document.querySelector('#points-amount').innerHTML=`${pointsAmount} pkt`
  for(let i = 0; i < answers.length; i++){
    answers[i].addEventListener("click", function (e){
      e.preventDefault()
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


export const CheckAnswer=(categoryQuestions)=>{



  newestArray=categoryQuestions;
  //first adds text to the page from array
  question.innerHTML=newestArray[0].question;
  answer1.innerHTML=newestArray[0].answer1;
  answer2.innerHTML=newestArray[0].answer2;
  answer3.innerHTML=newestArray[0].answer3;
  answer4.innerHTML=newestArray[0].answer4;

  isMarked?buttonNextQuestions.disabled=false:buttonNextQuestions.disabled=true;

    const endOfTime=()=>{
      nextQuestions()
    }
    //timer countdown
      (function draw() {
        if(questionNumber<11){
          α++;
          α %= 360;
          let r = ( α * π / 180 )
              , x = Math.sin( r ) * 125
              , y = Math.cos( r ) * - 125
              , mid = ( α > 180 ) ? 1 : 0
              , anim = 'M 0 0 v -125 A 125 125 1 ' 
                  + mid + ' 1 ' 
                  +  x  + ' ' 
                  +  y  + ' z';
          loader.setAttribute( 'd', anim );
          border.setAttribute( 'd', anim );
          if(α===179){
            timerBorder.classList.add('timer-animation');
          }
          if(α===359){
            timerBorder.classList.remove('timer-animation');
            endOfTime()
          }
          setTimeout(draw, t); // Redraw
        }
          })();
  //first chooses the correct answer
  analyzeAnswer();
      //button that adds another question
      buttonNextQuestions.addEventListener('click', function(){
        timerBorder.classList.remove('timer-animation');
        nextQuestions();
        analyzeAnswer();
        
    })
}