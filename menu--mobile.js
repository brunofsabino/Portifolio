
const header2 = document.querySelector('header')




const banner2 = document.querySelector('.banner')
const contatoForm2 = document.querySelector('.contato-form')
const portfolioContent2 = document.querySelector('.portfolio--content')

const contatoFormForm = document.querySelector('.contato-form form')
const formFieldset = document.querySelector('.contato-form form fieldset')

// const tamanhoTela = document.querySelector('aside').clientWidth

// const linguagensConteudo3 = document.querySelector('.linguagensConteudo2')


function responsivo2() {
   
    window.scroll(0, 121)
    fecharMenuMobile()
}


function contato2() {
    
    window.scroll(0, 1498)
    
  
    fecharMenuMobile()
}

function portfolio2() {
    

    window.scroll(0, 726)
    fecharMenuMobile()
}

function fecharMenuMobile() {
    
    // menuLateral.style.transition = '.5s linear'
    menuLateral.style.right = '-290px' 
    setTimeout(() => {
        
        
        menuLateral.style.display = 'none'  
    }, 350);
}
