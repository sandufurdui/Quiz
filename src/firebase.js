import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3G-LmDl9R5Mw0Bls3wFWButlLsX9Lydk",
  authDomain: "quiz-58e15.firebaseapp.com",
  projectId: "quiz-58e15",
  storageBucket: "quiz-58e15.appspot.com",
  messagingSenderId: "959709404239",
  appId: "1:959709404239:web:7d41e428666a3e5ff99e3a",
  measurementId: "G-R2HYQ7P4KW"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
    if (!err){
      
    }
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
export {
  auth,
  db,
  // signInWithGoogle,
  signInWithEmailAndPassword,
  // registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};