const url = "https://byte-harmony-2098.onrender.com/countries";
let mainSection = document.getElementById('package');
let Trekking = document.getElementById('trekking');
let Skydiving = document.getElementById('sky-diving');
let Riverrafting = document.getElementById('river-rafting');
let paginationSection = document.getElementById('pagination-wrapper');

var trekking_spots = [];
var skyDiving_spots = [];
var rafting_spots = [];
var Country ;


async function fetchingUrl(url,page) {
  try {
    let res = await fetch(`${url}?id=${page||1}&_limit=1`);
    let data = await res.json();

    data.forEach((country) => {
      console.log(country)
      if(country.country){
        Country = country.country;
        console.log(Country);
      }
      if (country.trekkingSpots) {
        trekking_spots.push(...country.trekkingSpots);
        console.log(trekking_spots);
      }

      if (country.skyDivingSpots) {
        skyDiving_spots.push(...country.skyDivingSpots);
      }

      if (country.raftingSpots) {
        rafting_spots.push(...country.raftingSpots);
        console.log(rafting_spots);
      }
    });

    // After fetching, call the eventsSelected function
    eventsSelected(trekking_spots);
  } catch (error) {
    console.error(error);
  }
}

// calling the fetchingUrl function
fetchingUrl(url);

// adding eventListeners
Trekking.addEventListener('click', () => {
  eventsSelected(trekking_spots);
});

Skydiving.addEventListener('click', () => {
  eventsSelected(skyDiving_spots);
});

Riverrafting.addEventListener('click', () => {
  eventsSelected(rafting_spots);
});

function eventsSelected(eventName) {
  // Clear the existing content in mainSection
  mainSection.innerHTML = '';
  
  // Append the cardList to the mainSection
  mainSection.append(cardListMaker(eventName));
}

function cardListMaker(spots) {
  let cardList = document.createElement('div');
  cardList.className = 'card-list';

  spots.forEach((spot) => {
    cardList.append(cardMaker(spot));
  });

  return cardList;
}

function cardMaker(spot) {
  let card = document.createElement('div');
  card.className = "card";

  let imageDiv = document.createElement('div');
  imageDiv.className = "image-section";

  let img = document.createElement('img');
  img.src = spot.image;
  img.alt = "spot-img";

  imageDiv.append(img);

  let Title = document.createElement('h2');
  Title.className = "card-title";
  Title.textContent = spot.title;

  let State = document.createElement('h4');
  State.className = 'card-state';
  State.textContent = spot.state;

  let Price = document.createElement('p');
  Price.className = "card-price";
  Price.textContent = `Estimated price : $${spot.price}`;

  card.append(imageDiv, Title, State, Price);

  return card;
}

function pagination() {
  let totalButtons = Math.ceil(26 / 8);

  for (let i = 1; i <= totalButtons; i++) {
    let button = document.createElement('button');
    button.className = 'paginated-buttons';
    button.innerHTML = i;
    
    button.addEventListener('click', () => {
      mainSection.innerHTML = '';
      trekking_spots = [];
      rafting_spots = [];
      skyDiving_spots = [];
      fetchingUrl(url, i);
    });

    paginationSection.append(button);
  }
}


pagination();
