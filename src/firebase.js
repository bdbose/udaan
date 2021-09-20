import { initializeApp } from 'firebase/app';

import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
export const app = initializeApp({
  apiKey: 'AIzaSyBeGrF1XrmI9KYAFuaVxv4ikK126Eh5Rk8',
  authDomain: 'udaan-8e8c2.firebaseapp.com',
  projectId: 'udaan-8e8c2',
  storageBucket: 'udaan-8e8c2.appspot.com',
  messagingSenderId: '608569053008',
  appId: '1:608569053008:web:8af917bf270ce1c8c46655',
  measurementId: 'G-9DG5EKPBGR',
});
export const db = getFirestore(app);
