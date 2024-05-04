import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDGob2QeOZqQNkGvE4EUauCZ0Da4HERK9Q",
    authDomain: "myhealth-luciomoraes.firebaseapp.com",
    projectId: "myhealth-luciomoraes",
    storageBucket: "myhealth-luciomoraes.appspot.com",
    messagingSenderId: "487149132923",
    appId: "1:487149132923:web:3d23cf99329538bd25d6de"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  document.getElementById("entrar").addEventListener("click", login);

  function login() {
    addEventListener 
    const email = document.getElementById('emailEntrar').value;
    const senha = document.getElementById('senhaEntrar').value;
    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
        window.location.href = "../screens/home.html";
    })
    .catch((error) => {
        document.getElementById("erroLogin").style.display ="block";
        setTimeout(() => {
        document.getElementById("erroLogin").style.display = 'none';
      }, 20000)
    });
  }  
