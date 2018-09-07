const result1=document.querySelector('#result-1');
const result2=document.querySelector('#result-2');
const result3=document.querySelector('#result-3');
const result4=document.querySelector('#result-4');
const faceIco=document.querySelector('#face-ico')

export const Result=(points)=>{
    document.querySelector('#page-main-content').setAttribute('style', 'display:none');
    document.querySelector('#page-result').setAttribute('style', 'display:flex;');
    document.querySelector('#amount-of-points p span').innerHTML=`${points} pkt`;
    if(points>8){
        result1.classList.remove('result-hide');
        result1.classList.add('result-show');
        faceIco.classList.add('happy-ico')
    }else if(points<=8 && points>=6){
        result2.classList.remove('result-hide');
        result2.classList.add('result-show');
        faceIco.classList.add('happy-ico')
    }else if(points<6 && points>=3){
        result3.classList.remove('result-hide');
        result3.classList.add('result-show');
        faceIco.classList.add('indifferent-ico')
    }else if(points<3){
        result4.classList.remove('result-hide');
        result4.classList.add('result-show');
        faceIco.classList.add('sad-ico')
    }
} 