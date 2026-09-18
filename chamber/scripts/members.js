const url = "data/members.json";
const memberCards = document.querySelector(".members");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();

    return data.members;
}

function displayMembers(members){
    members.forEach(member => {
        const card = document.createElement('section');
        card.setAttribute("class","card")
        const bussinesName = document.createElement('h2');
        const tagLine = document.createElement('p');
        const image = document.createElement('img');
        const phone = document.createElement('p');
        const url = document.createElement('p');
        const addresss = document.createElement('p');
        const contact = document.createElement('span');

        bussinesName.textContent = member.name;
        tagLine.innerHTML = `<i>${member.tagline}</i><hr>`

        image.setAttribute("src",member.image);
        image.setAttribute("alt",`image of  ${member.name}`);
        image.setAttribute("loading","lazy");
        image.setAttribute("width","397");
        image.setAttribute("height","220");

        contact.setAttribute("class","contact");


        tagLine.setAttribute('class',"tagline");
        addresss.innerHTML = `<b>Address:</b> ${member.address}`;
        phone.innerHTML = `<b>Phone:</b> ${member.phone}`;
        url.innerHTML = `<b>Website:</b> <a href="${member.website}">Visit ${member.name}</a>`;
        
        card.appendChild(image);

        card.appendChild(bussinesName);
        card.appendChild(tagLine);
        

        contact.appendChild(addresss);
        contact.appendChild(phone);
        contact.appendChild(url);

        card.appendChild(contact);

        memberCards.appendChild(card);
    });
};

export async function allMembers(){
    const allMembers =  await getMembersData();
    displayMembers(allMembers);
};

export async function topMembers() {
    const allMembers =  await getMembersData();
    const topMembers = allMembers.filter(member=>{
        const level = member.membership.toLowerCase();
        return level === "silver" || level === "gold";
    });
    displayMembers(topMembers);
};