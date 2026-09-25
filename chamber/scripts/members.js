const url = "data/members.json";
const memberCards = document.querySelector(".members");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();

    return data.members;
}

function displayMembers(members) {
    members.forEach(member => {
        if(!memberCards)return;
        const card = document.createElement('section');
        card.setAttribute("class", "card")
        const bussinesName = document.createElement('h2');
        const tagLine = document.createElement('p');
        const image = document.createElement('img');
        const phone = document.createElement('p');
        const url = document.createElement('p');
        const addresss = document.createElement('p');
        const contact = document.createElement('span');
        const level = document.createElement("span");

        bussinesName.textContent = member.name;
        tagLine.innerHTML = `<i>${member.tagline}</i><hr>`

        image.setAttribute("src", member.image);
        image.setAttribute("alt", `image of  ${member.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "397");
        image.setAttribute("height", "220");

        contact.setAttribute("class", "contact");


        tagLine.setAttribute('class', "tagline");
        addresss.innerHTML = `<b>Address:</b> ${member.address}`;
        phone.innerHTML = `<b>Phone:</b> ${member.phone}`;
        url.innerHTML = `<b>Website:</b> <a href="${member.website}">Visit ${member.name}</a>`;

        if (member.membership === "Gold") {
            level.setAttribute("class", "gold");
            level.textContent = member.membership;
        } else if (member.membership === "Silver") {
            level.setAttribute("class", "silver");
            level.textContent = member.membership;
        } else {
            level.setAttribute("class", "member");
            level.textContent = member.membership;

        }

        level.classList.add("level");

        card.appendChild(image);
        card.appendChild(bussinesName);
        card.appendChild(tagLine);

        card.appendChild(level);

        contact.appendChild(addresss);
        contact.appendChild(phone);
        contact.appendChild(url);

        card.appendChild(contact);

        memberCards.appendChild(card);
    });
};

export async function allMembers() {
    const allMembers = await getMembersData();
    displayMembers(allMembers);
};

export async function topMembers() {
    const allMembers = await getMembersData();
    const topMembers = allMembers.filter(member => {
        const level = member.membership.toLowerCase();
        return level === "silver" || level === "gold";
    });

    const count = Math.min(topMembers.length, Math.floor(Math.random() * 2) + 2);
    const shuffled = [...topMembers].sort(() => Math.random() - 0.5);
    const chosen = shuffled.slice(0, count);

    displayMembers(chosen);
};