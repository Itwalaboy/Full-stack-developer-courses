// Function to add a new user
function addUser() {
    // Get user input
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    // Get existing users from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the array
    users.push({ username: username, email: email });

    // Store the updated array in local storage
    localStorage.setItem("users", JSON.stringify(users));

    // Update the user list on the page
    updateUsersList();

    // Clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
  }

  // Function to update the user list on the page
  function updateUsersList() {
    var userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear the existing list

    // Get users from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Display each user in the list
    users.forEach(function (user) {
      var listItem = document.createElement("li");
      listItem.textContent = "Username: " + user.username + ", Email: " + user.email;
      userList.appendChild(listItem);
    });
  }

  // Initial update when the page loads
  updateUsersList();