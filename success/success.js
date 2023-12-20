let container = document.getElementById('bookingDetails')
let travellersDetails = document.getElementById('travellersDetails');

let create = (element) => document.createElement(element)

function loadEventData() {
  let bookingDetails = JSON.parse(localStorage.getItem('formDetails'))
  let bookingDetails2 = JSON.parse(localStorage.getItem('event'));
  let bookingDetails3 = JSON.parse(localStorage.getItem('bookingDetails'));
  let price2 = bookingDetails2.price;
  let numOfPeople = bookingDetails.length;
  console.log(price2, " : ", numOfPeople)
  let priceForAll = Number(price2) * Number(numOfPeople);
  // console.log(priceForAll, " : ", numOfPeople)
  // console.log(priceForAll)
  
  // console.log(bookingDetails)

  // let bookingDetails={"noOfPeople":"3","date":"2023-12-20","totalPrice":150}
  let event = JSON.parse(localStorage.getItem('event'))

  let eventTitle = document.getElementById('eventTitle')
  eventTitle.textContent = event.title

  let image = document.getElementById('eventImage')
  image.setAttribute('src', event.image)

  let location = document.getElementById('location')
  location.textContent = `${event.district}, ${event.state}`

  let price = document.getElementById('price')
  // price.textContent = `${bookingDetails.totalPrice}.00 $`
  price.textContent = `${priceForAll}.00 $`

  let noofppl = document.getElementById('noofppl')
  noofppl.textContent = `${numOfPeople}`

  let cdate = document.getElementById('cdate')
  cdate.textContent = `${bookingDetails3.date}`



  setMinDate()
  //do all changes here.
}

function tvData() {
  let formDetails = JSON.parse(localStorage.getItem('formDetails'))
  let travelppl = document.getElementById("travelppl")
  let i = 1; 
  formDetails.forEach(el => {
    let tr = document.createElement("tr")
    if (i % 2 == 0) { 
      tr.setAttribute("style","background-color:#5dd991;")
    }
  let name=document.createElement("td")
  name.textContent=el.name;
  let gender=document.createElement("td")
  gender.textContent=el.gender;
  let age=document.createElement("td")
  age.textContent=el.age;
    
  tr.append(name,gender,age)
    travelppl.appendChild(tr)
    i++;
});
  console.log(formDetails)
}
tvData()
function travellers(){ 
  let formDetails = JSON.parse(localStorage.getItem('formDetails'))
  console.log(formDetails)
  for (person of formDetails) { 
    console.log(person)
    let per = create("p");
    per.textContent = `Name : ${person.name}, Age : ${person.age}, Gender : ${person.gender}`
    travellersDetails.appendChild(per);
  }
}
// travellers();
loadEventData()
