// Initialize Firebase(2)
var config = {
        apiKey: "AIzaSyBwapXkF7CDpuqZMKM5XtHuFZwhdAaYpMU",
        authDomain: "espenshade-personal-website.firebaseapp.com",
        projectId: "espenshade-personal-website",
        storageBucket: "espenshade-personal-website.appspot.com",
        messagingSenderId: "408422999835",
        appId: "1:408422999835:web:ea409318b848c4ec9cd5be",
        measurementId: "G-QENP1MN7NY"
};
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
.getElementById('registrationform')
.addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
e.preventDefault();
// Get Values from the DOM
let fname = document.querySelector('#fname').value;
let lname = document.querySelector('#lname').value;
let email = document.querySelector('#email').value;
let message = document.querySelector('#message').value;

//send message values
sendMessage(fname, lname, email, message);

//Show Alert Message(5)
document.querySelector('.alert').style.display = 'block';

//Hide Alert Message After Seven Seconds(6)
setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
}, 7000);

//Form Reset After Submission(7)
document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, password, bio, job, interest) {
let newFormMessage = formMessage.push();
newFormMessage.set({
    name: name,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest
});
}