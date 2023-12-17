let container = document.getElementById('bookingDetails')

let create = (element) => document.createElement(element)

function loadEventData() {
  let bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'))
  
  console.log(bookingDetails)

  // let bookingDetails={"noOfPeople":"3","date":"2023-12-20","totalPrice":150}
  let event = JSON.parse(localStorage.getItem('event'))

  let eventTitle = document.getElementById('eventTitle')
  eventTitle.textContent = event.title

  let image = document.getElementById('eventImage')
  image.setAttribute('src', event.image)

  let location = document.getElementById('location')
  location.textContent = `${event.district}, ${event.state}`

  let price = document.getElementById('price')
  price.textContent = `${bookingDetails.totalPrice}.00 $`

  let noofppl = document.getElementById('noofppl')
  noofppl.textContent = `${bookingDetails.noOfPeople}`

  let cdate = document.getElementById('cdate')
  cdate.textContent = `${bookingDetails.date}`



  setMinDate()
  //do all changes here.
}

function tvData() {
  let formDetails = JSON.parse(localStorage.getItem('formDetails'))
  let travelppl=document.getElementById("travelppl")
formDetails.forEach(el => {
  let tr=document.createElement("tr")
  let name=document.createElement("td")
  name.textContent=el.name;
  let gender=document.createElement("td")
  gender.textContent=el.gender;
  let age=document.createElement("td")
  age.textContent=el.age;
  
  tr.append(name,gender,age)
  travelppl.appendChild(tr)
});
  console.log(formDetails)
}
tvData()
loadEventData()
