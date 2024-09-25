import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHbgmT_1O7evEISwk1ydCSNIEV9xW-cCg",
  authDomain: "react-crud-a7ee6.firebaseapp.com",
  projectId: "react-crud-a7ee6",
  storageBucket: "react-crud-a7ee6.appspot.com",
  messagingSenderId: "1073262237313",
  appId: "1:1073262237313:web:1b870c84fdaebe80dddf80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const fireDb = getDatabase(app);

export default fireDb;
