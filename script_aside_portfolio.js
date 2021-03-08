const asidePortifolio = document.querySelector('.aside--portifolio')

const html2 = document.querySelector('.html2')
const css2 = document.querySelector('.css2')
const javascript2 = document.querySelector('.javascript2')
const php2 = document.querySelector('.php2')

const linguagensConteudo2 = document.querySelector('.linguagens--conteudo2')

const divs_html2  = document.querySelector('.divs_html2')
const divs_css2  = document.querySelector('.divs_css2')
const divs_javascript2  = document.querySelector('.divs_javascript2')
const divs_php2  = document.querySelector('.divs_php2')

const div_apagar2 = document.querySelector('.div_apagar2 ')

const conteudoHtml2 = document.querySelector('.linguagens--conteudo--1-2')
const conteudoCss2 = document.querySelector('.linguagens--conteudo--2-2')
const conteudoJavascript2 = document.querySelector('.linguagens--conteudo--3-2')
const conteudoPhp2 = document.querySelector('.linguagens--conteudo--4-2')

const conteudoDentroPortifolioCss = document.querySelector('.conteudo--1--css')
// const image = document.querySelector('.conteudo--1--css .image')


function css_2() {

    divs_html2.classList.add('div_apagar2')
    divs_javascript2.classList.add('div_apagar2')
    divs_php2.classList.add('div_apagar2')
    divs_css2.classList.remove('div_apagar2')

    linguagensConteudo2.style.backgroundColor = '#254add5d'
    linguagensConteudo2.style.borderTopRightRadius = '35px'
    linguagensConteudo2.style.borderTopLeftRadius = '35px'

    if(tamanhoTela <= '666'){
        

        header.style.top = '30px'
        header.style.height = '110px'


        asidePortifolio.style.top = '60px'
        asidePortifolio.style.height = '480px'

        linguagensConteudo2.style.overflow = 'auto'
        linguagensConteudo.style.overflow = 'auto'

        conteudoCss2.style.height = '650px'
       
        conteudoCss2.style.marginTop = '325px'
       
        conteudoCss2.style.flexDirection = 'column'

        // image.style.height = '125px'
        // image.style.width = '20vw'
       
    } 
    if(tamanhoTela <= '425'){
        

        header.style.top = '20px'
        header.style.height = '90px'

        asidePortifolio.style.top = '25px'
    }


    conteudoHtml2.style.display = 'none'
    conteudoJavascript2.style.display = 'none'
    conteudoPhp2.style.display = 'none'
    conteudoCss2.style.display = 'flex'
                             
}
function html_2() {

    divs_css2.classList.add('div_apagar2')
    divs_javascript2.classList.add('div_apagar2')
    divs_php2.classList.add('div_apagar2')
    
    divs_html2.classList.remove('div_apagar2')

    linguagensConteudo2.style.backgroundColor = '#f4450b4b'
    linguagensConteudo2.style.borderTopRightRadius = '35px'
    linguagensConteudo2.style.borderTopLeftRadius = '0px'

    conteudoHtml2.style.display = 'flex'
    conteudoJavascript2.style.display = 'none'
    conteudoPhp2.style.display = 'none'
    conteudoCss2.style.display = 'none'

    if(tamanhoTela <= '666'){
        

        header.style.top = '30px'
        header.style.height = '110px'


        asidePortifolio.style.top = '60px'
        asidePortifolio.style.height = '480px'

        linguagensConteudo2.style.overflow = 'auto'
        linguagensConteudo.style.overflow = 'auto'

        conteudoHtml2.style.height = '650px'
       
        conteudoHtml2.style.marginTop = '325px'
       
        conteudoHtml2.style.flexDirection = 'column'

        // image.style.height = '125px'
        // image.style.width = '20vw'
       
    } 
    if(tamanhoTela <= '425'){
        

        header.style.top = '20px'
        header.style.height = '90px'

        asidePortifolio.style.top = '25px'
    }
                             
}
function javascript_2() {

    divs_css2.classList.add('div_apagar2')
    divs_html2.classList.add('div_apagar2')
    divs_php2.classList.add('div_apagar2')
    
    divs_javascript2.classList.remove('div_apagar2')

    linguagensConteudo2.style.backgroundColor = '#eccd335e'
    linguagensConteudo2.style.borderTopRightRadius = '35px'
    linguagensConteudo2.style.borderTopLeftRadius = '35px'

    conteudoHtml2.style.display = 'none'
    conteudoJavascript2.style.display = 'flex'
    conteudoPhp2.style.display = 'none'
    conteudoCss2.style.display = 'none'

    if(tamanhoTela <= '666'){
        

        header.style.top = '30px'
        header.style.height = '110px'


        asidePortifolio.style.top = '60px'
        asidePortifolio.style.height = '480px'

        linguagensConteudo2.style.overflow = 'auto'
        linguagensConteudo.style.overflow = 'auto'

        conteudoJavascript2.style.height = '650px'
       
        conteudoJavascript2.style.marginTop = '325px'
       
        conteudoJavascript2.style.flexDirection = 'column'

        // image.style.height = '125px'
        // image.style.width = '20vw'
       
    } 
    if(tamanhoTela <= '425'){
        

        header.style.top = '20px'
        header.style.height = '90px'

        asidePortifolio.style.top = '25px'
    }
                             
}

function php_2() {

    divs_css2.classList.add('div_apagar2')
    divs_html2.classList.add('div_apagar2')
    divs_javascript2.classList.add('div_apagar2')
    
    divs_php2.classList.remove('div_apagar2')

    linguagensConteudo2.style.backgroundColor = '#5e7db063'
    linguagensConteudo2.style.borderTopRightRadius = '0px'
    linguagensConteudo2.style.borderTopLeftRadius = '35px'

    conteudoHtml2.style.display = 'none'
    conteudoJavascript2.style.display = 'none'
    conteudoPhp2.style.display = 'flex'
    conteudoCss2.style.display = 'none'

    if(tamanhoTela <= '666'){
        

        header.style.top = '30px'
        header.style.height = '110px'


        asidePortifolio.style.top = '60px'
        asidePortifolio.style.height = '480px'

        linguagensConteudo2.style.overflow = 'auto'
        linguagensConteudo.style.overflow = 'auto'

        conteudoPhp2.style.height = '650px'
       
        conteudoPhp2.style.marginTop = '325px'
       
        conteudoPhp2.style.flexDirection = 'column'

        // image.style.height = '125px'
        // image.style.width = '20vw'
       
    } 
    if(tamanhoTela <= '425'){
        

        header.style.top = '20px'
        header.style.height = '90px'

        asidePortifolio.style.top = '25px'
    }
                        
}



function fecharDiv() {
    const asideButton = document.querySelector('.aside-button')
    const asidePortifolio2 = document.querySelector('.aside--portifolio')

    asideButton.addEventListener('click', ()=>{
        asidePortifolio2.style.display = 'none'
    })
}
fecharDiv()