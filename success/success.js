let container = document.getElementById("bookingDetails")

let create = (element) => document.createElement(element)

function loadEventData(){ 
   let bookingDetails=JSON.parse(localStorage.getItem("bookingDeatails"));
console.log(bookingDetails);

// let bookingDetails={"noOfPeople":"3","date":"2023-12-20","totalPrice":150}
    let event = JSON.parse(localStorage.getItem("event"))
    
    let eventTitle = document.getElementById("eventTitle");
    eventTitle.textContent = event.title;

    let image = document.getElementById("eventImage");
    image.setAttribute("src", event.image)
    
    
    let location = document.getElementById("location");
    location.textContent = `${event.district}, ${event.state}`;
    
    let price = document.getElementById("price");
    price.textContent = `${bookingDetails.totalPrice}.00 $`
    setMinDate();
    //do all changes here.
}
loadEventData();  
