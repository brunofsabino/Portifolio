const body = document.querySelector('body')
const menu = document.querySelector('.menu')
const menuHamburger = document.querySelector('.menu-hamburguer')
const menuL = document.querySelector('.menu-l')
const menuLateral = document.querySelector('.menu-lateral')
const menuLateralA = document.querySelectorAll('.menu-lateral a')

const area5Portifolio1 = document.querySelector('.area5-desc-content1')
const area5Portifolio2 = document.querySelector('.area5-desc-content2')
const area5FundoModal = document.querySelector('.area5-desc-content-modal')
const areaModal = document.querySelector('.area5-modal1')
const pModal = document.querySelector('.area5-modal1-content-desc')
const botaoFechar = document.querySelector('.close')
const titleModal = document.querySelector('.area5-modal1 h2')
const imgModal = document.querySelector('.area5-modal1-content-img')
const link = document.getElementById('link')


function menuFuncion() {
    menuLateral.classList.toggle('menu-l')
    body.classList.toggle('body-menu-lateral')
}

menuHamburger.addEventListener('click', click => {
    menuFuncion()
})

menuLateralA.forEach(item => {
    item.addEventListener('click', clicou => {
        menuFuncion()
    })
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
    titleModal.innerText = 'API - Quantos de você existe no Brasil?'
    imgModal.style.backgroundImage = "url('../images/QuantosExisteBrasil.png')"
    imgModal.style.backgroundColor = '#0E4959'
    imgModal.style.backgroundPosition = 'center'
    pModal.innerHTML = `REST API Quantos de você existe no Brasil.
        <pre><code>https://brunoferrazsabino.dev/api/quantos-de-vc-existe</code class="doc-code"></pre>
        </br>
        Esta API realiza web-scraping dinamico no site do IBGE. 
        </br></br>
        Para obter o retorno é necessário encaminhar no endpoint via URL Encoding o campo <code class="doc-code">name</code>,
        seguido do value com o nome desejado a pesquisar.</br></br>
        A API retornará um objeto com as seguintes propriedades:</br></br>
            <ul>
                <li><code class="doc-code">name</code>: Retorna o nome pesquisado</li></br>
                <li><code class="doc-code">numberNamesBrasil</code>: Retorna a quantidade do nome pesquisado que tem no Brasil.</li></br>
                <li><code class="doc-code">namePopular</code>: Retorna o número que o nome pesquisado está no ranking de nomes brasileiro.</li></br>
                <li><code class="doc-code">statePopularName</code>: Retorna o Estado brasileiro que o nome pesquisado é mais popular.</li></br>
                <li><code class="doc-code">name100ThousandState</code>: Retorna a frequência de pessoas com o nome pesquisado no Brasil a cada 100 mil habitantes.</li></br>
                <li><code class="doc-code">percentage</code>: Retorna a porcentagem de pessoas no Brasil com o nome pesquisado.</li></br>
            </ul>
        Site do IBGE onde o web-scrapping dinâmico é realizado:
        <pre><code>https://www.ibge.gov.br/censo2010/apps/nomes/#/search</code class="doc-code"></pre>

        Clique no botão abaixo para utilizarem a API com Template Engine Mustache-Express.</br></br>

    `
    link.href = "/quantos-de-vc-existe"
}
function abrirModal2() {
    abrirModal()
    titleModal.innerText = 'API - Qual é o valor do seu veículo?'
    imgModal.style.backgroundImage = "url('../images/QualValorVeiculo.PNG')"
    imgModal.style.backgroundColor = '#E0D8DE'
    imgModal.style.backgroundPosition = 'bottom'
    pModal.innerHTML = `REST API Qual é o valor do seu veículo.
        <pre><code>https://brunoferrazsabino.dev/api/qual-o-valor-do-seu-veiculo</code class="doc-code"></pre>
        </br>
        Esta API realiza web-scraping dinamico nos sites da Tabela Fipe.
        
        </br></br>
        Para obter o retorno é necessário encaminhar no endpoint via URL Encoding os campos <code class="doc-code">select</code>,
        <code class="doc-code">select1</code>, <code class="doc-code">select2</code> e <code class="doc-code">select3</code>
        seguidos dos seus values. Observe os passos abaixo:</br></br>
        1. O campo <code class="doc-code">select</code> deverá ter um dos seguintes values:</br></br>
            <ul>
                <li><code class="doc-code">Consulta de Carros e utilitários pequenos</code>: Caso queira pesquisar sobre carros e utilitários pequenos.</li></br>
                <li><code class="doc-code">Consulta de Caminhões e Micro-Ônibus</code>: Caso queira pesquisar sobre Caminhões e Micro-Ônibus.</li></br>
                <li><code class="doc-code">Consulta de motos</code>: Caso queira pesquisar sobre motos.</li></br>
            </ul>
        2. Ao encaminhar o endpoint com o campo <code class="doc-code">select</code> com o value escolhido, a API retornará um
        objeto com a propriedade <code class="doc-code">marcadoVeiculo</code> preenchida, ela é um array com todas as marcas do veículo. </br></br>

        3. Para continuar utilizar a API é necessário encaminhar os dois campos prenchidos, o <code class="doc-code">select</code> e o
        <code class="doc-code">select1</code>. O value do campo <code class="doc-code">select1</code> é uma das opções que o array da propriedade
        <code class="doc-code">marcadoVeiculo</code> retornou. Com isto, a API irá retornar a propriedade <code class="doc-code">marcadoVeiculo</code> 
        e a propriedade <code class="doc-code">modelodoVeiculo</code> preenchidas.</br></br>

        4. Agora é necessário encaminhar o campo <code class="doc-code">select2</code> preenchido (não esquecendo dos selects anteriores preenchidos também).
        O campo <code class="doc-code">select2</code> deverá estar com um value que a propriedade <code class="doc-code">modelodoVeiculo</code> anteriormente retornou.
        A API retornará a propriedade <code class="doc-code">anoDoVeiculo</code> (juntamente com as propriedades anteriormente citadas) preenchida, ela é um array.</br></br>

        5. Por fim é necessário encaminhar o  campo <code class="doc-code">select3</code> preenchido, juntamente com todos os selects anteriormente citados.
        O campo <code class="doc-code">select3</code> deverá estar com um value que a propriedade <code class="doc-code">anoDoVeiculo</code> anteriormente retornou.</br></br></br>

        Com todos os selects preenchidos e encaminhados a API retornará um objeto com todas as propriedades preenchidas,
        que são elas: </br></br>

        <ul>
                <li><code class="doc-code">marcadoVeiculo</code>: Um array com todas as marcas do veículo.</li></br>
                <li><code class="doc-code">modelodoVeiculo</code>: Um array com todos os modelos do veículo.</li></br>
                <li><code class="doc-code">anoDoVeiculo</code>: Um array com todos os anos do veículo.</li></br>
                <li><code class="doc-code">mesReferencia</code>: O mês e ano da pesquisa realizada no site da Tabela Fipe.</li></br>
                <li><code class="doc-code">codigoFipe</code>: O código Fipe da pesquisa realizada no site da Tabela Fipe.</li></br>
                <li><code class="doc-code">marca</code>: A marca do veículo pesquisado no site da Tabela Fipe.</li></br>
                <li><code class="doc-code">modelo</code>: O modelo do veículo pesquisado no site da Tabela Fipe.</li></br>
                <li><code class="doc-code">anoModelo</code>: O ano do modelo do veículo pesquisado no site da Tabela Fipe.</li></br>
                <li><code class="doc-code">autenficacao</code>: A autenficação da pesquisa realizada no site da Tabela Fipe.</li></br>
                <li><code class="doc-code">dataConsulta</code>: A data da consulta da pesquisa realizada no site da Tabela Fipe.</li></br>
                <li><code class="doc-code">precoMedio</code>: O preço médio do veiculo que foi pesquisado no site da Tabela Fipe.</li></br>
               
            </ul>


        Site da Tabela Fipe onde o web-scrapping dinâmico é realizado:
        <pre><code>https://veiculos.fipe.org.br/</code class="doc-code"></pre>

        Clique no botão abaixo para utilizarem a API com Template Engine Mustache-Express.</br></br>

    `
    link.href = "/qual-o-valor-do-seu-veiculo"
}


botaoFechar.addEventListener('click', fecharModal)

function fecharModal(){
    body.style.overflow = 'auto'
    area5FundoModal.style.display = 'none'
    areaModal.style.display = 'none'
}