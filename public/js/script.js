const body = document.querySelector('body')
const menu = document.querySelector('.menu')
const menuHamburger = document.querySelector('.menu-hamburguer')
const menuL = document.querySelector('.menu-l')
const menuLateral = document.querySelector('.menu-lateral')

const area5Portifolio1 = document.querySelector('.area5-desc-content1')
const area5Portifolio2 = document.querySelector('.area5-desc-content2')
const area5FundoModal = document.querySelector('.area5-desc-content-modal')
const areaModal = document.querySelector('.area5-modal1')
const botaoFechar = document.querySelector('.close')
const titleModal = document.querySelector('.area5-modal1 h2')
const imgModal = document.querySelector('.area5-modal1-content-img')
const link = document.getElementById('link')

const session1 = document.querySelector('.area1 ')
const alturaImg = document.querySelector('.area1 img').clientHeight
const alturaTitle = document.querySelector('.area1-desc').clientHeight
let paddingArea1 =  (alturaImg / 2) - alturaTitle
console.log(paddingArea1)
session1.style.padding = `${paddingArea1}px 0px`

menuHamburger.addEventListener('click', click => {
    // menuLateral.classList.toggle('menu-lateral-display')
    menuLateral.classList.toggle('menu-l')
    // menu.classList.toggle('menu-lateral')
    // menuLateral.style.display = 'flex'
    body.classList.toggle('body-menu-lateral')
})


area5Portifolio1.addEventListener('click', abrirModal1)
area5Portifolio2.addEventListener('click', abrirModal2)

function abrirModal(){
    body.style.overflow = 'hidden'
    area5FundoModal.style.opacity = 0
    area5FundoModal.style.display = 'flex'
    areaModal.style.display = 'flex'
    setTimeout(()=>{
        area5FundoModal.style.opacity = 1
    }, 300)
}

function abrirModal1() {
    abrirModal()
    titleModal.innerText = 'Quantos de você existe no Brasil?'
    imgModal.style.backgroundImage = "url('../images/QuantosExisteBrasil.png')"
    imgModal.style.backgroundColor = '#0E4959'
    imgModal.style.backgroundPosition = 'center'
    link.href = "/quantos-de-vc-existe"
}
function abrirModal2() {
    abrirModal()
    titleModal.innerText = 'Qual é o valor do seu veículo?'
    imgModal.style.backgroundImage = "url('../images/QualValorVeiculo.PNG')"
    imgModal.style.backgroundColor = '#E0D8DE'
    imgModal.style.backgroundPosition = 'bottom'
    link.href = "/qual-o-valor-do-seu-veiculo"
}


botaoFechar.addEventListener('click', fecharModal)

function fecharModal(){
    body.style.overflow = 'auto'
    area5FundoModal.style.display = 'none'
    areaModal.style.display = 'none'
}