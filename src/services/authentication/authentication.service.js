import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAYPkx_zOZmfNvQloA9ZkjZh80xtI56_Ns",
  authDomain: "mealstogo-7bc9a.firebaseapp.com",
  projectId: "mealstogo-7bc9a",
  storageBucket: "mealstogo-7bc9a.appspot.com",
  messagingSenderId: "1007401999647",
  appId: "1:1007401999647:web:3a45fe5a0f58724969242a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const LoginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}