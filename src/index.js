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

    
    //timer countdown
        let loader = document.querySelector('#timer-loader')
    , border = document.querySelector('#timer-border')
    , α = 0
    , π = Math.PI
    , t = 100;

    (function draw() {
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
    //[x,y].forEach(function( d ){
    //  d = Math.round( d * 1e3 ) / 1e3;
    //});
    
    loader.setAttribute( 'd', anim );
    border.setAttribute( 'd', anim );
    
    setTimeout(draw, t); // Redraw
    })();

})

