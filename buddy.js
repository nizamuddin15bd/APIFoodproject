const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    // console.log(buddies);
    for (const buddy of buddies) {
        console.log(buddy)
        const p = document.createElement('p');
        p.innerText = `
        first Name: ${buddy.name.last}.last Name ${buddy.name.last}. phone Number: ${buddy.phone}. Email: ${buddy.email}
        `;
        buddiesDiv.appendChild(p);
    }
}
