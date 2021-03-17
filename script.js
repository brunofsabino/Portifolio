const ulLinguagem = document.querySelector('ul.linguagens')
const animacaoBody = document.querySelector('.animation')


const tamanhoTela = document.querySelector('.animation').clientWidth
const tamanhoTelaAltura = window.screen.height

for(let i = 0; i < 80; i++){
    const div = document.createElement('div')
    
    const randomico = (minimo, maximo) => Math.random() * (maximo - minimo) + minimo
    const tamanho = Math.floor(randomico(7, 150))
    
    const demora = randomico(5, 0.5)
    const duracao = randomico(10,35)
    const fontSize = (tamanho / 5).toFixed(2)

    // if( tamanhoTela < 667) {
    //     let posicao =  Math.floor(randomico(10, 80))
    // } else {
    //     let posicao =  Math.floor(randomico(5, 90))
    // }
    let posicao =  Math.floor(randomico(1, 99))
    const novaPosicao = posicao

    div.style.height = `${tamanho}px`
    div.style.width = `${tamanho+20}px`
    div.style.top = `-${tamanho}px`
   
    div.style.left = `${novaPosicao}%`
   

    div.classList.add('animacao')

    div.innerHTML = "JavaScript"
    div.style.lineHeight =  `${tamanho}px`
    div.style.fontSize = `${fontSize}px`

    div.style.animationDelay = `${demora}s`
    div.style.animationDuration = `${duracao}s`
    
    div.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
    animacaoBody.appendChild(div)

    if(i > 10 && i <= 20) {
        
        div.style.height = `${tamanho}px`
        div.style.width = `${tamanho+20}px`
        div.style.top = `-${tamanho}px`
       
        div.style.left = `${novaPosicao}%`
        div.classList.add('animacao2')

        div.innerHTML = "PHP"
        div.style.lineHeight =  `${tamanho}px`
        div.style.fontSize = `${fontSize}px`

        div.style.animationDelay = `${demora}s`
        div.style.animationDuration = `${duracao}s`

        div.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
        animacaoBody.appendChild(div)
    } else if(i > 20 && i <= 40) {
        
        div.style.height = `${tamanho}px`
        div.style.width = `${tamanho+20}px`
        div.style.top = `-${tamanho}px`
        
        
        div.style.left = `${novaPosicao}%`

        div.classList.add('animacao3')

        div.innerHTML = 'HTML'
        div.style.lineHeight =  `${tamanho}px`
        div.style.fontSize = `${fontSize}px`
        
        

        div.style.animationDelay = `${demora}s`
        div.style.animationDuration = `${duracao}s`

        div.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

        animacaoBody.appendChild(div)

    } else if (i > 30 && i <= 60){

        div.style.height = `${tamanho}px`
        div.style.width = `${tamanho+20}px`
        div.style.top = `-${tamanho}px`
        
        div.style.left = `${novaPosicao}%`
        div.classList.add('animacao4')
    
        div.innerHTML = 'CSS'
        div.style.lineHeight =  `${tamanho}px`
        div.style.fontSize = `${fontSize}px`

        div.style.animationDelay = `${demora}s`
        div.style.animationDuration = `${duracao}s`

        div.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

        
        animacaoBody.appendChild(div)
    }

    div.addEventListener('click', (e)=>{

        

        const divCss = document.querySelector('.divCss')
        const divHtml = document.querySelector('.divHtml')
        const divPhp = document.querySelector('.divPhp')
        const divJavascript = document.querySelector('.divjava')
        const asidePortifolio = document.querySelector('.aside--portifolio')
        
        

        if(div.innerHTML === 'CSS') {


            if(tamanhoTela > 1439) {
                window.scroll(0, 800)
            } else if(tamanhoTela > 1300 && tamanhoTela < 1439) {
                window.scroll(0, 582)
            } else {
                window.scroll(0, 600)
            }

            
            css_() 
            
        }
        if(div.innerHTML === 'PHP') {

            if(tamanhoTela > 1439) {
                window.scroll(0, 800)
            } else if(tamanhoTela > 1300 && tamanhoTela < 1439) {
                window.scroll(0, 582)
            } else {
                window.scroll(0, 600)
            }

            php_() 
        }
        if(div.innerHTML === 'HTML') {
           
            if(tamanhoTela > 1439) {
                window.scroll(0, 800)
            } else if(tamanhoTela > 1300 && tamanhoTela < 1439) {
                window.scroll(0, 582)
            } else {
                window.scroll(0, 600)
            }

            html_() 
        }
        if(div.innerHTML === 'JavaScript') {
            
            if(tamanhoTela > 1439) {
                window.scroll(0, 800)
            } else if(tamanhoTela > 1300 && tamanhoTela < 1439) {
                window.scroll(0, 582)
            } else {
                window.scroll(0, 600)
            }

            javascript_()
        }
        
        
        
    })
        
}



let sliders = document.querySelectorAll('.banner--area-slide').length
let slider = document.querySelector('.banner--area-slide').clientWidth
let sliderIndex = 0

let go = document.querySelector('.go')
let next = document.querySelector('.next')
let bannerArea = document.querySelector('.banner--area')
let tamanho = bannerArea.style.width = `${sliders * slider }px`

// const bannerAreaWidth = bannerArea.clientWidth
// const mudarSlide = bannerArea.style.marginLeft = '-1152px'
// console.log(bannerAreaWidth)

function avancar() {
    
    sliderIndex++
    if(sliderIndex > (sliders - 1) ) {
        
        sliderIndex = 0
    }
    updateSlider()
}

function voltar() {
    sliderIndex--
    if(sliderIndex < 0) {
        
        sliderIndex = sliders - 1
    }
    updateSlider()
}
function updateSlider(){
    let novaMargin = (sliderIndex * slider)
    bannerArea.style.marginLeft = `-${novaMargin}px`
    // go.addEventListener('click', (e )=>{
    //     bannerArea.style.marginLeft = `-${slider}px`
    //     avancar(e)
    // })
    // next.addEventListener('click', (e )=>{
    //     bannerArea.style.marginLeft = `${slider}px`
    //     voltar(e)
    // })
    
}


setInterval(() => {
    avancar()
}, 5000);

const header = document.querySelector('header')

const responsivos = document.querySelector('.responsivos')
const portfolios = document.querySelector('.portfolio')
const orcamentos = document.querySelector('.orcamento')
const contatos = document.querySelector('.contato')



const banner = document.querySelector('.banner')
const contatoForm = document.querySelector('.contato-form')
const portfolioContent = document.querySelector('.portfolio--content')

// const tamanhoTelaAltura = document.querySelector('aside').clientHeight


function home() {
    // if(orcamentos.classList.contains('selecionada')) {
    //     orcamentos.classList.remove('selecionada')
    // }
    if(portfolios.classList.contains('selecionada')) {
        portfolios.classList.remove('selecionada')
    }
    if(contatos.classList.contains('selecionada')) {
        contatos.classList.remove('selecionada')
    }
    
    responsivos.classList.add('selecionada')
    
    
    
}


function orcamento() {
    
    if(responsivos.classList.contains('selecionada')) {
        responsivos.classList.remove('selecionada')
    }
    if(portfolios.classList.contains('selecionada')) {
        portfolios.classList.remove('selecionada')
    }
    if(contatos.classList.contains('selecionada')) {
        contatos.classList.remove('selecionada')
    }
    
    orcamentos.classList.add('selecionada')

   
    
}

function contato() {
    
    if(responsivos.classList.contains('selecionada')) {
        responsivos.classList.remove('selecionada')
    }
    if(portfolios.classList.contains('selecionada')) {
        portfolios.classList.remove('selecionada')
    }
    // if(orcamentos.classList.contains('selecionada')) {
    //     orcamentos.classList.remove('selecionada')
    // }
    
    contatos.classList.add('selecionada')

    
    
}

function portfolio() {
    

    if(responsivos.classList.contains('selecionada')) {
        responsivos.classList.remove('selecionada')
    }
    if(contatos.classList.contains('selecionada')) {
        contatos.classList.remove('selecionada')
    }
    // if(orcamentos.classList.contains('selecionada')) {
    //     orcamentos.classList.remove('selecionada')
    // }
    
    portfolios.classList.add('selecionada')

    
    
}


const html = document.querySelector('.html')
const css = document.querySelector('.css')
const javascript = document.querySelector('.javascript')
const php = document.querySelector('.php')

const linguagensConteudo = document.querySelector('.linguagens--conteudo')

const divs_html  = document.querySelector('.divs_html')
const divs_css  = document.querySelector('.divs_css')
const divs_javascript  = document.querySelector('.divs_javascript')
const divs_php  = document.querySelector('.divs_php')

const div_apagar = document.querySelector('.div_apagar ')

const conteudoHtml = document.querySelector('.linguagens--conteudo--1')
const conteudoCss = document.querySelector('.linguagens--conteudo--2')
const conteudoJavascript = document.querySelector('.linguagens--conteudo--3')
const conteudoPhp = document.querySelector('.linguagens--conteudo--4')


function css_() {

    divs_html.classList.add('div_apagar')
    divs_javascript.classList.add('div_apagar')
    divs_php.classList.add('div_apagar')
    divs_css.classList.remove('div_apagar')

    linguagensConteudo.style.backgroundColor = '#254add5d'
    linguagensConteudo.style.borderTopRightRadius = '35px'
    linguagensConteudo.style.borderTopLeftRadius = '35px'

    conteudoHtml.style.display = 'none'
    conteudoJavascript.style.display = 'none'
    conteudoPhp.style.display = 'none'
    conteudoCss.style.display = 'flex'

    
                             
}
function html_() {

    divs_css.classList.add('div_apagar')
    divs_javascript.classList.add('div_apagar')
    divs_php.classList.add('div_apagar')
    
    divs_html.classList.remove('div_apagar')

    linguagensConteudo.style.backgroundColor = '#f4450b4b'
    linguagensConteudo.style.borderTopRightRadius = '35px'
    linguagensConteudo.style.borderTopLeftRadius = '0px'

    conteudoHtml.style.display = 'flex'
    conteudoJavascript.style.display = 'none'
    conteudoPhp.style.display = 'none'
    conteudoCss.style.display = 'none'
                             
}
function javascript_() {

    divs_css.classList.add('div_apagar')
    divs_html.classList.add('div_apagar')
    divs_php.classList.add('div_apagar')
    
    divs_javascript.classList.remove('div_apagar')

    linguagensConteudo.style.backgroundColor = '#eccd335e'
    linguagensConteudo.style.borderTopRightRadius = '35px'
    linguagensConteudo.style.borderTopLeftRadius = '35px'

    conteudoHtml.style.display = 'none'
    conteudoJavascript.style.display = 'flex'
    conteudoPhp.style.display = 'none'
    conteudoCss.style.display = 'none'
                             
}

function php_() {

    divs_css.classList.add('div_apagar')
    divs_html.classList.add('div_apagar')
    divs_javascript.classList.add('div_apagar')
    
    divs_php.classList.remove('div_apagar')

    linguagensConteudo.style.backgroundColor = '#5e7db063'
    linguagensConteudo.style.borderTopRightRadius = '0px'
    linguagensConteudo.style.borderTopLeftRadius = '35px'

    conteudoHtml.style.display = 'none'
    conteudoJavascript.style.display = 'none'
    conteudoPhp.style.display = 'flex'
    conteudoCss.style.display = 'none'
                        
}


const botaoMobile = document.querySelector('.botao--menu--mobile')
const menuLateral = document.querySelector('.menu--mobile--lateral')

botaoMobile.addEventListener('click', (e)=>{
    window.scroll(0, 0) 
    menuLateral.style.display = 'block'
    setTimeout(() => {
        menuLateral.style.right = '0'  
        
    }, 100);
    

})

const menuItens = document.querySelectorAll('.menu a[href^="#"]')
// const menuItens2 = document.querySelectorAll('.menu--mobile--lateral a')

// menuItens2.forEach(item => {
//     item.addEventListener('click', scrollToIdOnClick)
// })

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault()
    console.log(tamanhoTelaAltura)
    if(tamanhoTelaAltura < 799) {
         too =  getScrollTopByHref(event.target) - 150
    } else if (tamanhoTelaAltura > 799) {
         too =  getScrollTopByHref(event.target) -218
    }
    
    const to = too
    console.log(to)

    scrollToPosition(to)
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    return  document.querySelector(id).offsetTop
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

// function scrollTop() {
//     let novoBody = document.querySelector('body')
//     let scroll = novoBody.scrollTop

//     let input = document.querySelector('#name')

//     console.log(novoBody.scrollTop)
// }



const footer = document.querySelector('footer')
const atendimento = document.querySelector('.atendimento')

window.onscroll = ()=> {
    aparecerWhats();
    bordaBottomAparecerMenu();
}
function aparecerWhats() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 )  {
            if(tamanhoTela < 1001) {
                atendimento.style.display = 'none'
            } else{
                atendimento.style.display = 'block'
            } 
         footer.style.display = 'block'
            
            
            
       
        
    } else {
        
            footer.style.display = 'none'
            atendimento.style.display = 'none'
        
        
    }
}

// window.onscroll = ()=> {
//     diminuirHeader();
// }


const img = document.querySelector('header img')
const fontMenu = document.querySelectorAll('.menu ul li a')
// const headerDentroDoHeader = document.querySelector('.header')


console.log(tamanhoTela)
console.log(tamanhoTelaAltura)
if(tamanhoTela < 501 && tamanhoTelaAltura > 600){
    banner.style.marginTop = '-50%'
}
if(tamanhoTela < 376 && tamanhoTelaAltura > 700){
    banner.style.marginTop = '-95%'
}

function bordaBottomAparecerMenu() {
    console.log(scrollY)
    if(document.body.scrollTop < 230 || document.documentElement.scrollTop < 230) {
        
        home()
    }
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        portfolio()
    }
    if(document.body.scrollTop > 930 || document.documentElement.scrollTop > 930) {
        contato()
    }

    
}
