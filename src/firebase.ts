// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = {
  apiKey: 'AIzaSyCW5P9aGBMm4ll_arUpMg_QUTc6RaowYCU',
  authDomain: 'grubluv-52d8d.firebaseapp.com',
  projectId: 'grubluv-52d8d',
  storageBucket: 'grubluv-52d8d.appspot.com',
  messagingSenderId: '214083123302',
  appId: '1:214083123302:web:4934c4e208ca11a57ed5a7',
  measurementId: 'G-51560WT44C',
};

// Initialize Firebase
const app = initializeApp(firebaseApp);
const analytics = getAnalytics(app);

export default app;
