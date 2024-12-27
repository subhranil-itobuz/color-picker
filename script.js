const btn = document.getElementById("btn")

function bodyColor() {
  const hexCode = Math.floor(Math.random() * 1000000)
  const colorCode = `#${hexCode}`
  document.body.style.backgroundColor = colorCode
  btn.innerText = colorCode
  btn.style.color = colorCode
}