//For loop adding all numbers leading to sum

var input = prompt("Enter any number!");
var sum = 0;

for (var i = 1; i <= input; i++) {
  sum += i;
}
console.log("The total of all numbers leading to your input: " +sum);

//Do...While loop (Would you like to play a game?)

var prompt0 = prompt("Would you like to play a game?", "yes or no");
var prompt1;
var word = "";

if (prompt0 === "yes") {
  var prompt2 = prompt("Enter a word.");
  word += prompt2 + " ";
}

do {
    if (prompt0 != "yes") {
      break;
    }
    var prompt1 = prompt("Would you like to play again?", "yes or no");
    if (prompt1 === "yes") {
      var prompt2 = prompt("Enter a word.")
      word += prompt2 + " ";
    }
}while (prompt2 !="" && prompt1 === "yes");

if (prompt1 === "no") {
  console.log(word);
}

//While loop

var nameprint = prompt('Would you like to print your name?', 'yes or no');

if (nameprint === "yes") {
  var entername = prompt('Enter your name.');
}

if (entername != "") {
  console.log(entername);
  var printagain = prompt('Would you like to print this again?');
}

while (printagain === "yes") {
  console.log(entername += "!");
  var printagain = prompt('Would you like to print this again?');
}
