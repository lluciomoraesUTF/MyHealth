import { getCollection } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
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

