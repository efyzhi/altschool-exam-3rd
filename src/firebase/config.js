import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsS6qGjwnJZraqR9G_OBnzM1PTtDBlCic",
    authDomain: "altschoolexam3rd.firebaseapp.com",
    projectId: "altschoolexam3rd",
    storageBucket: "altschoolexam3rd.appspot.com",
    messagingSenderId: "385328520712",
    appId: "1:385328520712:web:1f6f36addb37020c953bbd",
    measurementId: "G-6PSE3B1SXE"
  };


  initializeApp(firebaseConfig)

  const auth = getAuth()

  export { auth }