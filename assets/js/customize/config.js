const firebaseConfig = {
    apiKey: "AIzaSyC3B2kUnCX8CabsV9TX-xBBoFqjATKfO90",
    authDomain: "just-the-docs.firebaseapp.com",
    databaseURL: "https://just-the-docs.firebaseio.com",
    projectId: "just-the-docs",
    storageBucket: "just-the-docs.appspot.com",
    messagingSenderId: "180041580893",
    appId: "1:180041580893:web:bdfe6fbaca4fd8b1f0a8b4",
    measurementId: "G-67HRF3KLVL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const ref = firebase.database().ref('docs-count-visited');

ref.once('value', function(snapshot) {
    let total = parseInt((snapshot.val() ? snapshot.val().total : 0)) + 1;

    ref.set({
        total
    });
});