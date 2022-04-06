import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // apiKey: "AIzaSyC3G-LmDl9R5Mw0Bls3wFWButlLsX9Lydk",
  // authDomain: "quiz-58e15.firebaseapp.com",
  // projectId: "quiz-58e15",
  // storageBucket: "quiz-58e15.appspot.com",
  // messagingSenderId: "959709404239",
  // appId: "1:959709404239:web:7d41e428666a3e5ff99e3a",
  // measurementId: "G-R2HYQ7P4KW",
  // databaseURL: "https://quiz-58e15-default-rtdb.europe-west1.firebasedatabase.app"
  apiKey: "AIzaSyBNDMgwVZMTvhQvZpdJeg8yOrUy4Hb_f0k",
  authDomain: "quiz-e4a2a.firebaseapp.com",
  projectId: "quiz-e4a2a",
  storageBucket: "quiz-e4a2a.appspot.com",
  messagingSenderId: "235086417136",
  appId: "1:235086417136:web:ab307911aff1d44edf4635",
  measurementId: "G-MQBSRPB1EZ",
  databaseURL: " https://quiz-e4a2a-default-rtdb.europe-west1.firebasedatabase.app",
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
  app,
  auth,
  db,
  // signInWithGoogle,
  signInWithEmailAndPassword,
  // registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};