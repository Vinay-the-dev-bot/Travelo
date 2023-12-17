let x = localStorage.getItem('user')
let joinUs = document.getElementById('joinUs')
let learnMore = document.getElementById('learnMore')
let showUserData = document.getElementById('hidenUser')
let data = JSON.parse(x)
console.log(data.FullName)
if (x !== null) {
  joinUs.style.display = 'none'
  showUserData.innerHTML += `Welcome ${data.FullName}!`
  showUserData.classList.toggle('showUser')
} else {
  joinUs.style.display = 'block'
}

learnMore.addEventListener('click', () => {
  localStorage.removeItem('user')
  location.reload()
})
