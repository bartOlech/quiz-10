import './scss/style.scss';
import HistoryQuestions from './history.json';
import GeographyQuestions from './geography.json'
import {CheckAnswer} from './js/checkAnswer';

const pageRanking= document.querySelector('#page-ranking');
const pageResult=document.querySelector('#page-result');
const imgLogo=document.querySelector('#img-logo');
const inputNick=document.querySelector('#input-nick');
const amountPoints=document.querySelector('#amount-of-points');
const faceIco=document.querySelector('#face-ico');
const rankingBtn=document.querySelector('.ranking-btn');
const faceIcoBox=document.querySelector('#face-ico-box');
let showRanking=false;

const userInfo={
    nick:''
}

document.querySelector('#start-quiz-button').addEventListener('click', function(){
if(inputNick.value.length!=0){
    imgLogo.style.display='none';
    userInfo.nick=inputNick.value;
    rankingBtn.addEventListener('click', function(){
    if(showRanking){
        showRanking=false;
        faceIcoBox.setAttribute('style', 'display:flex');
        pageRanking.setAttribute('style', 'display:none');
        amountPoints.setAttribute('style', 'display:flex');
    }else{
        showRanking=true;
        faceIcoBox.setAttribute('style', 'display:none');
        amountPoints.setAttribute('style', 'display:none');
        pageRanking.setAttribute('style', 'display:flex;');
        pageRanking.classList.add('pre-animation');
        pageRanking.classList.remove('page-ranking');
        document.querySelector('#ranking-nick').innerHTML=userInfo.nick;
        setTimeout(function(){
            pageRanking.classList.remove('pre-animation');
            pageRanking.classList.add('page-ranking');
        },50)
    }
    })
    document.querySelector('#close-ranking').addEventListener('click', function(){
        showRanking=false;
        faceIcoBox.setAttribute('style', 'display:flex');
        pageRanking.setAttribute('style', 'display:none');
        amountPoints.setAttribute('style', 'display:flex');
        faceIco.setAttribute('style', 'display:flex');
    })
    document.querySelector('#page-start').setAttribute('style', 'display:none');
    document.querySelector('#page-main-content').setAttribute('style', 'display:inline-block;');
    if(document.querySelector('#his-button').checked){
        CheckAnswer(HistoryQuestions)
    }else if(document.querySelector('#geo-button').checked){
        CheckAnswer(GeographyQuestions)
    }
}else{
    document.querySelector('#arrow-box').setAttribute('style', 'display:inline');
    document.querySelector('#input-nick-label').setAttribute('style', 'display:none; height:20px;');
    document.querySelector('#empty-space').setAttribute('style', 'display:inline-block')
}
})

