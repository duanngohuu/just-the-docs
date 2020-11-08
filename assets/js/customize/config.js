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

async function getDevice() {
    try {
        const response = await fetch('http://ipinfo.io', {
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });

        const body = await response.json();

        return body;
    } catch (error) {
        console.error(error);
    }

    return '127.0.0.1';
}

ref.once('value', async function(snapshot) {
    const device = await getDevice();
    const ls = snapshot.val() ? snapshot.val().domain : [];

    ls.push({...device, time: JSON.stringify(new Date()) });

    // ref.set({ domain: ls });
});