const url = "https://byte-harmony-2098.onrender.com/countries";
let mainSection = document.getElementById('package');
let Trekking = document.getElementById('trekking');
let Skydiving = document.getElementById('sky-diving');
let Riverrafting = document.getElementById('river-rafting');
let paginationSection = document.getElementById('pagination-wrapper');

var trekking_spots = [];
var skyDiving_spots = [];
var rafting_spots = [];
var currentNav = "trekking"; // Default to trekking

async function fetchingUrl(url, page) {
  try {
    let res = await fetch(`${url}?id=${page || 1}`);
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

    eventsSelected();
  } catch (error) {
    console.error(error);
  }
}

// calling the fetchingUrl function
fetchingUrl(url);

// adding eventListeners
Trekking.addEventListener('click', () => {
  currentNav = "trekking";
  eventsSelected();
});

Skydiving.addEventListener('click', () => {
  currentNav = "skyDiving";
  eventsSelected();
});

Riverrafting.addEventListener('click', () => {
  currentNav = "rafting";
  eventsSelected();
});

function eventsSelected() {
  // Clear the existing content in mainSection
  mainSection.innerHTML = '';

  // Update the cardList to the mainSection based on the currentNav
  switch (currentNav) {
    case "trekking":
      mainSection.append(cardListMaker(trekking_spots));
      break;
    case "skyDiving":
      mainSection.append(cardListMaker(skyDiving_spots));
      break;
    case "rafting":
      mainSection.append(cardListMaker(rafting_spots));
      break;
    default:
      break;
  }
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

  let anchor = document.createElement('a');
  anchor.href = "../searchDestinations/searchDestinations.html";

  let btn = document.createElement('button');
  btn.className = "explore-button";
  btn.innerHTML = 'Explore Destination';
 anchor.append(btn);
  card.append(imageDiv, Title, State, Price,anchor);

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
