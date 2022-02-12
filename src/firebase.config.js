// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCHCeHjeRqdOyw-XiAn3UgyibsurK98zww",
	authDomain: "house-marketplace-app-c39e0.firebaseapp.com",
	projectId: "house-marketplace-app-c39e0",
	storageBucket: "house-marketplace-app-c39e0.appspot.com",
	messagingSenderId: "347670750640",
	appId: "1:347670750640:web:08056a570f2f39f8d8a275"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
