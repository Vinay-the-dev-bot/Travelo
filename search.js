let container = document.getElementById("searchResults");

let places =
{
    "id": 1,
    "country": "United States",
    "events": [{ "event": "Trekking", },
        { "event": "Skydiving", "image": "skydiving_usa.jpg" },
        { "event": "Sightseeing", "image": "Sightseeing.jpg" }
                ],
    //   "trekkingImage": "trekking_usa.jpg",
    //     "skydivingImage": "skydiving_usa.jpg",
    // "images": ["trekking_usa.jpg", "skydiving_usa.jpg", "Sightseeing.jpg"],
    "trekkingSpots": [
        {
            "title": "Appalachian Trail",
            "state": "North Carolina",
            "district": "Great Smoky Mountains",
            "price": 40,
             "image": "trekking_usa.jpg"
        },
        {
            "title": "Yosemite National Park",
            "state": "California",
            "district": "Sierra Nevada",
            "price": 50,
             "image": "trekking_usa.jpg"
        },
        {
            "title": "Grand Canyon",
            "state": "Arizona",
            "district": "Grand Canyon Village",
            "price": 45,
            "image": "trekking_usa.jpg"

        }
    ]
};
let eventSelected = document.getElementById("event");
let create = (element) => document.createElement(element)
function adddata(){ 
    // if (eventSelected.value == "Trekking") { 
        places.trekkingSpots.forEach((spot) => { 
        let card = create("div"); 
            card.classList.add("card") 
            
        let eventImage = create("img"); 
        eventImage.src = spot.image; 
        eventImage.alt = "Trekking Image"
     
        let info = create("div");
        info.classList.add("info")
 
        let title = create("p");
        title.textContent = spot.title;
         
        let location = create("p");
        location.textContent = `${spot.district}, ${spot.state}`;
         
        let book = create("div");
        let inp = create("input");
        inp.setAttribute("type", "date"); 
        inp.setAttribute("name", "eventDate"); 
            inp.setAttribute("class", "eventDate"); 
        
            let button = create("button");
            button.textContent = "Book Now!!"
            book.appendChild(inp);
            book.appendChild(button);
            
            info.appendChild(title);
            info.appendChild(location);
            info.appendChild(book);
            card.appendChild(eventImage)
            card.appendChild(info)
         
        container.appendChild(card)


    })
    // }
}
document.getElementById("search").addEventListener("click", () => { 
    console.log("CLicked")
    adddata();
})