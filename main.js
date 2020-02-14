// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCrLXaZP3dd5e5O8JoM871YvLIRWjdMNHg",
    authDomain: "keenan-project.firebaseapp.com",
    databaseURL: "https://keenan-project.firebaseio.com",
    projectId: "keenan-project",
    storageBucket: "keenan-project.appspot.com",
    messagingSenderId: "108366655525",
    appId: "1:108366655525:web:7dbd063e4fb13eabcdcfcc",
    measurementId: "G-FT6GE0DG9Y"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }