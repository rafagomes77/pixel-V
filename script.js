// busca um elemento no html e salva em uma variavel
let menu = document.getElementById ("menu")
let iconebarras = document.getElementById ("icone-barras")
let iconeX = document.getElementById("icone-X")

// funcao que vai abrir e fechar o menu
function abrefecharmenu(){

    // se o menu esta fechado
    if(menu.classList.contains("menu-fechado")){
        // abrir o menu
        menu.classList.remove("menu-fechado")

        // mostra icone X
       iconeX.style.display = "inline"

        // esconder o icone barras
        iconebarras.style.display = "none"

    }
    // senao
    else{
    //   fechar o menu
    menu.classList.add("menu-fechado")

     // esconder icone X
     iconeX.style.display  = "none"

    //  mostrar o icone barras
    iconebarras.style.display = "inline"
    }

}

onresize = () => {
    menu.classList.remove("menu-fechado")

    // mostrar icone 
    iconeX.style.display = "inline"

    // esconder icone barras
    iconebarras.style.display = "none"
}