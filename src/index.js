import './scss/style.scss';
import {Category} from './js/category'
import HistoryQuestions from './history.json';
import GeographyQuestions from './geography.json'

const userInfo={
    nick:''
}

document.querySelector('#start-quiz-button').addEventListener('click', function(){
    userInfo.nick=document.querySelector('#input-nick').value;
    document.querySelector('.ranking-btn').addEventListener('click', function(){
        document.querySelector('#page-ranking').setAttribute('style', 'display:flex')
        document.querySelector('#page-result').setAttribute('style', 'display:none')
        document.querySelector('#ranking-nick').innerHTML=userInfo.nick;
    })
    document.querySelector('#close-ranking').addEventListener('click', function(){
        document.querySelector('#page-ranking').setAttribute('style', 'display:none')
        document.querySelector('#page-result').setAttribute('style', 'display:flex')
    })
    document.querySelector('#page-start').setAttribute('style', 'display:none');
    document.querySelector('#page-main-content').setAttribute('style', 'display:inline-block; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%)');
    if(document.querySelector('#his-button').checked){
        Category(HistoryQuestions)
    }else if(document.querySelector('#geo-button').checked){
        Category(GeographyQuestions)
    }
})

