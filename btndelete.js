 // Function to delete a contact by ID
 function deleteContact(contactId) {
    // Remove from local storage (assuming you store contacts in local storage)
    removeFromLocalStorage(contactId);

    // Remove from the UI
    var contactElement = document.getElementById(contactId);
    if (contactElement) {
      contactElement.remove();
    }
  }

  // Function to remove a contact from local storage
  function removeFromLocalStorage(contactId) {
    // Retrieve contacts from local storage
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    // Filter out the contact to be deleted
    contacts = contacts.filter(function(contact) {
      return contact.id !== contactId;
    });

    // Save the updated contacts back to local storage
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }