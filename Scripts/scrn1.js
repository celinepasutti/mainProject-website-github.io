console.log("You made it to the LorS.js!");

let stop = false;

function solution(text) {

  if (text == "6") {
    return "Correct! Good job :)";
  } else if (text == "six") {
    return "Correct! Good job :)";
  } else {
    return "Hmmmm... not quite. Try a new answer, or retype your previous one.";
  }



}

function main() {
  let text = document.getElementById("textField1").value;
  document.getElementById("validityTest1").innerHTML = test (text);
  if (stop == true)
  {
    document.getElementById("answer").innerHTML = "Restart ... because I said so.";
  } else {
    document.getElementById("answer").innerHTML = "This image is in  " + solution(text);
  }
}

function test (number) {
  if(number == "") {
    stop = true;
    return "Field empty. Please enter your answer.";
  }

}
