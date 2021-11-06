//DOM
const clickHeading = document.querySelector("#click-heading");
const autoHeading = document.querySelector("#auto-heading");
const multiplierHeading = document.querySelector("#multiplier-heading");
const buyBtn = document.querySelector("#buy-btn");
const autoBtn = document.querySelector("#auto-btn");
const multiplierBtn = document.querySelector("#multiplier-btn");
const aboutauthorBtn = document.querySelector("#aboutauthor-btn");
const inspirationBtn = document.querySelector("#inspiration-btn")
const restartBtn = document.querySelector("#restart-btn");

multiplierBtn.disabled = true;
autoBtn.disabled = true;

//Gamevariables
let lumpia = 0.00;
let cost = 100;
let autoClickerAmount = 0;
let multiplierAmount = 0;


//Eventlistener
buyBtn.addEventListener("click", () => {
    lumpia += Math.pow(1.2, multiplierAmount);
    updateUi();
    });

autoBtn.addEventListener("click", ()=>{
    if(lumpia >= cost){
        lumpia = lumpia - cost;
        cost = cost * 1.1;
       autoClickerAmount += 1;
    }else{
    

    }  
});

multiplierBtn.addEventListener("click", ()=>{
    if(lumpia >= 10){
        lumpia = lumpia - 10;
        multiplierAmount += 1;
        if(lumpia < 10 ){
            multiplierBtn.disabled = true; 
            
          }
    } else{
        multiplierBtn.disabled = true;
        

}

});

aboutauthorBtn.addEventListener("click",()=>{
    window.location.href = "https://nathanielnorris.github.io/";

});

inspirationBtn.addEventListener("click",()=>{
    window.location.href = "https://orteil.dashnet.org/cookieclicker/";
});

restartBtn.addEventListener("click", ()=>{
    lumpia = 0.00;
    cost = 100;
    autoClickerAmount = 0;
    multiplierAmount = 0;
    updateUi;
});
 

//function
function doAutoClicker(){
    lumpia += autoClickerAmount * Math.pow(1.2, multiplierAmount); 
    if(lumpia >= 10 ){
        multiplierBtn.disabled= false; 
        
      }
      if(lumpia >= 100){
          autoBtn.disabled = false;
      }else{
          autoBtn.disabled = true;
      }

}
    
window.setInterval(() => {
    doAutoClicker();
    updateUi();
     }, 750);

     


function updateUi(){
    clickHeading.innerHTML = `Buy Lumpia: ${lumpia.toFixed(2)}`;
    multiplierHeading.innerHTML = `Multiplier: ${multiplierAmount}`;
    autoHeading.innerHTML = `AutoClickers: ${autoClickerAmount}`;
    
    if(lumpia >= 10 ){
        multiplierBtn.disabled = false; 
        
      }else{
          multiplierBtn.disabled = true;
      }
}