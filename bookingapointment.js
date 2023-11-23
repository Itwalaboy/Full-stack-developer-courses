/*
// Arrays
const number = new Array(1,2,3,4,5);
number[3]='3'
number.unshift('0');
number.pop();
console.log(Array.isArray('Hello'));

// Person value
const person ={
    firstName : 'john',lastName :'Doe',
    age:30,
    address:{
        street:'50 main st'
        city :  'Boston',
        state :'MA'
    }
}
const todos =[
    {
        id : 1,
        text : 'Take out trash',
        isCompleted : true
    },
    {
        id :3,
        test : Dentistappt,
        isCompleted :false

    }
]

// for loop

for(let i =0; i<todos.length; i++){
    console.log(todos[i].text);
    while(i<10){
        console.log('while Loop Number: ${i}');
        i++;

    }
}       */

function saveUserDetails() {
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    // Create user object
    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    // Convert user object to JSON string
    var userJSON = JSON.stringify(user);

    // Store user details in local storage
    localStorage.setItem('userDetails', userJSON);

    // Optionally, you can provide feedback to the user
    alert('User details saved successfully!');
}

