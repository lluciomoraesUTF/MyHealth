import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
//import { getCollection } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 
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
document.getElementById("sair").addEventListener("click", loggout);

function loggout(){
    signOut(auth).then(() => {
      window.location.href = "../screens/index.html";
    }).catch((error) => {
      console.log(error);
    });
  }

  document.getElementById("cadVac").addEventListener("click", function navVac() {
        window.location.href="../screens/novaVacina.html"});


document.getElementById("myVac").addEventListener("click", function navHome() {
     window.location.href="../screens/home.html"});
     