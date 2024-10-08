// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:  process.env.FIREBASE_AUTH_DOMAIN,
    projectId:  process.env.FIREBASE_PROJECT_ID,
    storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId:  process.env.FIREBASE_APP_ID,
    measurementId:  process.env.FIREBASE_MEASUREMENT_ID,
  };

// Initialize Firebase (

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const authentication = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
export {firebase, authentication};
