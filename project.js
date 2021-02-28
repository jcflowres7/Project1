var numberOfRounds = window.prompt("How many rounds do you want to play? ");
listOfItems = ["r", "p", "s"];
wins = 0;

ties = 0;

loses = 0;


function resultByConditions(userInput, computerInput) {
  
  if (userInput == "r" && computerInput == "s") {
  
    alert("You win! You picked " + userInput + " which beats " + computerInput);
  
    wins += 1;
  } else if (userInput == "p" && computerInput == "s") {
    
    alert("You win! You picked " + userInput + " which beats " + computerInput);
    
    wins += 1;
  } else if (userInput == "s" && computerInput == "r") {
    
    alert("You win! You picked " + userInput + " which beats " + computerInput);
    
    wins += 1;
  } else if (choosedItemByUser == choosedItemByComputer) {
    alert("It's a tie");
    
    ties += 1;
  } else {
    
    alert(
      "You lose! the computer  pciked " + computerInput + " which beats " + userInput
    );
  
    loses += 1;
  }
}

for (var i = 0; i < numberOfRounds; i++) {
  
  var choosedItemByUser = window.prompt(
    "Do you pick rock,paper or scissors ? (enter r,p or s)"
  );
  

  var randomIndex = Math.round(Math.random() * 2);
  
  var choosedItemByComputer = listOfItems[randomIndex];

  resultByConditions(choosedItemByUser, choosedItemByComputer);
}

alert(
  " You win " +
    wins +
    " times , you tied " +
    ties +
    " you lost " +
    loses +
    " times"
);

