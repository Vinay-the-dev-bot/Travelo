const forms = document.querySelector('.forms'),
  pwShowHide = document.querySelectorAll('.eye-icon'),
  links = document.querySelectorAll('.link')

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(
      '.password',
    )

    pwFields.forEach((password) => {
      if (password.type === 'password') {
        password.type = 'text'
        eyeIcon.classList.replace('bx-hide', 'bx-show')
        return
      }
      password.type = 'password'
      eyeIcon.classList.replace('bx-show', 'bx-hide')
    })
  })
})

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault() //preventing form submit
    forms.classList.toggle('show-signup')
  })
})

function getSignUp() {
  let fullName = document.getElementById('fullName').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  var obj = {}
  obj.FullName = fullName
  obj.Email = email
  obj.Password = password
  localStorage.setItem('user', JSON.stringify(obj))

  if (obj.Email === '' && obj.Password === '') {
    alert('Please fill all fields!')
  } else {
    alert('SignUp Successful')
    forms.classList.toggle('show-signup')
  }
}

function login() {
  let email = document.getElementById('login-email').value
  let password = document.getElementById('login-password').value
  let data = localStorage.getItem('user')
  let x = JSON.parse(data)

  if (x.Email === email && x.Password === password) {
    alert('Login Successful')

    setTimeout(() => {
      window.location.href = '../index.html'
    }, 600)
  } else {
    alert('Invalid Email or Password')
  }
}
