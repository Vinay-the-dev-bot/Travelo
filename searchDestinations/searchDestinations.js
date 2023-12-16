let container = document.getElementById("searchResults");
// localStorage.removeItem("event");
let url = "http://localhost:3001/countries"
let places = [];


let eventSelected = document.getElementById("event");
let create = (element) => document.createElement(element)
function addData(spot) {    
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
        price.textContent = spot.price;
         
        let location = create("p");
        location.textContent = `${spot.district}, ${spot.state}`;
         
        let book = create("div");
        let inp = create("input");
        inp.setAttribute("type", "date"); 
        inp.setAttribute("name", "eventDate"); 
        inp.setAttribute("class", "eventDate"); 

        let buttonHref = create("a");
        buttonHref.href = "../BookSport/bookSport.html" 
    
        let button = create("button");
        button.textContent = "Book Now!!"
        buttonHref.appendChild(button);
        book.appendChild(inp);
        book.appendChild(buttonHref);
        book.addEventListener("click", () => { 
            localStorage.setItem("event", JSON.stringify(spot)); 
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
    paginationButtons.innerHTML = "";
        places = [];
    let selectedCountry = document.getElementById("selectCountry").value;
    let selectedSport = document.getElementById("selectEvent").value;
    // let searchInputField = document.getElementById("inputCountryOrSport").value;
    console.log(selectedCountry , " : ", selectedSport)
    if (selectedCountry) {
        fetchData(url,"country",selectedCountry);
        // addDatafromCountry(places[0])
    } else if (selectedSport) {
        let res = fetch(url)
        .then((res) => res.json())
            .then((data) => {  
                let len = 0;
                if (selectedSport == "trekkingSpots") { 
                    console.log("Data : ", data)
                    data.forEach((place) => {  
                        len += place.trekkingSpots.length;
                    })
                }else if (selectedSport == "raftingSpots") { 
                    console.log("Data : ", data)
                    data.forEach((place) => {  
                        len += place.raftingSpots.length;
                    })
                }else if (selectedSport == "skyDivingSpots") { 
                    console.log("Data : ", data)
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
    for (let i = 1; i <= btns; i++) { 
        let btn = create("button");
        btn.textContent = i;
        btn.setAttribute("data-id", i);
        btn.addEventListener("click", () => { 
            container.innerHTML = "";
            appendCard(i, places);
        })
        paginationButtons.appendChild(btn)
    }
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
    console.log("Append Card : ", page, " : ", data)
    let x;
    if (page == 1) x = 0;
    else if (page == 2) x = 5;
    else if (page == 3) x = 10;
    for (let i = x; i < x + 5; i++) { 
        // console.log(" I ", i);
        container.appendChild(addData(data[i]));
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

function addDatafromInput(places) { 
    places.forEach((place) => { 
        addDatafromCountry(place)
    })

}




// queryParamString = `country=${selectedCountry}`
// fetch(`${url}?${queryParamString}`)
// .then((res) => res.json())
// .then((data)=> {console.log(data)})