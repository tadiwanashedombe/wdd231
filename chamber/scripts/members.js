const url = "data/members.json";
const memberCards = document.querySelector(".members");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

function displayMembers(members){
    members.forEach(member => {
        const card = document.createElement('section');
        const bussinesName = document.createElement('h3');
        const tagLine = document.createElement('p');
        const image = document.createElement('img');
        const phone = document.createElement('p');
        const url = document.createElement('p');
        const addresss = document.createElement('p');
        const details = document.createElement('span');
        const contact = document.createElement('span');

        bussinesName.textContent = member.name;
        tagLine.innerHTML = `<i>${member.tagline}</i><hr>`

        image.setAttribute("src",member.image);
        image.setAttribute("alt",`image of  ${member.name}`);
        image.setAttribute("loading","lazy");
        image.setAttribute("width","137");
        image.setAttribute("height","90");

        details.setAttribute('class', "details");
        contact.setAttribute("class","contact");

        addresss.innerHTML = `<b>Address:</b> ${member.address}`;
        phone.innerHTML = `<b>Phone:</b> ${member.phone}`;
        url.innerHTML = `<b>Website:</b> <a href="${member.website}">Visit ${member.name}<a/>`;
        
        card.appendChild(bussinesName);
        card.appendChild(tagLine);
        

        details.appendChild(image);
        contact.appendChild(addresss);
        contact.appendChild(phone);
        contact.appendChild(url);


        details.appendChild(contact)
        card.appendChild(details);

        memberCards.appendChild(card);
    });
}
getMembersData();