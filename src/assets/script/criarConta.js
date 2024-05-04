import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("cadastro").addEventListener("click", cadastrar);
function verifSenhaIgual(){
  const senhaCad = document.getElementById("senhaCad").value;
  const senhaConfirmada = document.getElementById("senhaConfirm").value;
   if (senhaCad == senhaConfirmada){
    document.getElementById("erroSenha").style.display ="none"; 
    navLogin();
   }else {
     setTimeout(() => {
       document.getElementById("erroSenha").style.display = 'block';
     }, 20000)
   }
 }
function cadastrar(){
  const nome = document.getElementById('nomeCad').value;
  const genero = document.querySelector('input[name="sexo"]:checked');
  const dataNascimento = document.getElementById('dataNasCad').value;
  const email = document.getElementById('emailCad').value;
  const password = document.getElementById('senhaCad').value;
  const redefinirSenha = document.getElementById('senhaConfirm').value;
  verifSenhaIgual();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Usuário cadastrado com sucesso");
      window.location.href = "../screens/entrar.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Erro ao cadastrar usuário:", errorMessage);
    });
}
