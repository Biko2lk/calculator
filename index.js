let inputs = document.getElementById("inp");
let buttons = document.querySelectorAll("button");

let calc = "";
let main = Array.from(buttons);
main.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      calc = eval(calc);
      inputs.value = calc;
    } 
    else if ((e.target.innerText == "AC")) {
      calc = "";
      inputs.value = calc;
    } 

    else if(e.target.innerText == "Del"){
        calc= calc.substring(0,calc.length-1);
        inputs.value = calc;
    }

    else {
      calc += e.target.innerText;
      inputs.value = calc;
    }
  });
});
