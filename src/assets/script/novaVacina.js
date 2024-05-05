import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getStorage} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestorage.js";
const firebaseConfig = {
    apiKey: "AIzaSyDGob2QeOZqQNkGvE4EUauCZ0Da4HERK9Q",
    authDomain: "myhealth-luciomoraes.firebaseapp.com",
    projectId: "myhealth-luciomoraes",
    storageBucket: "myhealth-luciomoraes.appspot.com",
    messagingSenderId: "487149132923",
    appId: "1:487149132923:web:3d23cf99329538bd25d6de"
  };
    document.getElementById("selectImage").addEventListener('change', event=>{
        const readerVac = new FileReader();
        if (document.getElementById("compVac")){
            document.getElementById("compVac").remove();
        }
        readerVac.onload = function(event) {
            const previewVac = document.createElement("img"); 
            previewVac.width = 300;
            previewVac.height = 100;
            previewVac.id = 'compVac';
            previewVac.src = event.target.result;
            document.getElementById("label_selectImage").insertAdjacentElement("afterend", previewVac); document
        }
        readerVac.readAsDataURL(event.target.files[0]);    
    })

