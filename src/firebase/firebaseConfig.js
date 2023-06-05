import { initializeApp } from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBfjQk6nncEahB0WGAdLn6R1VfkdjUwyBE",
    authDomain: "generate-teams-137bd.firebaseapp.com",
    projectId: "generate-teams-137bd",
    storageBucket: "generate-teams-137bd.appspot.com",
    messagingSenderId: "227347828781",
    appId: "1:227347828781:web:89ad4273b30693ccffe8a4"
};

// Initialize Firebase
const firebaseConfigApp = initializeApp(firebaseConfig);

export default firebaseConfigApp