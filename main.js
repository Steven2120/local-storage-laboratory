let input1 = document.querySelector(".input__1");
let button1 = document.querySelector(".btn__1");
let display1 = document.querySelector(".display__text1");
let refresherMessage = document.querySelector(".refresher__message");
let refresherCounter = document.querySelector(".counter__refresher");
let input3 = document.querySelector(".input__3");
let button3 = document.querySelector(".btn__3");
let ordered = document.querySelector(".chall__3");

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

//CHALLENGE 3
let textArr = JSON.parse(localStorage.getItem("textArr")) || [];

const saveText3 = () => {
  textArr = JSON.parse(localStorage.getItem("textArr"));
  textArr.push(input3.value);
  localStorage.setItem("textArr", JSON.stringify(textArr));

  var li = document.createElement("li");

  li.innerText = input3.value;

  ordered.appendChild(li);
};

button3.addEventListener("click", saveText3);

if (textArr) {
  for (let i = 0; i < JSON.parse(localStorage.getItem("textArr")).length; i++) {
    var li = document.createElement("li");

    li.innerHTML = JSON.parse(localStorage.getItem("textArr"))[i];

    ordered.appendChild(li);
  }
}
