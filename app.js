let btn = document.querySelector("button");
let h4 = document.querySelector("h4");
let div = document.querySelector("div");

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}

btn.addEventListener("click", function () {
  let randomcolor = getRandomColor();
  h4.innerText = randomcolor;
  h4.style.color = randomcolor;
  div.style.backgroundColor = randomcolor;
});
