import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
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
document.getElementById("redefinir").addEventListener("click", esqueciSenha);
function esqueciSenha(){
    const email = document.getElementById('emailRecuperar').value;
    sendPasswordResetEmail(auth, email).then(() =>{
      alert("Email enviado com sucesso");
      window.location.href = "entrar.html";
    }).catch ((error) => {
      alert("Email não cadastrado");
    })
  }
  

  