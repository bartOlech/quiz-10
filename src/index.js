import './scss/style.scss';
import HistoryQuestions from './history.json';
import GeographyQuestions from './geography.json'
import {CheckAnswer} from './js/checkAnswer';

const pageRanking= document.querySelector('#page-ranking');
const pageResult=document.querySelector('#page-result');
const imgLogo=document.querySelector('#img-logo');
const inputNick=document.querySelector('#input-nick');

const userInfo={
    nick:''
}

document.querySelector('#start-quiz-button').addEventListener('click', function(){
if(inputNick.value.length!=0){
    imgLogo.style.display='none';
    userInfo.nick=inputNick.value;
    document.querySelector('.ranking-btn').addEventListener('click', function(){

    pageRanking.setAttribute('style', 'display:flex; margin-top:-25%;');
    pageRanking.classList.add('pre-animation');
    pageRanking.classList.remove('page-ranking');
    pageResult.setAttribute('style', 'display:none');
    document.querySelector('#ranking-nick').innerHTML=userInfo.nick;
    setTimeout(function(){
        pageRanking.classList.remove('pre-animation');
        pageRanking.classList.add('page-ranking');
        },50)
    })

    document.querySelector('#close-ranking').addEventListener('click', function(){
        imgLogo.style.display='none';
        pageRanking.setAttribute('style', 'display:none')
        pageResult.setAttribute('style', 'display:flex')
    })
    document.querySelector('#page-start').setAttribute('style', 'display:none');
    document.querySelector('#page-main-content').setAttribute('style', 'display:inline-block;');
    if(document.querySelector('#his-button').checked){
        CheckAnswer(HistoryQuestions)
    }else if(document.querySelector('#geo-button').checked){
        CheckAnswer(GeographyQuestions)
    }
}else{
    document.querySelector('#arrow-box').setAttribute('style', 'display:inline')
}
})

