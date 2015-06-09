/**
* Created with W8 Project.
* User: jorgec
* Date: 2015-06-08
* Time: 05:21 PM
* To change this template use Tools | Templates.
*/
define(function() {
return {};
});
var button = document.getElementById("submitButton");

button.addEventListener("click", doMath);

function doMath() {
      if  (document.getElementById("DropdownMenu1").value == "+"){
        num1 = document.getElementById('Number1').value;
        num2 = document.getElementById('Number2').value;
        answer = parseInt(num1) + parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
    }
      if  (document.getElementById("DropdownMenu1").value == "-"){
        num1 = document.getElementById('Number1').value;
        num2 = document.getElementById('Number2').value;
        answer = parseInt(num1) - parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
    }
     if  (document.getElementById("DropdownMenu1").value == "×"){
        num1 = document.getElementById('Number1').value;
        num2 = document.getElementById('Number2').value;
        answer = parseInt(num1) * parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
    }
     if  (document.getElementById("DropdownMenu1").value == "÷"){
        num1 = document.getElementById('Number1').value;
        num2 = document.getElementById('Number2').value;
        answer = parseInt(num1) / parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
    }
    if  (document.getElementById("DropdownMenu1").value == "^"){
        num1 = document.getElementById('Number1').value;
        num2 = document.getElementById('Number2').value;
        answer = Math.pow(parseInt(num1), parseInt(num2));
        document.getElementById('Answer').innerHTML = answer;
    }
    if  (document.getElementById("DropdownMenu1").value == "√"){
        num1 = document.getElementById('Number1').value;
        num2 = document.getElementById('Number2').value;
        answer = Math.sqrt(parseInt(num1), parseInt(num2));
        document.getElementById('Answer').innerHTML = answer;
    }

}