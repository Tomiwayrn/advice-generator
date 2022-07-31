//select button and span form html
const btn = document.querySelector(".dice-container");
const adviceID = document.querySelector(".advice-ID").lastChild;
const adviceText = document.querySelector(".advice-text").lastElementChild;

// fetch random advice



btn.addEventListener("click" , ()=>{
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(advice =>{
       
        
          adviceID.textContent = `${advice.slip.id}` ;
         adviceText.textContent = `"${advice.slip.advice}"`;
    })
     .catch( networkError())
});


//Error handler

function networkError() {
    adviceID.parentElement.textContent =
     "Network Error: Check your Connection and Refresh Page"
    
};


