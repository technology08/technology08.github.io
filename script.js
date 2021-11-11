window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-QENP1MN7NY');

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

// Analytics -- nothing here?

// Connect Database
let database = firebase.database().ref('connect-form-infos');

// Listen for form results
var form = document.querySelector("#connect-form")
form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Form values
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    console.log(fname, lname, email, message);

    updateConnectDatabase(fname, lname, email, message);
}

// Submit form to Firebase database
function updateConnectDatabase(fname, lname, email, message) {
    let newConnectSubmission = database.push();

    newConnectSubmission.set({
        fname: fname,
        lname: lname,
        email: email,
        message: message,
    })

    form.reset();
}

// Mobile Menu Bar
function openNav() {
    document.getElementById('nav-overlay').style.display = 'flex';
    document.getElementById('nav-overlay').style.opacity = '100%';
}

function closeNav() {
    document.getElementById('nav-overlay').style.opacity = '0%';
    document.getElementById('nav-overlay').style.display = 'none';
}