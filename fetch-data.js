// Define async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch user data from API
        const response = await fetch(apiUrl);

        // Convert response to JSON
        const users = await response.json();

        // Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Create a <ul> to hold the user list
        const userList = document.createElement('ul');

        // Loop through users and add each name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors (network issues, etc.)
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
