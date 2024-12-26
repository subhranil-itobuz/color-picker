const btn = document.getElementById("btn")

function bodyColor() {
  let hexCode = Math.floor(Math.random() * 100000)
  let colorCode = `#${hexCode}`
  document.body.style.backgroundColor = colorCode
  btn.innerText = colorCode
  btn.style.color = colorCode
}