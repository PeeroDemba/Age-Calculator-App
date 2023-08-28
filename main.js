"use strict";

const label = document.getElementsByTagName("label");
const dayinput = document.getElementById("dayinput");
const monthinput = document.getElementById("monthinput");
const yearinput = document.getElementById("yearinput");
const form = document.forms[0];
const pform = document.createElement("p");
pform.className = "pform";
pform.style.color = "hsl(0, 100%, 67%)";
pform.style.fontStyle = "italic";
pform.style.fontSize = "0.9rem";
const dayoutput = document.getElementById("dayoutput");
const monthoutput = document.getElementById("monthoutput");
const yearoutput = document.getElementById("yearoutput");
const d = document.getElementById("day");
const m = document.getElementById("month");
const y = document.getElementById("year");
const button = document.getElementById("button");
const pday = document.createElement("p");
pday.style.color = "hsl(0, 100%, 67%)";
pday.style.fontStyle = "italic";
pday.style.fontSize = "0.9rem";
const pmonth = document.createElement("p");
pmonth.style.color = "hsl(0, 100%, 67%)";
pmonth.style.fontStyle = "italic";
pmonth.style.fontSize = "0.9rem";
const pyear = document.createElement("p");
pyear.style.color = "hsl(0, 100%, 67%)";
pyear.style.fontStyle = "italic";
pyear.style.fontSize = "0.9rem";

function day() {
  let pattern = /^\d{1,2}$/;
  if (dayinput.value == "") {
    pday.innerHTML = "This field is required";
    pform.remove();
    d.appendChild(pday);
    label[0].style.color = "hsl(0, 100%, 67%)";
    dayinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    dayinput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else if (
    dayinput.value < 1 ||
    dayinput.value > 31 ||
    !pattern.test(dayinput.value)
  ) {
    pday.innerHTML = "Must be a valid day";
    pform.remove();
    d.appendChild(pday);
    label[0].style.color = "hsl(0, 100%, 67%)";
    dayinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    dayinput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    pday.remove();
    pform.remove();
    label[0].style.color = "black";
    dayinput.style.outline = "1px solid hsl(259, 100%, 65%)";
    dayinput.style.border = "1px solid hsl(259, 100%, 65%)";
  }
}

function month() {
  let pattern = /^\d{1,2}$/;
  if (monthinput.value == "") {
    pmonth.innerHTML = "This field is required";
    pform.remove();
    m.appendChild(pmonth);
    label[1].style.color = "hsl(0, 100%, 67%)";
    monthinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    monthinput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else if (
    monthinput.value < 1 ||
    monthinput.value > 12 ||
    !pattern.test(monthinput.value)
  ) {
    pmonth.innerHTML = "Must be a valid month";
    pform.remove();
    m.appendChild(pmonth);
    label[1].style.color = "hsl(0, 100%, 67%)";
    monthinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    monthinput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    pmonth.remove();
    pform.remove();
    label[1].style.color = "black";
    monthinput.style.outline = "1px solid hsl(259, 100%, 65%)";
    monthinput.style.border = "1px solid hsl(259, 100%, 65%)";
  }
}

function year() {
  let pattern = /^\d{1,4}$/;
  if (yearinput.value == "") {
    pyear.innerHTML = "This field is required";
    pform.remove();
    y.appendChild(pyear);
    console.log("kala");
    label[2].style.color = "hsl(0, 100%, 67%)";
    yearinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    yearinput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else if (yearinput.value >= 2023) {
    pyear.innerHTML = "Must be in the past";
    pform.remove();
    y.appendChild(pyear);
    label[2].style.color = "hsl(0, 100%, 67%)";
    yearinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    yearinput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else if (!pattern.test(yearinput.value)) {
    pyear.innerHTML = "Must be a valid year";
    pform.remove();
    y.appendChild(pyear);
    label[2].style.color = "hsl(0, 100%, 67%)";
    yearinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    yearinput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    pyear.remove();
    pform.remove();
    label[2].style.color = "black";
    yearinput.style.outline = "1px solid hsl(259, 100%, 65%)";
    yearinput.style.border = "1px solid hsl(259, 100%, 65%)";
  }
}

dayinput.addEventListener("input", day);
monthinput.addEventListener("input", month);
yearinput.addEventListener("input", year);

function valid() {
  if (
    Number(yearinput.value) % 4 != 0 &&
    Number(monthinput.value) == 2 &&
    (Number(dayinput.value) == 29 ||
      Number(dayinput.value) == 30 ||
      Number(dayinput.value) == 31) &&
    Number(yearinput.value) < c
  ) {
    pform.innerHTML = "Must be a valid date";
    form.appendChild(pform);
    label[0].style.color = "hsl(0, 100%, 67%)";
    dayinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    dayinput.style.border = "1px solid hsl(0, 100%, 67%)";
    label[1].style.color = "hsl(0, 100%, 67%)";
    monthinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    monthinput.style.border = "1px solid hsl(0, 100%, 67%)";
    label[2].style.color = "hsl(0, 100%, 67%)";
    yearinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    yearinput.style.border = "1px solid hsl(0, 100%, 67%)";
    button.removeEventListener("click", calc);
  } else if (
    Number(yearinput.value) % 4 == 0 &&
    Number(monthinput.value) == 2 &&
    (Number(dayinput.value) == 30 || Number(dayinput.value) == 31) &&
    Number(yearinput.value) < c
  ) {
    pform.innerHTML = "Must be a valid date";
    form.appendChild(pform);
    label[0].style.color = "hsl(0, 100%, 67%)";
    dayinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    dayinput.style.border = "1px solid hsl(0, 100%, 67%)";
    label[1].style.color = "hsl(0, 100%, 67%)";
    monthinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    monthinput.style.border = "1px solid hsl(0, 100%, 67%)";
    label[2].style.color = "hsl(0, 100%, 67%)";
    yearinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    yearinput.style.border = "1px solid hsl(0, 100%, 67%)";
    button.removeEventListener("click", calc);
  } else if (
    (Number(monthinput.value) == 4 ||
      Number(monthinput.value) == 6 ||
      Number(monthinput.value) == 9 ||
      Number(monthinput.value) == 11) &&
    Number(dayinput.value) == 31 &&
    Number(yearinput.value) < c
  ) {
    pform.innerHTML = "Must be a valid date";
    form.appendChild(pform);
    label[0].style.color = "hsl(0, 100%, 67%)";
    dayinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    dayinput.style.border = "1px solid hsl(0, 100%, 67%)";
    label[1].style.color = "hsl(0, 100%, 67%)";
    monthinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    monthinput.style.border = "1px solid hsl(0, 100%, 67%)";
    label[2].style.color = "hsl(0, 100%, 67%)";
    yearinput.style.outline = "1px solid hsl(0, 100%, 67%)";
    yearinput.style.border = "1px solid hsl(0, 100%, 67%)";
    button.removeEventListener("click", calc);
  } else if (
    dayinput.value < 1 ||
    monthinput.value < 1 ||
    yearinput.value < 1 ||
    dayinput.value > 31 ||
    monthinput.value > 13 ||
    yearinput.value > 2023
  ) {
    button.removeEventListener("click", calc);
  } else if (
    dayinput.value != "" &&
    dayinput.value < 32 &&
    dayinput.value > 0 &&
    monthinput.value != "" &&
    monthinput.value < 13 &&
    monthinput.value > 0 &&
    yearinput.value != "" &&
    yearinput.value < c &&
    yearinput.value > 0
  ) {
    dayinput.style.outline = "1px solid hsl(259, 100%, 65%)";
    dayinput.style.border = "1px solid hsl(259, 100%, 65%)";
    monthinput.style.outline = "1px solid hsl(259, 100%, 65%)";
    monthinput.style.border = "1px solid hsl(259, 100%, 65%)";
    yearinput.style.outline = "1px solid hsl(259, 100%, 65%)";
    yearinput.style.border = "1px solid hsl(259, 100%, 65%)";
    label[0].style.color = "black";
    label[1].style.color = "black";
    label[2].style.color = "black";
    button.addEventListener("click", calc);
  }
}

form.addEventListener("input", valid);

// CALCULATIONS

let a = new Date().getDate();
let b = new Date().getMonth() + 1;
let c = new Date().getFullYear();
console.log(a);
console.log(b);
console.log(c);

function calc() {
  let you;
  let mou;
  let dou;

  if (Number(monthinput.value) < b) {
    you = c - yearinput.value;
    yearoutput.innerHTML = you;
  } else if (Number(monthinput.value) > b) {
    you = c - yearinput.value - 1;
    yearoutput.innerHTML = you;
  } else if (Number(monthinput.value) == b && Number(dayinput.value) <= a) {
    you = c - yearinput.value;
    yearoutput.innerHTML = you;
  } else if (Number(monthinput.value) == b && Number(dayinput.value) > a) {
    you = c - yearinput.value - 1;
    yearoutput.innerHTML = you;
  }

  if (Number(monthinput.value) > b && Number(dayinput.value) <= a) {
    mou = 12 - (monthinput.value - b);
    monthoutput.innerHTML = mou;
    dou = a - dayinput.value;
    dayoutput.innerHTML = dou;
  } else if (Number(monthinput.value) > b && Number(dayinput.value) > a) {
    mou = 12 - (monthinput.value - b + 1);
    monthoutput.innerHTML = mou;
    if (
      Number(monthinput.value) == 4 ||
      Number(monthinput.value) == 6 ||
      Number(monthinput.value) == 9 ||
      Number(monthinput.value) == 11
    ) {
      dou = 30 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    } else if (
      Number(monthinput.value) == 1 ||
      Number(monthinput.value) == 3 ||
      Number(monthinput.value) == 5 ||
      Number(monthinput.value) == 7 ||
      Number(monthinput.value) == 8 ||
      Number(monthinput.value) == 10 ||
      Number(monthinput.value) == 12
    ) {
      dou = 31 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    } else if (
      Number(monthinput.value) == 2 &&
      Number(yearinput.value) % 4 != 0
    ) {
      dou = 28 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    } else if (
      Number(monthinput.value) == 2 &&
      Number(yearinput.value) % 4 == 0
    ) {
      dou = 29 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    }
  } else if (Number(monthinput.value) < b && Number(dayinput.value) <= a) {
    mou = b - monthinput.value;
    monthoutput.innerHTML = mou;
    dou = a - dayinput.value;
    dayoutput.innerHTML = dou;
  } else if (Number(monthinput.value) < b && Number(dayinput.value) > a) {
    mou = b - monthinput.value - 1;
    monthoutput.innerHTML = mou;
    if (
      Number(monthinput.value) == 4 ||
      Number(monthinput.value) == 6 ||
      Number(monthinput.value) == 9 ||
      Number(monthinput.value) == 11
    ) {
      dou = 30 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    } else if (
      Number(monthinput.value) == 1 ||
      Number(monthinput.value) == 3 ||
      Number(monthinput.value) == 5 ||
      Number(monthinput.value) == 7 ||
      Number(monthinput.value) == 8 ||
      Number(monthinput.value) == 10 ||
      Number(monthinput.value) == 12
    ) {
      dou = 31 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    } else if (
      Number(monthinput.value) == 2 &&
      Number(yearinput.value) % 4 != 0
    ) {
      dou = 28 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    } else if (
      Number(monthinput.value) == 2 &&
      Number(yearinput.value) % 4 == 0
    ) {
      dou = 29 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    }
  } else if (Number(monthinput.value) == b && Number(dayinput.value) <= a) {
    mou = monthinput.value - b;
    dou = a - dayinput.value;
    monthoutput.innerHTML = mou;
    dayoutput.innerHTML = dou;
  } else if (Number(monthinput.value) == b && Number(dayinput.value) > a) {
    mou = 11;
    monthoutput.innerHTML = mou;
    if (
      Number(monthinput.value) == 4 ||
      Number(monthinput.value) == 6 ||
      Number(monthinput.value) == 9 ||
      Number(monthinput.value) == 11
    ) {
      dou = 30 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    } else if (
      Number(monthinput.value) == 1 ||
      Number(monthinput.value) == 3 ||
      Number(monthinput.value) == 5 ||
      Number(monthinput.value) == 7 ||
      Number(monthinput.value) == 8 ||
      Number(monthinput.value) == 10 ||
      Number(monthinput.value) == 12
    ) {
      dou = 31 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    } else if (
      Number(monthinput.value) == 2 &&
      Number(yearinput.value) % 4 != 0
    ) {
      dou = 28 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    } else if (
      Number(monthinput.value) == 2 &&
      Number(yearinput.value) % 4 == 0
    ) {
      dou = 29 + (a - dayinput.value);
      dayoutput.innerHTML = dou;
    }
  }

  if (dayinput.value == "" && monthinput.value == "" && yearinput.value == "") {
    dayoutput.innerHTML = "--";
    monthoutput.innerHTML = "--";
    yearoutput.innerHTML = "--";
  }
}
