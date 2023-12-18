let container = document.getElementById("searchResults");
let buttons = document.getElementById("buttons");
// localStorage.removeItem("event");
// let url = "http://localhost:3001/countries"
let url = "https://byte-harmony-2098.onrender.com/countries"
let places = [];

// fetchData(url,"country",selectedCountry)
let India = document.getElementById("India");
India.addEventListener("click", () => { 
            container.innerHTML = "";
    buttons.innerHTML = ""; 
  places = [];
    fetchData(url,"country","India")
})
let USA = document.getElementById("United%20States");
USA.addEventListener("click", () => {  
    container.innerHTML = "";
    buttons.innerHTML = "";
  places = [];
    fetchData(url,"country","United%20States")
})
let Australia = document.getElementById("Australia");
Australia.addEventListener("click", () => {  
    container.innerHTML = "";
    buttons.innerHTML = "";
  places = [];
    fetchData(url, "country", "Australia") 
})
let SouthAfrica = document.getElementById("South%20Africa");
SouthAfrica.addEventListener("click", () => {  
    container.innerHTML = "";
    buttons.innerHTML = "";
  places = [];
    fetchData(url,"country","South%20Africa")
})
let eventSelected = document.getElementById("event");
let create = (element) => document.createElement(element)

var today = new Date(); 
    var todayFormatted = today.toISOString().split('T')[0];
function addData(spot,i) {    
    // console.log("addalojdbvsdojbvodsbvbjdsbv6588465654564+6 : : : : ",spot)
        let card = create("div"); 
        card.classList.add("card") 
            
        let eventImage = create("img"); 
        eventImage.src = spot.image; 
        eventImage.alt = "Trekking Image"
     
        let info = create("div");
        info.classList.add("info")
 
        let title = create("p");
        title.textContent = spot.title;
    
        let price = create("p");
        price.innerHTML = `Price<span id="pricePerPerson">  Per  Person : </span> ${spot.price}.00$`;
         
        let location = create("p");
        location.textContent = `${spot.district}, ${spot.state}`;
         
        let book = create("div");
        let inp = create("input");
        inp.setAttribute("type", "date"); 
        inp.setAttribute("name", "eventDate"); 
        inp.setAttribute("class", "eventDate"); 
    inp.setAttribute("date-id", i);
    inp.value = todayFormatted;
    inp.setAttribute('min', todayFormatted);
        

    let buttonHref = create("a");
    buttonHref.removeAttribute("href");
        let button = create("button");
        button.textContent = "Book Now!!"
        buttonHref.appendChild(button);
        book.appendChild(inp);
        book.appendChild(buttonHref);
        book.setAttribute("button-id", i);
        buttonHref.addEventListener("click", () => { 
        let selectedCard = book.getAttribute("button-id");  
        let date = document.querySelectorAll("[date-id]")
            let selectedDate;
         Array.from(date).forEach((dates) => { 
             if (dates.getAttribute("date-id") == selectedCard) { 
                console.log("++++")
                selectedDate = dates.value;
            }
         })
            console.log("selected Date", selectedDate) 
            
            if (!selectedDate) {
                alert("Please select Date");
            } else {        
             buttonHref.href = "../BookSport/bookSport.html";
            }
            localStorage.setItem("event", JSON.stringify(spot)); 
            localStorage.setItem("eventDate", JSON.stringify(selectedDate)); 
        })    
    
        info.appendChild(title);
        info.appendChild(location);
        info.appendChild(price);
        info.appendChild(book);
        card.appendChild(eventImage)
        card.appendChild(info)
         
    return card;
}
document.getElementById("search").addEventListener("click", () => {  
    // console.log("999999999999")
            container.innerHTML = "";
    buttons.innerHTML = "";
        places = [];
    let selectedCountry = document.getElementById("selectCountry").value;
    let selectedSport = document.getElementById("selectEvent").value;
    // let searchInputField = document.getElementById("inputCountryOrSport").value;
    // console.log(selectedCountry , " : ", selectedSport)
    if (selectedCountry) {
        fetchData(url,"country",selectedCountry);
        // addDatafromCountry(places[0])
    } else if (selectedSport) {
        let res = fetch(url)
        .then((res) => res.json())
            .then((data) => {  
                let len = 0;
                if (selectedSport == "trekkingSpots") { 
                    // console.log("Data : ", data)
                    data.forEach((place) => {  
                        len += place.trekkingSpots.length;
                    })
                }else if (selectedSport == "raftingSpots") { 
                    // console.log("Data : ", data)
                    data.forEach((place) => {  
                        len += place.raftingSpots.length;
                    })
                }else if (selectedSport == "skyDivingSpots") { 
                    // console.log("Data : ", data)
                    data.forEach((place) => {  
                        len += place.skyDivingSpots.length;
                    })
                }  
                createPaginationButtons(Math.ceil(len / 5)); 
                addDatafromSport(data, selectedSport)
        })

    }  else { 
        alert("Select Any Field")
    }
})
async function fetchData(url, field, query) { 
    console.log(`${url}?${field}=${query}`)
    let res = await fetch(`${url}?${field}=${query}`)
    let data = await res.json();  
    addDatafromCountry(data[0])
}
function createPaginationButtons(btns) { 
    let paginationButtons = document.getElementById("paginationButtons");
    let Buttons = document.getElementById("buttons");
    console.log("ddsf :  ",Buttons)
    for (let i = 1; i <= btns; i++) { 
        let btn = create("button");
        btn.textContent = i;
        btn.setAttribute("data-id", i);
        btn.setAttribute("id","paginationBtn")
        btn.addEventListener("click", () => { 
            container.innerHTML = "";
            appendCard(i, places);
        })
        Buttons.appendChild(btn)
        
    }
    paginationButtons.appendChild(Buttons)
}
function addDatafromCountry(country) { 
    // console.log("--------")
    // let btns = country.trekkingSpots.length;
    // btns += country.raftingSpots.length;
    // btns += country.skyDivingSpots.length;
    // console.log(btns); 
    country.trekkingSpots.forEach((spot) => { 
        // container.appendChild(addData(spot));
        places.push(spot);
    })
     country.raftingSpots.forEach((spot) => { 
        // container.appendChild(addData(spot));
        places.push(spot);
     })
     country.skyDivingSpots.forEach((spot) => { 
        // container.appendChild(addData(spot));
        places.push(spot);
     })
    console.log(places)
    createPaginationButtons(Math.ceil(places.length/5));
    appendCard(1, places);

}

function appendCard(page, data) { 
    // console.log("Append Card : ", page, " : ", data)
    // let x;
    // if (page == 1) x = 0;
    // else if (page == 2) x = 5;
    // else if (page == 3) x = 10;
    // else if (page == 4) x = 15;
    // else if (page == 5) x = 10;
    let x = page * 5 - 5;
    for (let i = x; i < x + 5; i++) { 
        // console.log(" I ", i);
        container.appendChild(addData(data[i],i+1));
    }
}

function addDatafromSport(countries, selectedSport) { 
    countries.forEach((country) => {  
        country[selectedSport].forEach((spot) => { 
            // container.appendChild(addData(spot));
            places.push(spot);
            }) 
    }) 
    appendCard(1, places)
      
}
function setMinDate() {
var today = new Date(); 
    var todayFormatted = today.toISOString().split('T')[0];
    
    // document.getElementsByClassName('eventDate').setAttribute('min', todayFormatted);
    // document.getElementsByClassName('eventDate').value = todayFormatted;
    let sovsbv = document.getElementsByClassName("eventDate");
    // console.log(sovsbv)
    // console.log("Set Min Date : ",sovsbv.length);
    // let x = Array.from(sovsbv[0]);
     
    console.log(" X : ",sovsbv)
    
     
     
}

function addDatafromInput(places) { 
    places.forEach((place) => { 
        addDatafromCountry(place)
        console.log(place);
    })

}




// queryParamString = `country=${selectedCountry}`
// fetch(`${url}?${queryParamString}`)
// .then((res) => res.json())
// .then((data)=> {console.log(data)})