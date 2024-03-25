const color = document.querySelector("#color");
const btn = document.querySelector(".btn");
const resultColor = document.querySelector(".color");
const colorCode = document.querySelector("#color-code");
const selectedColor = document.querySelector("#selected-color");
const copyClipboard = document.querySelector(".copy-clipboard");


btn.addEventListener("click",(e)=>{
    e.preventDefault();
  resultColor.style.backgroundColor = color.value;
  colorCode.value = color.value;   
  selectedColor.innerText = "";

})

copyClipboard.addEventListener("click",(e)=>{
    e.preventDefault();
    navigator.clipboard.writeText(color.value)

})
