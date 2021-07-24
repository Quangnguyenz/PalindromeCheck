//Controller Function
function getValue(){
    //Make sure no visible results yet
    document.getElementById("resultBox").classList.add("invisible");
    
    let inputWord = document.getElementById("inputWord").value;

    let returnObj = checkPalindrome(inputWord);

    displayResults(returnObj); 

}


//logic function
function checkPalindrome(inputWord){
    //convert the input string to lower case with no white space
    inputWord = inputWord.toLowerCase();
    inputWord = inputWord.replace(/[^A-Z0-9]/ig, ""); 
    //Create the reversed word
    let reversedWord = "";
    for (let i = inputWord.length - 1; i >= 0; i--) {
        reversedWord += inputWord[i];
    }
    //Create an object with a statement var and a reversed word var to use for display
    let returnObj = {};
    returnObj.reversed = reversedWord;
    if(inputWord == reversedWord){
        returnObj.resultStatement = "Great, you entered a palindrome";
    } else {
        returnObj.resultStatement = "Not a palindrome";
    }
    return returnObj;
}

//display function
function displayResults(returnObj){
    document.getElementById("resultBox").classList.remove("invisible");
    document.getElementById("displayTitle").innerHTML = `${returnObj.resultStatement}`;
    document.getElementById("result").innerHTML = `Your word reversed is ${returnObj.reversed}`;
}
    