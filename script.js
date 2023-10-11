function calculateRemainder() {
    var number1 = parseInt(document.getElementById("number1Input").value);
    var number2 = parseInt(document.getElementById("number2Input").value);
    var resultText = document.getElementById("resultText");
    
    var remainder = number1 % number2;
    resultText.textContent = "The Remainder Of Division: " + remainder;
  }