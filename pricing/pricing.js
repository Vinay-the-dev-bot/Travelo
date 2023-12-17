const url = "https://byte-harmony-2098.onrender.com/countries";
let mainSection = document.getElementById('package');
let Trekking = document.getElementById('trekking');
let Skydiving = document.getElementById('sky-diving');
let Riverrafting = document.getElementById('river-rafting');

var trekking_spots = [];
var skyDiving_spots = [];
var rafting_spots = [];

async function fetchingUrl(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();

    data.forEach((country) => {
      if (country.trekkingSpots) {
        trekking_spots.push(...country.trekkingSpots);
      }

      if (country.skyDivingSpots) {
        skyDiving_spots.push(...country.skyDivingSpots);
      }

      if (country.raftingSpots) {
        rafting_spots.push(...country.raftingSpots);
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
