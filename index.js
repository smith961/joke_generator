const btnEl = document.querySelector('#btn');
const jokeEl = document.querySelector('#joke');
const apiURL2 = "https://official-joke-api.appspot.com/random_joke";

const options ={
    method: "GET",
  
   
};

async function getjoke(){
 try {
    
        jokeEl.textContent = "Updating...";
        btnEl.disabled = true;
        btnEl.textContent = "Loading..."
        
        const response = await fetch(apiURL2, options)
        const data = await response.json();
        console.log(data);
       
        jokeEl.textContent = `${data.setup}  ${data.punchline}`;
        // jokeEl.textContent = "Life is like a pot of soup"
        btnEl.disabled = false;
        btnEl.textContent = "Tell me a joke";
        
    
    }
catch (error) {
        jokeEl.textContent = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.textContent = "Tell me a joke";
     }
    
} 

btnEl.addEventListener("click", getjoke)