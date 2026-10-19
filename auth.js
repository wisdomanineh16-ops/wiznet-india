import { auth, provider } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

const signupBtn = document.getElementById("signupBtn");
const googleBtn = document.getElementById("googleBtn");

signupBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created successfully!");
    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
});

googleBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    alert("Google Sign-In successful!");
    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
});
