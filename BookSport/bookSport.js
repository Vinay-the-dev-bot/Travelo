var inc = () => {
    let x = Number(document.getElementById("display").value); 
    x++;
    document.getElementById("display").value = x;
    
  let allPrice = document.getElementById("priceforAll");
  let noOfPeople = document.getElementById("display").value;
  let pricePerEvent = document.getElementById("price");
  let price = Number(noOfPeople) * parseInt(pricePerEvent.textContent);
  allPrice.textContent = `Total Amount for ${noOfPeople} people is $${price}.00`;
  // Total Amount for ${noOfPeople} people is $${x}.00
}

var dec = () => {
  let x = Number(document.getElementById("display").value); 
  if (x >1) {
    x--;
    document.getElementById("display").value = x;
  } else {  
    alert("Minimum 1 person needed to book")
  }
  let allPrice = document.getElementById("priceforAll");
  let noOfPeople = document.getElementById("display").value;
  let pricePerEvent = document.getElementById("price");
  let price = Number(noOfPeople) * parseInt(pricePerEvent.textContent);
  allPrice.textContent = `Total Amount for ${noOfPeople} people is $${price}.00`;
}

function setMinDate() {
var today = new Date(); 
    var todayFormatted = today.toISOString().split('T')[0];
    document.getElementById('eventDate').setAttribute('min', todayFormatted);
    document.getElementById('eventDate').value = JSON.parse(localStorage.getItem("eventDate"));
}

let container = document.getElementById("bookingDetails")

let create = (element) => document.createElement(element)

function loadEventData(){ 
    let event = JSON.parse(localStorage.getItem("event"))
    
    let eventTitle = document.getElementById("eventTitle");
    eventTitle.textContent = event.title;

    let image = document.getElementById("eventImage");
    image.setAttribute("src", event.image)
    
    
    let location = document.getElementById("location");
    location.textContent = `${event.district}, ${event.state}`;
    
    let price = document.getElementById("price");
    price.textContent = `${event.price}.00 $`
    setMinDate();
}
loadEventData();  


document.getElementById("availability").addEventListener("click", () => { 
    let date = document.getElementById("eventDate").value;
     let noOfPeople = document.getElementById("display").value; 
     let pricePerOne = document.getElementById("price").textContent; 
    let date2 = date.substring(date.length - 2)
    let x = parseInt(pricePerOne) * Number(noOfPeople) 
    let availableOrNot = document.getElementById("availableOrNot")
    if ((Number(date2)) % 2 == 0) {
        availableOrNot.innerHTML = "";
        let p = create("p");
        p.textContent = "Seats are available for the event";
        availableOrNot.appendChild(p)

      let priceforAll = create("p");
      priceforAll.setAttribute("id", "priceforAll");
        priceforAll.textContent = `Total Amount for ${noOfPeople} people is $${x}.00`;
        availableOrNot.appendChild(priceforAll)

        let book = create("a");
        let button = create("button");
        button.setAttribute("id", "bookNow");
        book.setAttribute("href", "../travelpage/travel.html");
      button.textContent = "Book Now!!";
      button.addEventListener("click", () => {  
        let noOfPeople = document.getElementById("display").value;
        let pricePerEvent = document.getElementById("price");
        let price = Number(noOfPeople) * parseInt(pricePerEvent.textContent); 
        let obj = {
          "noOfPeople": document.getElementById("display").value,
          "date": document.getElementById("eventDate").value,
          "totalPrice": price
        }
        localStorage.setItem("bookingDetails",JSON.stringify(obj))
      })
        book.appendChild(button)
      availableOrNot.appendChild(book)
      
    } else { 
      availableOrNot.innerHTML = "";
      let p = create("p");
        p.textContent = "Sorry!!!  Seats are not available for the selected date";
        availableOrNot.appendChild(p)
        let goback = create("a");
        goback.setAttribute("href", "../searchDestinations/searchDestinations.html")
        let button = create("button")
        button.setAttribute("id", "otherLocations")
        button.textContent = "Check for other locations"
        goback.appendChild(button)
        availableOrNot.append(goback)
    }
})
