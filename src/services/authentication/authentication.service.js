import { auth } from "../../../App";
import { signInWithEmailAndPassword }  from 'firebase/auth'

export const LoginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}