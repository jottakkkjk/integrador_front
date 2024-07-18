const form = document.querySelector(".form3");
const myModal = document.getElementById("myModal");


  document.getElementById("xizinho").addEventListener("click", (e) =>{
    modal.style.display = "none";
  })


function redirectToLogin (){
    window.location.href = 'login.html';
  }
function redirectToRegister (){
    window.location.href = 'registro.html';
  }
function redirectToAnimal (){
    window.location.href = 'c_animal.html';
  }


function openModal(nome, idade, sexo) {
  var modal = document.getElementById("myModal");
  var modalContent = modal.querySelector(".modal-content");

  // Atualiza o conteúdo do modal com os detalhes do animal clicado
  modalContent.innerHTML = `
      <span class="close">&times;</span>
      <h2>${nome}</h2>
      <p>Idade: ${idade}</p>
      <p>Sexo: ${sexo}</p>
      <button onclick="redirectToRegister()">Registrar-se</button>
      <button onclick="redirectToAnimal()">Registrar animal</button>
  `;

  modal.style.display = "block";
}




// Seleciona o modal
var modal = document.getElementById("myModal");

// Seleciona o elemento que fecha o modal
var span = modal.querySelector(".close");

// Fecha o modal quando o usuário clica no elemento de fechar (x)


// Fecha o modal quando o usuário clica fora da área do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Função para abrir o modal
function openModal() {
    modal.style.display = "block";
} 


let burger = document.getElementById("IconBurg");


let menuzinho = document.getElementById("navBar");

burger.addEventListener('click', () =>{
    if(menuzinho.style.display === 'block'){
        menuzinho.style.display = 'none'
    }
    else{
        menuzinho.style.display = 'block'
    }
})




