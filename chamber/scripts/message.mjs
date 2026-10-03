const container = document.querySelector("#message");
const text = document.querySelector("#message-text");

const now = Date.now();

const lastVisited = localStorage.getItem('lastVisited');
console.log(lastVisited);

const daysSinceVisit = lastVisited ? Math.floor((now - lastVisited) / 86400000) : null;

export function displayMsg() {
    let message
    if (daysSinceVisit === null) {
        message = "Welcome! Let us know if you have any questions.";
    } else if (daysSinceVisit < 1) {
        message = "Back so soon! Awesome!";
    } else {
        message = `Your lat visit was ${daysSinceVisit} day(s) ago.`
    }

    text.textContent = message;
    container.classList.add("visible");

    localStorage.setItem('lastVisited', now);
    console.log(lastVisited);

}