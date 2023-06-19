const table = document.querySelector("table");
const main = document.querySelector(".main");
const cap = document.querySelector(".cap");
const details = document.querySelector("#details");
const color = document.querySelector(".color-change");
const p = document.querySelectorAll("p");
const landscape = document.querySelector(".landscape");
const colorSec = document.querySelector(".color-sec");

const depert = document.querySelectorAll("a");



const colorArr = [
  "white",
  "#00203FFF",
  "#606060FF",
  "#101820FF",
  "#1235CA9F",
  "#603F83FF",
  "#FAD0C9FF",
  "#990011FF",
  "#190090FF",
  "#600083FF",
  "#FA00C9FF",
  "#998811FF",
  "#CBCE91FF",
  "#FCF951FF",
  "black",
  "#ADEFD1FF",
  "#D6ED17FF",
  "#FEE715FF",
  "#A2A2A1FF",
  "#C7D3D4FF",
  "#6E6E6DFF",
  "#FCF6F5FF",
  "#76528BFF",
  "#422057FF",
];
const bgColorArr = [
  "black",
  "#ADEFD1FF",
  "#D6ED17FF",
  "#FEE715FF",
  "#A233A1FF",
  "#C7D3D4FF",
  "#6E6E6DFF",
  "#FCF6F5FF",
  "#76558BFF",
  "#427757FF",
  "white",
  "#00203FFF",
  "#76528BFF",
  "#422057FF",
  "white",
  "#00203FFF",
  "#606060FF",
  "#101820FF",
  "#195190FF",
  "#603F83FF",
  "#FAD0C9FF",
  "#990011FF",
  "#CBCE91FF",
  "#FCF951FF",
];

let refreshColor = localStorage.getItem("Lcolor");
let refreshBgColor = localStorage.getItem("Lbgcolor");
main.style.color = refreshColor;
cap.style.backgroundColor = refreshBgColor;
for (let i = 0; i < depert.length; i++) {
    depert[i].style.color = refreshColor;
  }
  for (let i = 0; i < depert.length; i++) {
    depert[i].style.backgroundColor = refreshBgColor;
  }
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = refreshBgColor;
}

let x = 0;
color.addEventListener("click", function () {
  main.style.color = `${colorArr[x]}`;
  cap.style.backgroundColor = `${bgColorArr[x]}`;
  for (let i = 0; i < depert.length; i++) {
    depert[i].style.color = `${colorArr[x]}`;
  }
  for (let i = 0; i < depert.length; i++) {
    depert[i].style.backgroundColor = `${bgColorArr[x]}`;
  }
  for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = `${bgColorArr[x]}`;
  }
  localStorage.clear();
  localStorage.setItem("Lcolor", colorArr[x]);
  localStorage.setItem("Lbgcolor", bgColorArr[x]);
  x++;
  if (x >= colorArr.length) {
    x = 0;
  }
});

landscape.addEventListener("click", function () {
  if (landscape.textContent == "Potrait") {
    landscape.innerHTML = "Landscape";
    table.classList.add("default");
  } else {
    landscape.innerHTML = "Potrait";
    table.classList.remove("default");
  }
});
