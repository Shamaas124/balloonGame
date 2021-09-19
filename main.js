const firebaseConfig = {
    apiKey: "AIzaSyBMaf5LfIJkcLSj2GjtGoGKG8ElSTPZht0",
    authDomain: "pop-a-loon.firebaseapp.com",
    projectId: "pop-a-loon",
    storageBucket: "pop-a-loon.appspot.com",
    messagingSenderId: "160171677309",
    appId: "1:160171677309:web:ac3d1e73c46d2d67548314",
    measurementId: "G-KFSC9ZN3GX"
  };



  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  firebase.initializeApp(firebaseConfig);
let userLife = 3;
let points = 0;

const color = ['Red', 'Green', 'Blue', 'Yellow']
const random = Math.floor(Math.random() * color.length);
var abc = color[random]
document.write("CLICK THE COLOR: "+color[random])

function checkWins(id){
    if(abc === id){
        points += 10
        alert(points)
    }
    else if(abc === id){
        points += 10
        alert(points)
    }
    else if(abc === id){
        points += 10
        alert(points)
    }
    else if(abc === id){
        points += 10
        alert(points)
    }
    else {
        alert("Wrong")
        userLife--
        if(userLife == 0){
            alert("SORRY YOU ARE DEAD")
            location.reload("last.html")
        }
    }
}
function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value

  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Incorrect Email or Password')
      return
      // Don't continue running the code
    }
    if (validate_field(full_name) == false) {
      alert('Invalid Length')
      return
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        full_name : full_name,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Incorrect Email or Password')
      return
      // Don't continue running the code
    }
    else{window.location.replace = 'index.html'}
        
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
    
      // Done
      alert('User Logged In!!')
      window.location.replace = ('./index.html')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
    
  }
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }