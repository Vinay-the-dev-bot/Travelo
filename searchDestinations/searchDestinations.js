let container = document.getElementById("searchResults");
// localStorage.removeItem("event");
let places =
[{
    "id": 1,
    "country": "United States", 
    "trekkingSpots": [
        {
            "title": "USA TREKKING Appalachian Trail",
            "state": "North Carolina",
            "district": "Great Smoky Mountains",
            "price": 40,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "USA TREKKING  Yosemite National Park",
            "state": "California",
            "district": "Sierra Nevada",
            "price": 50,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "USA TREKKING  Grand Canyon",
            "state": "Arizona",
            "district": "Grand Canyon Village",
            "price": 45,
            "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        }
    ],
    "skyDivingSpots": [
        {
            "title": "USA skyDivingSpots Appalachian skyDivingSpots Trail",
            "state": "North Carolina",
            "district": "Great Smoky Mountains",
            "price": 40,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "USA skyDivingSpots Yosemite National skyDivingSpots Park",
            "state": "California",
            "district": "Sierra Nevada",
            "price": 50,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "USA skyDivingSpots Grand skyDivingSpots Canyon",
            "state": "Arizona",
            "district": "Grand Canyon Village",
            "price": 45,
            "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        }
    ],
      "raftingSpots": [
        {
            "title": "USA raftingSpots Appalachian title Trail",
            "state": "North Carolina",
            "district": "Great Smoky Mountains",
            "price": 40,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "USA raftingSpots Yosemite title National Park",
            "state": "California",
            "district": "Sierra Nevada",
            "price": 50,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "USA raftingSpots Grand title Canyon",
            "state": "Arizona",
            "district": "Grand Canyon Village",
            "price": 45,
            "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        }
    ]
    },
    {
    "id": 2,
    "country": "India", 
    "trekkingSpots": [
        {
            "title": "India trekking Appalachian India Trail",
            "state": "North Carolina",
            "district": "Great Smoky Mountains",
            "price": 40,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "India trekking Yosemite India National Park",
            "state": "California",
            "district": "Sierra Nevada",
            "price": 50,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "India trekking Grand India Canyon",
            "state": "Arizona",
            "district": "Grand Canyon Village",
            "price": 45,
            "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        }
    ],
    "skyDivingSpots": [
        {
            "title": "India skyDivingSpots Appalachian India skyDivingSpots Trail",
            "state": "North Carolina",
            "district": "Great Smoky Mountains",
            "price": 40,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "India skyDivingSpots Yosemite India National skyDivingSpots Park",
            "state": "California",
            "district": "Sierra Nevada",
            "price": 50,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "India skyDivingSpots Grand India skyDivingSpots Canyon",
            "state": "Arizona",
            "district": "Grand Canyon Village",
            "price": 45,
            "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        }
    ],
      "raftingSpots": [
        {
            "title": "India raftingSpots Appalachian India title Trail",
            "state": "North Carolina",
            "district": "Great Smoky Mountains",
            "price": 40,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "India raftingSpotsYosemite India title National Park",
            "state": "California",
            "district": "Sierra Nevada",
            "price": 50,
             "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "title": "India raftingSpots Grand India title Canyon",
            "state": "Arizona",
            "district": "Grand Canyon Village",
            "price": 45,
            "image": "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        }
    ]
        }
    ];


let eventSelected = document.getElementById("event");
let create = (element) => document.createElement(element)
function addData(spot) {    

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
    let selectedCountry = document.getElementById("selectCountry").value;
    let selectedSport = document.getElementById("selectEvent").value;
    let searchInputField = document.getElementById("inputCountryOrSport").value;
    console.log(selectedCountry , " : ", selectedSport)
    if (selectedCountry) {
        addDatafromCountry(places[0])
    } else if (selectedSport) {
        addDatafromSport(places, selectedSport)
    } else if (searchInputField) {
        addDatafromInput(places)
    } else { 
        alert("Select Any Field")
    }
})
 
function addDatafromCountry(country) {  
    country.trekkingSpots.forEach((spot) => { 
        container.appendChild(addData(spot));
    })
     country.raftingSpots.forEach((spot) => { 
        container.appendChild(addData(spot));
     })
     country.skyDivingSpots.forEach((spot) => { 
        container.appendChild(addData(spot));
    })
}

function addDatafromSport(countries,selectedSport) {     
    countries.forEach((country) => {
        country[selectedSport].forEach((spot) => { 
            container.appendChild(addData(spot));
            }) 
    })
      
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