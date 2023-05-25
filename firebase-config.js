import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDPp6Ujsjc0JI1RenFYv4CqCq6lXK1nwbQ",
  authDomain: "samaritan-auto.firebaseapp.com",
  projectId: "samaritan-auto",
  storageBucket: "samaritan-auto.appspot.com",
  messagingSenderId: "118277400417",
  appId: "1:118277400417:web:d7e535f216778a51c30720",
  measurementId: "G-H4DNCHLH6H"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence : getReactNativePersistence(AsyncStorage)
}) 
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
