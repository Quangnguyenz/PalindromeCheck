//Controller Function
function getValue(){
    let inputWord = document.getElementById("inputWord").value;

    let reversedWord = checkPal(inputWord);

    if (reversedWord[0] == false){
        displayNotPalindrome(reversedWord[1]);
    } else {
        displayPalindrome(reversedWord[1]);
    }

}


//logic function
function checkPal(inputWord){
    //convert the input string to lower case with no white space
    let lowerCaseWord = inputWord.toLowerCase();
    let newWord = lowerCaseWord.replace(/[^A-Z0-9]/ig, ""); 
    //put chars in the input string to an array
    let inputWordArray = [];
    for (let i = 0; i < newWord.length; i++) {
        inputWordArray[i] = newWord[i];
    }
    

    //Create a reversed array
    let reversedArray = [];
    for (let i = inputWordArray.length - 1; i >= 0; i--) {
        reversedArray.push(inputWordArray[i]);     
    }

    //Compare the two array to see if they are the same
    if (inputWordArray.toString() === reversedArray.toString()){
        return [true, reversedArray.join("")];
    } else {
        return [false, reversedArray.join("")]; 
    } 
}

//display function
function displayPalindrome(reversedWord){
    document.getElementById("resultBox").classList.remove("invisible");
    document.getElementById("displayTitle").innerHTML = `Great! You entered a Palindrome`;
    document.getElementById("result").innerHTML = `Your reversed word is ${reversedWord}`;
    
   
}

function displayNotPalindrome(reversedWord){
    document.getElementById("resultBox").classList.remove("invisible");
    document.getElementById("displayTitle").innerHTML = `This is not a Palindrome`;
    document.getElementById("result").innerHTML = `Your reversed word is ${reversedWord}`;
}