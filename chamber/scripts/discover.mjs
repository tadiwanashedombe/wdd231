import { discover } from "../data/places.mjs";
import { displayMsg } from "./message.mjs";

displayMsg();
const cards = document.querySelector(".cards")

export function displayCards() {
    discover.forEach(place => {
        const card = document.createElement("div");
        card.setAttribute("class","card");
        card.innerHTML = `
            <h2>${place.name}</h2>
            <picture>
                <img src="${place.image}" alt="${place.name}" width="300" height="200" loading lazy>
            </picture>
            <address>
            <img src="images/location.svg" width="17" alt="loction">
                ${place.address}
            </address>
            <p>${place.description}</p>
            <button>Learn More</button>
        `
        cards.appendChild(card);
    });
}

displayCards();
