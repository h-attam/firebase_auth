import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from "react-hot-toast";

// Firebase konfigürasyonu
const firebaseConfig = {
  apiKey: "AIzaSyCNtxbuyUzo82OD0S5YjtLF1A7rXX2g0eM",
  authDomain: "authentication-52bfd.firebaseapp.com",
  projectId: "authentication-52bfd",
  storageBucket: "authentication-52bfd.appspot.com",
  messagingSenderId: "958621829331",
  appId: "1:958621829331:web:270f5bd25bd6257370ac26",
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // `app` parametresini geçin

// Kullanıcı kaydı fonksiyonu
export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

// Kullanıcı girişi fonksiyonu
export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

// Kullanıcı çıkışı fonksiyonu
export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export default app;
