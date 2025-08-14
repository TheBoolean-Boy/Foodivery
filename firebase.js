
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, waitForPendingWrites } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBPHAZjfikQmW4_UzfQYq3oFSvjzjoD-FE",
  authDomain: "foodivery-6bcb1.firebaseapp.com",
  projectId: "foodivery-6bcb1",
  storageBucket: "foodivery-6bcb1.firebasestorage.app",
  messagingSenderId: "971362250339",
  appId: "1:971362250339:web:fdc5ee396e726b276d5256"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async(name, email, password) =>{
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, 'user'), {
      uid: user.id,
      name,
      authProvider: "local",
      email
    })   
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "))
  }
}

const login = async(email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "))
  }
}

const logout = () =>{
  signOut(auth);
}

export {auth, db, login, signup, logout}