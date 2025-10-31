import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Nne-umw2kOJha6N5Abk0QQmYTMvyiLk",
  authDomain: "airbnb-clone-84c43.firebaseapp.com",
  projectId: "airbnb-clone-84c43",
  storageBucket: "airbnb-clone-84c43.firebasestorage.app",
  messagingSenderId: "169805538674",
  appId: "1:169805538674:web:4088adc89c03fcbba6e9eb",
  measurementId: "G-Z80Q49N2ED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
