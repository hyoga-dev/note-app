
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import firebaseConfig from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function logOut() {
  signOut(auth).then(() => {
    
    localStorage.removeItem("username")
    localStorage.removeItem("uid")
    localStorage.removeItem("photo-url")

    pName.innerHTML = "Sign In"
    pName.style.cursor = "pointer"

    if (localStorage.getItem("clicked") == "false") {
      pPicture.setAttribute("src", "/src/asset/profile-dark.svg")
    } else if (localStorage.getItem("clicked") == "true"){
      pPicture.setAttribute("src", "/src/asset/profile-pic.svg")
    } 



  })
}