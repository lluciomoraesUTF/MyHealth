const modal = document.getElementById("modal")
document.getElementById("excluir").addEventListener("click", function(){
    modal.showModal();
});
document.getElementById("sim").addEventListener("click", function(){
    window.location.href = "../screens/home.html";
});
document.getElementById("nao").addEventListener("click", function(){
    modal.close();
});