import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getCollection } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 
const firebaseConfig = {
  apiKey: "AIzaSyDGob2QeOZqQNkGvE4EUauCZ0Da4HERK9Q",
  authDomain: "myhealth-luciomoraes.firebaseapp.com",
  projectId: "myhealth-luciomoraes",
  storageBucket: "myhealth-luciomoraes.appspot.com",
  messagingSenderId: "487149132923",
  appId: "1:487149132923:web:3d23cf99329538bd25d6de"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
function navCriarconta(){
  window.location.href = "../screens/criarConta.html";
}
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
 function exibirImage(){
  document.getElementById("selectImage").addEventListener('change', function() {
  const fileInput = this.files[0];
  const preview = document.getElementById("selecionarImag");
    if (fileInput) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const image = new Image();
        image.src = e.target.result;
        preview.innerHTML = '';
        
        preview.appendChild(image);
      }
      reader.readAsDataURL(fileInput);
      }
    });
 }


function cadastrar(){
  const nome = document.getElementById('nomeCad').value;
  const genero = document.querySelector('input[name="sexo"]:checked');
  const dataNascimento = document.getElementById('dataNasCad').value;
  const email = document.getElementById('emailCad').value;
  const password = document.getElementById('senhaCad').value;
  const redefinirSenha = document.getElementById('senhaConfirm').value;
  const auth = getAuth(app);
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
  function login() {
    const email = document.getElementById('emailEntrar').value;
    const senha = document.getElementById('senhaEntrar').value;
    auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      navHome();
    })
    .catch((error) => {
        document.getElementById("erroLogin").style.display ="block";
        setTimeout(() => {
        document.getElementById("erroLogin").style.display = 'none';
      }, 20000)
    });
  }  
function esqueciSenha(){
  const auth = getAuth(app);
  const email = document.getElementById('emailEntrar').value;
  sendPasswordResetEmail(auth, email).then(() =>{
    alert("Email enviado com sucesso");
    navLogin();
  }).catch ((error) => {
    alert("Email não cadastrado");
  })
}
function loggout(){
  const auth = getAuth(app);
  signOut(auth).then(() => {
    window.location.href = "../screens/entrar.html";
  }).catch((error) => {
    console.log(error);
  });
}
onAuthStateChange(user => {
  if (user) {
    procurarVacinas(user);
  } else {
    window.location.href = "../screens/entrar.html";
  }
})
function procurarVacinas(user) {
  const collection = getCollection(app);
  collection('vacinas')
  .get()
  .where ('user_uid', user.uid)
  .orderBy('date', 'desc')
  .then(dados => {
    const vacinas = dados.docs.map(doc => doc.data());
    console.log(vacinas);
    addVacinas(vacinas);
    
  })

}


