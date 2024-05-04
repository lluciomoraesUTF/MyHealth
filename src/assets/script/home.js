import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
//import { getCollection } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("sair").addEventListener("click", loggout);
document.getElementById("myVac").addEventListener("click", window.location.href="../screens/home.html");
document.getElementById("cadVac").addEventListener("click", window.location.href="../screens/novaVacina.html");
function loggout(){
    const auth = getAuth(app);
    signOut(auth).then(() => {
      window.location.href = "../screens/index.html";
    }).catch((error) => {
      console.log(error);
    });
  }

  document.getElementById("cadVac").addEventListener("click", function navVac() {
        window.location.href="../screens/novaVacina.html"});


document.getElementById("myVac").addEventListener("click", function navHome() {
     window.location.href="../screens/Home.html"});