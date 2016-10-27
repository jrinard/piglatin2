var multiWord = function(input) {
  if (/[\s]/i.test(input)){
    var inputWords = input.split(" ");
    var sentArray = [];
    var translatedWord;

    for (i = 0; i < inputWords.length; i++) {
      translatedWord = translator(inputWords[i]);
      sentArray.push(translatedWord);
    }
    return sentArray.join(" ");
  }
  else {
    return translator(input);

}
}


var translator = function(input){
  var ayWord;
  var trucatedArray;
  var inputArray;

  inputArray = input.split("");

    if (/[a-z]/i.test(inputArray[0]) === false){
      return inputArray.join("");
    }

    else if(/[aeiou]/i.test(inputArray[0])) {//handles single letter words and words that start with vowels
        ayWord = input + "ay";
     }

     else if(inputArray[0] === "q" && inputArray[1] === "u"){//handles words with qu
       firstLetter = inputArray.splice(0,2).join("");
       ayWord = inputArray.join("") + firstLetter + "ay";
     }

     else if ((/[^aeiou]/i.test(inputArray[0])) && (/[aeiou]/i.test(inputArray[1]))){
       firstLetter = inputArray.splice(0,1).join("");
       ayWord = inputArray.join("") + firstLetter + "ay";

     }
     else  { //ends if for starting with vowel begin words beginning consonants //last arguement
       for (var i = 0; i < inputArray.length; i++){
         if (/[aeiou]/i.test(inputArray[i])){

           firstLetter = inputArray.splice(0,i).join("");
           ayWord = inputArray.join("") + firstLetter + "ay";
           return ayWord;
         }
       }
    }//end if
    return ayWord;

};//end translator



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputString = $("#user-input").val();
    var translatedString = multiWord(inputString);

    $("#translated-output").show();
    $("#translated-output h4").text(translatedString);
  });

});
