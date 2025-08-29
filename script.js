// let input = document.getElementById("inputBox");

// let buttons = document.getElementsByTagName("button");

// let string = "";

// let arr = Array.from(buttons);

// arr.forEach(() => {
//   buttons.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string = string.evaluate();
//       input.value = string;
//     } else if (e.target.innerHTML == "AC") {
//       string = "";
//       input.value = string;
//     } else {
//       string += e.target.innerHTML;
//       input.value = string;
//     }
//   });
// });

let inputt = document.getElementById("inputBox");

// let fsize = document.getElementsByTagName("input");

let Dvalue = "";

function addtoD(num) {
  Dvalue += num;
  inputt.value = Dvalue;
}

function calculate() {
  if (Dvalue == "") {
    inputt.value = "NO INPUTS GIVEN";

    setTimeout(function () {
      inputt.value = Dvalue;
    }, 600);
  } else {
    try {
      ara.play();
      inputt.value = eval(Dvalue);
      Dvalue = inputt.value;
    } catch (error) {
      inputt.value = "ERROR";

      setTimeout(function () {
        inputt.value = Dvalue;
      }, 600);
    }
  }
}

// function errorr() {

//   if () {
//     inputt.value = "Please enter some value first";
//   }
// }

function allClear() {
  inputt.value = "Cleared";
  snd.play();

  setTimeout(() => {
    Dvalue = "";
    inputt.value = Dvalue;
  }, 600);
}
let snd = new Audio("uwu.mp3");

let ara = new Audio("ara ara.mp3");

function del() {
  Dvalue = Dvalue.substr(0, inputt.value.length - 1);
  inputt.value = Dvalue;
}
