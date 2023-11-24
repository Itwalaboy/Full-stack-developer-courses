
        // Sample data (replace this with your actual data)
        const contacts = [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
            // Add more contacts as needed
        ];

        // Function to render the contact list
        function renderContactList() {
            const contactListElement = document.getElementById('contactList');
            contactListElement.innerHTML = '';

            contacts.forEach(contact => {
                const listItem = document.createElement('li');
                listItem.className = 'contactItem';
                listItem.innerHTML = `
                    <span>${contact.name} - ${contact.email}</span>
                    <span class="deleteButton" onclick="deleteContact(${contact.id})">Delete</span>
                `;
                contactListElement.appendChild(listItem);
            });
        }

        // Function to delete a contact
        function deleteContact(contactId) {
            // Find the index of the contact with the given id
            const contactIndex = contacts.findIndex(contact => contact.id === contactId);

            // Remove the contact from the array
            if (contactIndex !== -1) {
                contacts.splice(contactIndex, 1);

                // Update the UI
                renderContactList();

                // Update local storage
                localStorage.setItem('contacts', JSON.stringify(contacts));
            }
        }

        // Initialize the contact list
        renderContactList();