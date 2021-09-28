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

const analytics = firebase.analytics();

// Log events with firebase.analytics().logEvent('notification_received');

// Publication Trackers
document.querySelector('.pubdoibtn').addEventListener('click', logPublication(e));

function logPublication(e) {
    // TEST THIS DOES THIS EVEN WORK? CHECK https://stackoverflow.com/questions/56921895/how-to-get-id-of-element-on-the-click-js 
    let id = e.target.getAttribute('id');

    analytics.logEvent('publication_viewed', {
        publicationId: id,
    })
}