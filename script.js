const ulLinguagem = document.querySelector('ul.linguagens')
const animacao = document.querySelector('.animacao-content')


for(let i = 0; i < 40; i++){
    const div = document.createElement('div')
    
    const randomico = (minimo, maximo) => Math.random() * (maximo - minimo) + minimo
    const tamanho = Math.floor(randomico(7, 150))
    const posicao =  Math.floor(randomico(1, 99))
    const demora = randomico(5, 0.5)
    const duracao = randomico(10,20)
    const fontSize = (tamanho / 5).toFixed(2)

    div.style.height = `${tamanho}px`
    div.style.width = `${tamanho+20}px`
    div.style.top = `-${tamanho}px`
   
    div.style.left = `${posicao}%`
   

    div.classList.add('animacao')

    div.innerHTML = "JavaScript"
    div.style.lineHeight =  `${tamanho}px`
    div.style.fontSize = `${fontSize}px`

    div.style.animationDelay = `${demora}s`
    div.style.animationDuration = `${duracao}s`
    
    div.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
    animacao.appendChild(div)

    if(i > 10 && i <= 20) {
        
        div.style.height = `${tamanho}px`
        div.style.width = `${tamanho+20}px`
        div.style.top = `-${tamanho}px`
       
        div.style.left = `${posicao}%`
        div.classList.add('animacao2')

        div.innerHTML = "PHP"
        div.style.lineHeight =  `${tamanho}px`
        div.style.fontSize = `${fontSize}px`

        div.style.animationDelay = `${demora}s`
        div.style.animationDuration = `${duracao}s`

        div.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
        animacao.appendChild(div)
    } else if(i > 20 && i <= 30) {
        
        div.style.height = `${tamanho}px`
        div.style.width = `${tamanho+20}px`
        div.style.top = `-${tamanho}px`
        
        
        div.style.left = `${posicao}%`

        div.classList.add('animacao3')

        div.innerHTML = 'HTML'
        div.style.lineHeight =  `${tamanho}px`
        div.style.fontSize = `${fontSize}px`
        
        

        div.style.animationDelay = `${demora}s`
        div.style.animationDuration = `${duracao}s`

        div.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

        animacao.appendChild(div)

    } else if (i > 30 && i <= 40){

        div.style.height = `${tamanho}px`
        div.style.width = `${tamanho+20}px`
        div.style.top = `-${tamanho}px`
        
        div.style.left = `${posicao}%`
        div.classList.add('animacao4')
    
        div.innerHTML = 'CSS'
        div.style.lineHeight =  `${tamanho}px`
        div.style.fontSize = `${fontSize}px`

        div.style.animationDelay = `${demora}s`
        div.style.animationDuration = `${duracao}s`

        div.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

        
        animacao.appendChild(div)
    }

    div.addEventListener('click', (e)=>{

        

        const divCss = document.querySelector('.divCss')
        const divHtml = document.querySelector('.divHtml')
        const divPhp = document.querySelector('.divPhp')
        const divJavascript = document.querySelector('.divjava')
        const asidePortifolio = document.querySelector('.aside--portifolio')
        
        

        if(div.innerHTML === 'CSS') {

            if(asidePortifolio.style.display = 'flex'){
                asidePortifolio.style.display = 'none'
            }

            divHtml.style.display = 'none' 
            divPhp.style.display = 'none'
            divJavascript.style.display  = 'none'
            
            setTimeout(() => {
                asidePortifolio.style.display = 'flex'
            }, 300);
            css_2()

            
        }
        if(div.innerHTML === 'PHP') {

            if(asidePortifolio.style.display = 'flex'){
                asidePortifolio.style.display = 'none'
            }

            divHtml.style.display = 'none' 
            divJavascript.style.display  = 'none'
            divCss.style.display = 'none'
            setTimeout(() => {
                asidePortifolio.style.display = 'flex'
            }, 300);
            
            php_2()
        }
        if(div.innerHTML === 'HTML') {
            if(asidePortifolio.style.display = 'flex'){
                asidePortifolio.style.display = 'none'
            }

            
            divPhp.style.display = 'none'
            divJavascript.style.display  = 'none'
            divCss.style.display = 'none'
            setTimeout(() => {
                asidePortifolio.style.display = 'flex'
            }, 300);
            html_2()
        }
        if(div.innerHTML === 'JavaScript') {
            if(asidePortifolio.style.display = 'flex'){
                asidePortifolio.style.display = 'none'
            }

            divHtml.style.display = 'none' 
            divPhp.style.display = 'none'
            
            divCss.style.display = 'none'
            setTimeout(() => {
                asidePortifolio.style.display = 'flex'
            }, 300);
            javascript_2()
        }
        
        
        
    })
        
}





// for(let i = 0; i < 10; i++){
//     let div2 = document.createElement('div')
//     const randomico = (minimo, maximo) => Math.random() * (maximo - minimo) + minimo
//     const tamanho = Math.floor(randomico(7, 150))
//     const posicao =  Math.floor(randomico(1, 99))
//     const demora = randomico(5, 0.5)

//     const duracao = randomico(24,13)
//     const fontSize = (tamanho / 5).toFixed(2)
    
//     div2.style.height = `${tamanho}px`
//     div2.style.width = `${tamanho+20}px`
//     div2.style.top = `-${tamanho}px`
   
//     div2.style.left = `${posicao}%`

//     div2.classList.add('animacao2')

//     div2.innerHTML = 'PHP'
//     div2.style.lineHeight =  `${tamanho}px`
//     div2.style.fontSize = `${fontSize}px`
  
    

//     div2.style.animationDelay = `${demora}s`
//     div2.style.animationDuration = `${duracao}s`

//     div2.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

//     animacao.appendChild(div2)

// }
// for(let i = 0; i < 10; i++){
//     let div3 = document.createElement('div')
//     const randomico = (minimo, maximo) => Math.random() * (maximo - minimo) + minimo
//     const tamanho = Math.floor(randomico(7, 150))
//     const posicao =  Math.floor(randomico(1, 99))
//     const demora = randomico(5, 0.5)

//     const duracao = randomico(24,13)
//     const fontSize = (tamanho / 5).toFixed(2)

//     div3.style.height = `${tamanho}px`
//     div3.style.width = `${tamanho+20}px`
//     div3.style.top = `-${tamanho}px`
    
    
//     div3.style.left = `${posicao}%`

//     div3.classList.add('animacao3')

//     div3.innerHTML = 'HTML'
//     div3.style.lineHeight =  `${tamanho}px`
//     div3.style.fontSize = `${fontSize}px`
    
    

//     div3.style.animationDelay = `${demora}s`
//     div3.style.animationDuration = `${duracao}s`

//     div3.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

//     animacao.appendChild(div3)

// }    
// for(let i = 0; i < 10; i++){
//     let div1 = document.createElement('div')
//     let div2 = document.createElement('div')
//     let div3 = document.createElement('div')
//     let div4 = document.createElement('div')

//     const randomico = (minimo, maximo) => Math.random() * (maximo - minimo) + minimo
//     const tamanho = Math.floor(randomico(7, 150))
//     const posicao =  Math.floor(randomico(1, 99))
//     const demora = randomico(5, 0.5)

//     const duracao = randomico(24,13)
//     const fontSize = (tamanho / 5).toFixed(2)
    
//     div4.style.height = `${tamanho}px`
//     div4.style.width = `${tamanho+20}px`
//     div4.style.top = `-${tamanho}px`
   
//     div4.style.left = `${posicao}%`
//     div4.classList.add('animacao4')

//     div4.innerHTML = 'CSS'
//     div4.style.lineHeight =  `${tamanho}px`
//     div4.style.fontSize = `${fontSize}px`
   
//     div4.addEventListener('click', (e)=>{
//        const divContent = document.querySelector('.div-content')

//        divContent.style.display = 'none'
//        div4.style.transition = '3s all'        
//        div4.style.animationPlayState = 'paused'
//        div4.style.width = '80vw'
//        div4.style.height = '80vh' 
//        div4.style.animation = 'divReta'
//        div4.style.top = '10%'
//        div4.style.left = '10%'
//        div4.style.borderRadius = '10%'
//        div4.style.zIndex = '100'
//        
//     })

//     div4.style.animationDelay = `${demora}s`
//     div4.style.animationDuration = `${duracao}s`

//     div4.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

    
//     animacao.appendChild(div4)

// }    




// function typeWriter(elemento1, elemento2) {
//     const textoArray = elemento1.innerHTML.split('')
//     elemento1.innerHTML = ''
//     setTimeout( ()=>{
//         textoArray.forEach( (letra, i)=>{
//             setTimeout( ()=>{
//                 elemento1.innerHTML += letra
//             }, 100 * i)
            
//         } )
//     }, 6000)      
// }

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

const tamanhoTelaAltura = document.querySelector('aside').clientHeight

function responsivo() {
    if(orcamentos.classList.contains('selecionada')) {
        orcamentos.classList.remove('selecionada')
    }
    if(portfolios.classList.contains('selecionada')) {
        portfolios.classList.remove('selecionada')
    }
    if(contatos.classList.contains('selecionada')) {
        contatos.classList.remove('selecionada')
    }
    
    responsivos.classList.add('selecionada')
    
    contatoForm.style.display = 'none'
    portfolioContent.style.display = 'none'
    banner.style.display = 'flex'

    header.style.top = '60px'
    header.style.height = '150px'

    
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

    banner.style.display = 'none'
    portfolioContent.style.display = 'none'
    contatoForm.style.display = 'flex'

    header.style.top = '60px'
    header.style.height = '150px'

    
}

function contato() {
    
    if(responsivos.classList.contains('selecionada')) {
        responsivos.classList.remove('selecionada')
    }
    if(portfolios.classList.contains('selecionada')) {
        portfolios.classList.remove('selecionada')
    }
    if(orcamentos.classList.contains('selecionada')) {
        orcamentos.classList.remove('selecionada')
    }
    
    contatos.classList.add('selecionada')

    banner.style.display = 'none'
    portfolioContent.style.display = 'none'
    contatoForm.style.display = 'flex'

    header.style.top = '60px'
    header.style.height = '150px'

    
}

function portfolio() {
    

    if(responsivos.classList.contains('selecionada')) {
        responsivos.classList.remove('selecionada')
    }
    if(contatos.classList.contains('selecionada')) {
        contatos.classList.remove('selecionada')
    }
    if(orcamentos.classList.contains('selecionada')) {
        orcamentos.classList.remove('selecionada')
    }
    
    portfolios.classList.add('selecionada')

    

    banner.style.display = 'none'
    contatoForm.style.display = 'none'

    portfolioContent.style.display = 'flex'

    if(tamanhoTelaAltura >= '900') {
        header.style.top = '60px'
        header.style.height = '150px'

    } else {
        header.style.top = '5px'
        header.style.height = '117px'

        portfolioContent.style.top = '-115px'
        portfolioContent.style.height = '465px'

    }
    
    
    
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

    menuLateral.style.display = 'block'
    setTimeout(() => {
        menuLateral.style.right = '0'   
    }, 100);
    

})

