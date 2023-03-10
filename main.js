const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let button = document.getElementById('generate-button');
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');

function generateRandomPassword(length) {
  let random = '';
  for (let i = 0; i < length; i++) {
    random += characters[Math.floor(Math.random() * characters.length)];
  }
  return random;
}

button.addEventListener('click', function(){ 
  let randomPassword = generateRandomPassword(15);
  output1.textContent = randomPassword;
  })

  function generateRandomPassword2(length) {
    let random2 = '';
    for (let i = 0; i < length; i++) {
      random2 += characters[Math.floor(Math.random() * characters.length)];
    }
    return random2;
  }

  button.addEventListener('click', function(){ 
    let randomPassword = generateRandomPassword(15);
    output2.textContent = randomPassword;
    })