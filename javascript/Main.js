let head = document.getElementsByTagName("head");
let CssFile = document.createElement("link");
let Icon = document.querySelector(".burger");

CssFile.rel = "stylesheet";
CssFile.href = "../css/nav.css";

Icon.onclick = function () {
  if (head[0].contains(CssFile)) {
    head[0].removeChild(CssFile);
  } else {
    head[0].appendChild(CssFile);
  }
};

let notify = document.querySelector(".bell");
let notifybox = document.querySelector(".notify");
let closebtn = document.getElementById("close");

notify.onclick = function () {
  notifybox.style.transform = "translateY(0)";
  document.body.style.overflowY = "hidden";
};
closebtn.onclick = function () {
  notifybox.style.transform = "translateY(-1000px)";
  document.body.style.overflowY = "visible";
};

let user = document.querySelector(".info .user");
let mega = document.querySelector(".mega");
let check = false;

user.onclick = function () {
  if (check === false) {
    mega.classList.add("megaon");
    check = true
  } else {
    mega.classList.remove("megaon");
    check = false
  }
};


