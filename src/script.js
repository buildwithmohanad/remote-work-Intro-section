const Hamburger = document.querySelector("nav button");
const FirstSpan = document.querySelector("nav button span:first-child");
const SecSpan = document.querySelector("nav button span:nth-child(2)");
const ThirdSpan = document.querySelector("nav button span:last-child");
let clickedTimes = 0;
Hamburger.onclick = open;
// setting click handlers
document.querySelector("nav div>ul>li:first-child").onclick =
  dropdownClickHandler;

document.querySelector("nav div>ul>li:nth-child(2)").onclick =
  dropdownClickHandler;

document.querySelector("nav >ul.phone-links>li:first-child").onclick =
  phoneLinksDropdownClickHandler;

document.querySelector("nav >ul.phone-links>li:nth-child(3)").onclick =
  phoneLinksDropdownClickHandler;

function EventHandlerSetter() {
  if (clickedTimes > 0) {
    Hamburger.onclick = close;
  } else {
    Hamburger.onclick = open;
  }
}
function open() {
  // FirstSpan.style.animation = "frsSpanAnimation 1s linear 1  normal forwards";
  // SecSpan.style.animation = "secSpanAnimation 1s linear 1  normal forwards";
  // ThirdSpan.style.animation = "thrSpanAnimation 1s linear 1  normal forwards";
  clickedTimes++;

  document.querySelector("nav ul.phone-links").style.right = "0";
  document.querySelector(".overlay").style.backgroundColor =
    "rgba(0, 0, 0, 0.6)";
  document.querySelector(".overlay").style.zIndex = "10";
  Hamburger.removeAttribute("class");
  Hamburger.classList.add("close");
  EventHandlerSetter();
}
function close() {
  // FirstSpan.style.animation = "frsSpanAnimation 1s linear 1 reverse forwards";
  // SecSpan.style.animation = "secSpanAnimation 1s linear 1 reverse forwards";
  // ThirdSpan.style.animation = "thrSpanAnimation 1s linear 1 reverse forwards";
  clickedTimes--;
  Hamburger.removeAttribute("class");
  Hamburger.classList.add("open");
  document.querySelector("nav ul.phone-links").style.right = "-100%";
  document.querySelector(".overlay").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.querySelector(".overlay").style.zIndex = "-10";

  EventHandlerSetter();
}

function dropdownClickHandler(event) {
  if (document.querySelector("li.active") === event.target) {
    document.querySelector("li.active").removeAttribute("class");
  } else {
    event.target.classList.add("active");
  }
}
function phoneLinksDropdownClickHandler(event) {
  if (document.querySelector(".phone-links li.active") === event.target) {
    document.querySelector(".phone-links li.active").removeAttribute("class");
  } else {
    event.target.classList.add("active");
  }
}
