console.log(process.env);
const firebaseConfig = {
    // apiKey: "AIzaSyDNBfvli62rbOmK_KRiz0B8FBRY-EuR34M",
    // authDomain: "apartment-c3fc1.firebaseapp.com",
    // projectId: "apartment-c3fc1",
    // storageBucket: "apartment-c3fc1.appspot.com",
    // messagingSenderId: "223634394127",
    // appId: "1:223634394127:web:1f4b68748de80bcae8677a"
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };

  export default firebaseConfig;