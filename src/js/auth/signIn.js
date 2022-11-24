

import {  signInWithPopup, GoogleAuthProvider, getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import firebaseConfig from "./firebaseConfig.js";
import { getId, qs } from "../utility.js";


const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const pName = getId("profile-name")
const pPicture = qs(".profile-picture img")

const auth = getAuth(app);

export default function signIn() {
  if (localStorage.getItem("username") != null) return
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;

    localStorage.setItem("uid", user.uid)
    localStorage.setItem("username", user.displayName)
    localStorage.setItem("photo-url", user.photoURL)

    pName.innerHTML = user.displayName
    pName.style.cursor = "default"
    pPicture.setAttribute("src", user.photoURL)
  })
}