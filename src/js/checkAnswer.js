
const x = document.querySelectorAll('a');
let elementClicked='';

const CheckAnswer=()=>{
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
      return elementClicked;
}