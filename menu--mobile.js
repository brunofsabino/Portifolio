
const header2 = document.querySelector('header')




const banner2 = document.querySelector('.banner')
const contatoForm2 = document.querySelector('.contato-form')
const portfolioContent2 = document.querySelector('.portfolio--content')

const contatoFormForm = document.querySelector('.contato-form form')
const formFieldset = document.querySelector('.contato-form form fieldset')

const tamanhoTela = document.querySelector('aside').clientWidth

// const linguagensConteudo3 = document.querySelector('.linguagensConteudo2')


function responsivo2() {
   
    
    contatoForm2.style.display = 'none'
    portfolioContent2.style.display = 'none'
    banner2.style.display = 'flex'

    if(tamanhoTela <= '425'){
        

        header2.style.top = '30px'
        header2.style.height = '90px'
    } else {
        header2.style.top = '60px'
        header2.style.height = '110px'
    }
    

    fecharMenuMobile()
}


function orcamento2() {
    
    

    banner2.style.display = 'none'
    portfolioContent2.style.display = 'none'
    contatoForm2.style.display = 'flex'

    contatoForm2.style.height = '400px'
    contatoFormForm.style.height = '370px'
    contatoFormForm.style.padding = '0px'
    contatoFormForm.style.marginTop = '40px'
    if(tamanhoTela <= '425'){
        formFieldset.style.height = '360px'
        header2.style.top = '30px'
        header2.style.height = '90px'
    } else {
        formFieldset.style.height = '300px'
        header2.style.top = '60px'
        header2.style.height = '110px'
        
    }
    
    

    fecharMenuMobile()
}

function contato2() {
    
   

    banner2.style.display = 'none'
    portfolioContent2.style.display = 'none'
    contatoForm2.style.display = 'flex'

    contatoForm2.style.height = '400px'
    contatoFormForm.style.height = '370px'
    contatoFormForm.style.padding = '0px'
    contatoFormForm.style.marginTop = '40px'
    

    if(tamanhoTela <= '425'){
        

        header2.style.top = '30px'
        header2.style.height = '90px'
        formFieldset.style.height = '360px'
    } else {
        header2.style.top = '60px'
        header2.style.height = '110px'
        formFieldset.style.height = '300px'
    }
    

    fecharMenuMobile()
}

function portfolio2() {
    

    

    banner2.style.display = 'none'
    contatoForm2.style.display = 'none'

    portfolioContent2.style.display = 'flex'
    
    

    if(tamanhoTela <= '666'){
        console.log('oi oi')
        portfolioContent2.style.top = '-45px'
    } else {
        portfolioContent2.style.top = '-115px'
    }

    linguagensConteudo2.style.overflow = 'auto'
    linguagensConteudo.style.overflow = 'auto'

    conteudoHtml2.style.height = '650px'
    conteudoHtml.style.height = '650px'
    conteudoHtml.style.marginTop = '325px'
    conteudoHtml2.style.marginTop = '325px'
    conteudoHtml.style.flexDirection = 'column'
    conteudoHtml2.style.flexDirection = 'column'


    conteudoCss2.style.height = '650px'
    conteudoCss.style.height = '650px'
    conteudoCss.style.marginTop = '325px'
    conteudoCss2.style.marginTop = '325px'
    conteudoCss.style.flexDirection = 'column'
    conteudoCss2.style.flexDirection = 'column'

    conteudoJavascript2.style.height = '650px'
    conteudoJavascript.style.height = '650px'
    conteudoJavascript.style.marginTop = '325px'
    conteudoJavascript2.style.marginTop = '325px'
    conteudoJavascript2.style.flexDirection = 'column'
    conteudoJavascript.style.flexDirection = 'column'


    conteudoPhp2.style.height = '650px'
    conteudoPhp.style.height = '650px'
    conteudoPhp2.style.marginTop = '325px'
    conteudoPhp.style.marginTop = '325px'
    conteudoPhp2.style.flexDirection = 'column'
    conteudoPhp.style.flexDirection = 'column'


    if(tamanhoTela <= '425'){
        

        header2.style.top = '30px'
        header2.style.height = '90px'
    } else {
        header2.style.top = '60px'
        header2.style.height = '110px'
    }

    portfolioContent2.style.height = '465px'

    fecharMenuMobile()
}

function fecharMenuMobile() {
    
    // menuLateral.style.transition = '.5s linear'
    menuLateral.style.right = '-290px' 
    setTimeout(() => {
        
        
        menuLateral.style.display = 'none'  
    }, 350);
}
