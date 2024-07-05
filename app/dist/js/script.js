const menu = document.querySelector('#toggle-btn');
const main = document.getElementById('principal');
const dropdown = document.getElementById('menu-dropdown');
const janela = window.innerWidth;

if(sessionStorage.getItem('menuOpen') == 'true'){
    document.querySelector("#sidebar").classList.add("expand");
    document.querySelector('#principal').classList.toggle("expand");
    document.querySelector('#map_6146f48e63c26298b0cdfeb6cf7cb288').classList.toggle("expand");
}

if(sessionStorage.getItem('menu_dropdown') == 'true'){
    dropdown.classList.remove('collapsed');
    dropdown.setAttribute('aria-expanded', 'true');
    document.querySelector('#auth').classList.add('show');
}

dropdown.addEventListener('click', function(){
    sessionStorage.setItem('menu_dropdown', dropdown.getAttribute('aria-expanded'));
});

menu.addEventListener("click", function(event){

    document.querySelector("#sidebar").classList.toggle("expand");
    document.querySelector('#principal').classList.toggle("expand");
    document.querySelector('#map_6146f48e63c26298b0cdfeb6cf7cb288').classList.toggle("expand");

});

function ativaItem(element){    
    element.classList.add('active');
}

function sairSistema(){
    window.location.href = "index.html";
    sessionStorage.setItem('logout', true);
}

function acessoIndevido(){
    var logado = sessionStorage.getItem('logado');  

    if(logado != 'true'){
        window.location.href = "index.html";
        sessionStorage.setItem('acesso_indevido',true);
    }
}