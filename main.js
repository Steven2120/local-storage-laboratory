let input1 = document.querySelector(".input__1");
let button1 = document.querySelector(".btn__1");
let display1 = document.querySelector(".display__text1");
let refresherMessage = document.querySelector(".refresher__message");
let refresherCounter = document.querySelector(".counter__refresher");

const saveText1 = () => {
  localStorage.setItem("text-1", input1.value);
};

button1.addEventListener("click", saveText1);

display1.innerText = localStorage.getItem("text-1");

const counterRefresherFunc = () => {
  let count = Number(localStorage.getItem("counter")) || 0;
  localStorage.setItem("counter", count + 1);
};

refresherCounter.innerText =
  localStorage.getItem("counter") <= 0 ? 0 : localStorage.getItem("counter");
