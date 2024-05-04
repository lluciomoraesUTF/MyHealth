import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("redefinir").addEventListener("click", esqueciSenha);
function esqueciSenha(){
    const auth = getAuth(app);
    const email = document.getElementById('emailEntrar').value;
    sendPasswordResetEmail(auth, email).then(() =>{
      alert("Email enviado com sucesso");
      window.location.href = "entrar.html";
    }).catch ((error) => {
      alert("Email não cadastrado");
    })
  }