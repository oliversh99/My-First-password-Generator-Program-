// Assignment Code
var generateBtn = document.querySelector("#generate");


var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  
function generatePassword(){
  var allcharcters =""
  // this line is for user input 
  var passwordlingth = prompt( "How long you want the password to be " ); 
  if (passwordlingth < 8 ||  passwordlingth > 128){
    alert( "password must be 8 charcters" );
    return
  }
  // this code give you 2 choice yes or no 
  var includenumber = confirm("do you want your password to include numbers");
  var includeuppercase = confirm("do you want your password to include uppercase charcter");
  var includelowercase = confirm("do you want your password to include lowercase charcter");
  
if(includenumber===true ){
  allcharcters =  allcharcters + numberChars 

}
if(includeuppercase===true ){
  allcharcters =  allcharcters + upperChars 

}
if(includelowercase===true ){
  allcharcters =  allcharcters + lowerChars

}
if (allcharcters.length === 0 ){
  alert("must slecte at least one type of charcter");
  return
}
console.log(allcharcters);
var resultpassword = ""
for ( var i = 0; i < passwordlingth; i++ ){
  var randumnum = Math.floor(Math.random() * allcharcters.length)
  resultpassword = resultpassword + allcharcters[randumnum]
  
}
    return resultpassword
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// im not done with this still need more work in it i just submit it again 


