const randomContainer = document.querySelector('.n-random')
const userBox = document.querySelector('.n-user')
const checkBox = document.querySelector('.cont-check')
const btn = document.querySelector('button')



const randomNumber = [];
const userNumber = [];
const comparate = [];


btn.addEventListener('click', function(){
  
  createUniqueBombNumber(1, 10);
  
  for(let i = 0; i < randomNumber.length; i++){
    printInPage(randomContainer, randomNumber[i], 'random');
  }
  
  
  setTimeout(function(){
    
    // -----DA SISTEMARE----
    const randomBox = document.querySelectorAll('.random');
    for(let i = 0; i < NodeList.length; i++){
      randomBox[i].innerHTML = '';

    } 

    console.log(randomBox)
    
    
    
    
  }, 5000);

  setTimeout(function(){
    
    
    
    while(userNumber.length < 5){
    
      const numberPrompt = parseInt(prompt ('Inserisci i numeri che hai visto nello stesso ordine'))
    
      userNumber.push(numberPrompt)
      console.log(userNumber)
    
    }
    
    for(let i = 0; i < userNumber.length; i++){
      printInPage(userBox, userNumber[i], 'user');
    }
    
    
    
    
  }, 6000);
  
  
});



// Funzione per stampare in pagina

function printInPage(element, text, classEl){
  const newBox = document.createElement('div');
  newBox.classList.add(classEl);
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

