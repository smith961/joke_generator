const btnEl = document.querySelector('#btn');
const jokeEl = document.querySelector('#joke');

const apiKey = "EJ+LyI1GkTXhZ1sGSq5hGQ==ss2SmigTLF6zyAom";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options ={
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

async function getjoke(){
 try {
    
        jokeEl.textContent = "Updating...";
        btnEl.disabled = true;
        btnEl.textContent = "Loading..."
        
        const response = await fetch(apiURL, options)
        const data = await response.json();
       
        // jokeEl.textContent = data[0].joke;
        jokeEl.textContent = "Life is like a pot of soup"
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