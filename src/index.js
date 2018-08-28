import './scss/style.scss';
import {Category} from './js/category'
import HistoryQuestions from './history.json';
import GeographyQuestions from './geography.json'

const userInfo={
    nick:'',
    category:''
}

document.querySelector('#start-quiz-button').addEventListener('click', function(){
    userInfo.nick=document.querySelector('#input-nick').value;
    document.querySelector('#his-button').checked?userInfo.category='history':userInfo.category='geography';
    document.querySelector('#page-start').setAttribute('style', 'display:none');
    document.querySelector('#page-main-content').setAttribute('style', 'display:inline-block; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%)');
    Category(HistoryQuestions)
})

