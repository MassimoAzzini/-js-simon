const randomContainer = document.querySelector('.n-random')
const userBox = document.querySelector('.n-user')
const checkBox = document.querySelector('.cont-check')
const btn = document.querySelector('button')


const randomNumber = [];
const userNumber = [];



btn.addEventListener('click', function(){
  // resetto gli array e l'html
  reset();

  btn.classList.add('pointer')

  // creo i numeri random e li stampo creando dei box
  createUniqueBombNumber(1, 10);
  
  for(let i = 0; i < randomNumber.length; i++){
    printInPage(randomContainer, randomNumber[i], 'random');
  }
  
  
  setTimeout(function(){
    
    // dopo 5 secondi nascondo tutta la riga dei numeri random
    randomContainer.classList.add('hide')
   
  }, 5000);


  setTimeout(function(){
    // dopo 5,5 secondi chiedo 5 numeri all'utente 
    while(userNumber.length < 5){
    
      const numberPrompt = parseInt(prompt ('Inserisci i numeri che hai visto nello stesso ordine'))
    
      userNumber.push(numberPrompt)
      console.log(userNumber)
    
    }
    // stampo i numeri dell' utente nei box
    for(let i = 0; i < userNumber.length; i++){
      printInPage(userBox, userNumber[i], 'user');

      // confronto i numeri nell'array dell'utente con quelli random e stampo nei box se hanno indovinato o se hanno sbagliato
      if(userNumber[i] === randomNumber[i]){
        printInPage(checkBox, 'V', 'true');
      }else{
        printInPage(checkBox, 'X', 'false');
      }

    }

    // faccio viusalizzare di nuovo i numeri random
    randomContainer.classList.remove('hide')

    btn.classList.remove('pointer')

    
  }, 5500);

  
});




// Funzione per reset

function reset(){
  randomContainer.innerHTML = '';
  userBox.innerHTML = '';
  checkBox.innerHTML = '';
  randomNumber.splice(0, randomNumber.length);
  userNumber.splice(0, userNumber.length);
};


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

