const userProfiles = document.getElementById('user-profiles');
const statusDiv = document.getElementById('status');
const refreshBtn = document.getElementById('refresh-btn');

function displayUserProfiles(users) {
    userProfiles.innerHTML = '';

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        const userImage = document.createElement('img');
        userImage.src = user.picture.medium;
        userImage.alt = `${user.name.first} ${user.name.last}`;

        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');

        const userName = document.createElement('h2');
        userName.textContent = `${user.name.first} ${user.name.last}`;

        const userDetails = document.createElement('p');
        userDetails.innerHTML = `
            Name: ${user.name.first} ${user.name.last}<br>
            Country: ${user.location.country}<br>
            Postcode: ${user.location.postcode}<br>
            Phone: ${user.phone}<br>
            Cell: ${user.cell}
        `;

        userInfo.appendChild(userName);
        userInfo.appendChild(userDetails);

        userCard.appendChild(userImage);
        userCard.appendChild(userInfo);

        userProfiles.appendChild(userCard);
    });
}

function fetchUserData() {
    fetch('https://randomuser.me/api?results=5')
        .then(response => response.json())
        .then(data => {
            statusDiv.textContent = 'Success!';
            displayUserProfiles(data.results);
        })
        .catch(error => {
            statusDiv.textContent = 'Error fetching user data.';
            console.error('Error fetching user data:', error);
        });
}

refreshBtn.addEventListener('click', fetchUserData);

fetchUserData();
