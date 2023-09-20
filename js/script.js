const randomBox = document.getElementById('n-random')
const userBox = document.getElementById('n-user')
const checkBox = document.getElementById('check')
const btn = document.querySelector('button')

console.log (randomBox)

const randomNumber = [];
const userNumber = [];


btn.addEventListener('click' function(){

  createUniqueBombNumber(1, 10);
  
  for(let i = 0; i < randomNumber.length; i++){
    printInPage(randomBox, randomNumber[i]);
  }
  
  setTimeout(function(){
    
    randomBox
    


  }, 5000);
  
  

  while(userNumber.length < 5){
  
    const numberPrompt = parseInt(prompt ('Inserisci i numeri che hai visto nello stesso ordine'))
  
    userNumber.push(numberPrompt)
    console.log(userNumber)
  
  }
  
  
  
  for(let i = 0; i < userNumber.length; i++){
    printInPage(userBox, userNumber[i]);
  }

});




// Funzione per stampare in pagina

function printInPage(element, text){
  const newBox = document.createElement('div');
  newBox.className = ('box');
  newBox.textContent = text;
  element.append(newBox);
}


// Funzione per creare i 5 numeri random unici
function createUniqueBombNumber(min, max){

  let randomNumberUnique;
  while(randomNumber.length < 5){
    
    randomNumberUnique = getRandomNumber(min, max);
    if(!randomNumber.includes(randomNumberUnique)){
      randomNumber.push(randomNumberUnique);
      console.log(randomNumber);
    }
  };

};


function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

