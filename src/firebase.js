// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Initialize Firebase
export const app = initializeApp({
  apiKey: 'AIzaSyCZuakmKaK9O2ZicuoB5Ai-xt8yBWKEiQg',
  authDomain: 'docs-eeab4.firebaseapp.com',
  projectId: 'docs-eeab4',
  storageBucket: 'docs-eeab4.appspot.com',
  messagingSenderId: '916031451363',
  appId: '1:916031451363:web:e9e9a9a28ead8e95cc15d6',
  measurementId: 'G-7XD9J9N18Z',
});
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
