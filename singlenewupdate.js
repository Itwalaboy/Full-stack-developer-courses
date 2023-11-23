
        // Function to add a new user to localStorage
        function addUser() {
            // Get user input
            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;

            // Get existing users from localStorage or initialize an empty array
            var users = JSON.parse(localStorage.getItem('users')) || [];

            // Add the new user to the array
            users.push({ username: username, email: email });

            // Save the updated user list back to localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Display the updated user list
            displayUsers();
        }

        // Function to display the list of users
        function displayUsers() {
            var userListElement = document.getElementById('userList');
            userListElement.innerHTML = '';

            // Get the list of users from localStorage
            var users = JSON.parse(localStorage.getItem('users')) || [];

            // Loop through the users and display them
            users.forEach(function (user) {
                var listItem = document.createElement('li');
                listItem.textContent = 'Username: ' + user.username + ', Email: ' + user.email;
                userListElement.appendChild(listItem);
            });
        }

        // Display existing users on page load
        displayUsers();