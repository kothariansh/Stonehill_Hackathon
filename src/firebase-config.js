import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
	apiKey: "AIzaSyCqlQnWI4qobT7FyX1xitR-msHKtZYVnys",
	authDomain: "stonehill-hackathon-c957d.firebaseapp.com",
	projectId: "stonehill-hackathon-c957d",
	storageBucket: "stonehill-hackathon-c957d.appspot.com",
	messagingSenderId: "52868776028",
	appId: "1:52868776028:web:84912b4054f271b97fe699",
	measurementId: "G-1QQTN538CJ"
  };
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);