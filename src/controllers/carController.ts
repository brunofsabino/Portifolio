import { Request, Response } from 'express'
import puppeteer from 'puppeteer'


export const procuraCar = (req: Request, response: Response) => {
    let url = "https://veiculos.fipe.org.br/"
    
    let option3: string[]  = ['']
    let option5: string[]  = ['']
    
    let formSelect = false
    let formSelectModel = false
    let formSelectAnoCar = false
    let mostrarBotao = false
    let anunciosSelects = false
    
    let dados = req.body.select
    let marcaVeiculo = req.body.select1
    let modeloVeiculo = req.body.select2
    let anoVeiculo = req.body.select3

    let mesReferencia = ''
    let codigoFipe = ''
    let marca = ''
    let modelo = ''
    let anoModelo = ''
    let autenficacao = ''
    let dataConsulta = ''
    let precoMedio = ''
    console.log(req.body)
    if(dados) {
        console.log('entrou dados')
        const list:any  = []
        const listIcarros:any = []
     ;(async () => {
        const browser = await puppeteer.launch({headless: true});
        
        const page = await browser.newPage();
        await page.goto(url, { timeout: 0} ); //{ timeout: 0}
        
        await page.waitForSelector('[data-slug="carro"]')
        if(dados == 'Consulta de Carros e utilitários pequenos') {
            await page.click('[data-label="carro"]')
            await page.waitForSelector('#selectMarcacarro')
            let arrayOption =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.innerHTML))
            let arrayOption2 =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.getAttribute('value')))
            const option = [...arrayOption]
            const option2 = [...arrayOption2]
            option[0] == '' ? option.shift() : option
            option2[0] == '' ? option2.shift() : option2
            console.log(option)
            mostrarBotao = true
            formSelect = true
            
            if(marcaVeiculo)  {
               
                let number = option.indexOf(marcaVeiculo)
                let veiculo = option2[number]
               
                await page.waitForSelector('.input')
                await page.waitForSelector('#selectMarcacarro')
                
                await page.select('select#selectMarcacarro', veiculo!)
                let arrayOption3 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.innerHTML))
                let arrayOption4 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                option3 = [...arrayOption3]
                option3[0] == '' ? option3.shift() : option3
                const option4 = [...arrayOption4]
                option4[0] == '' ? option4.shift() : option4

                formSelectModel = true
                
            }
            if(modeloVeiculo){

                let arrayOption5 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                let option4 = [...arrayOption5]
                option4[0] == '' ? option4.shift() : option4
                let number2 = option3.indexOf(modeloVeiculo)
                let veiculo2 = option4[number2]
            
                await page.waitForSelector('#selectAnoModelocarro')
                await page.select('select#selectAnoModelocarro', veiculo2!)
                formSelectAnoCar = true

                let arrayOption6 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
                option5 = [...arrayOption6]
                let option6 = [...arrayOption7]
                option5[0] == '' ? option5.shift() : option5
                option6[0] == '' ? option6.shift() : option6
            }
            
            if(anoVeiculo){
                let arrayOption6 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
                option5 = [...arrayOption6]
                const option6 = [...arrayOption7]
                option5[0] == '' ? option5.shift() : option5
                option6[0] == '' ? option6.shift() : option6

                let number2 = option5.indexOf(anoVeiculo)
                let veiculo3 = option6[number2]
                await page.waitForSelector('#selectAnocarro')
                await page.select('select#selectAnocarro', veiculo3!)

                await page.click('#buttonPesquisarcarro')

                await page.waitForSelector('#resultadoConsultacarroFiltros .last')

                let arrayValues =  await page.$$eval('#resultadoConsultacarroFiltros tbody td p', item => item.map(opt => opt.innerHTML))

                mesReferencia = arrayValues[1]
                codigoFipe = arrayValues[3]
                marca = arrayValues[5]
                modelo = arrayValues[7]
                let anoModelo1 = arrayValues[9]
                let anoModeloArray = anoModelo1.split(' ')[0]
                anoModelo = anoModeloArray
                console.log(anoModelo)
                autenficacao = arrayValues[11]
                dataConsulta = arrayValues[13]
                precoMedio = arrayValues[15]

            }    
        
            await browser.close();
            response.render('qualValorVeiculo/home', {
                option,
                option2: option3,
                option3: option5,
                formSelect,
                formSelectModel,
                formSelectAnoCar,
                mostrarBotao,
                carro: true,
                marcaVeiculo,
                modeloVeiculo,
                anoVeiculo,
                mesReferencia,
                codigoFipe,
                marca,
                modelo,
                anoModelo,
                autenficacao,
                dataConsulta,
                precoMedio,
                anunciosSelects,
                anuncio1: list[0],
                anuncio2: list[1],
                anuncio3: list[2],
                anuncio4: list[3],
                anuncio5: list[4]
            })
        }
        })()
    }        
         
}


// export const searchMl = (req: Request, response: Response) => {
//     let mercadoLivre = 'https://www.mercadolivre.com.br/c/carros-motos-e-outros#menu=categories'
//     ;(async () => {
//         const browser = await puppeteer.launch({headless: false});
            
//         const page = await browser.newPage();
//         await page.goto(mercadoLivre, { timeout: 0} ); //{ timeout: 0}

//         await page.goto(mercadoLivre,{ timeout: 0});
//         await page.waitForSelector('.nav-search-input')
//         await page.type('.nav-search-input', `${modelo}`)
//         await page.keyboard.press('Enter')
//         await page.waitForSelector(`[aria-label="${anoModelo}"]`)
//         await page.click(`[aria-label="${anoModelo}"]`)

//         let links2 =  await page.$$eval('.yuRUbf a', item => item.map((link: any) => { return link.href }))

//         await page.waitForSelector('.ui-search-result__image')
//         let linksML = await page.$$eval('.ui-search-result__image a', item => item.map((link: any) => { return link.href }))
        
//         for(let a = 10; a <= 10; a++) {
//             await page.waitForNavigation()
//             await page.goto(linksML[a],{ timeout: 0})
//             let imgML = await page.$$eval('.ui-pdp-gallery__figure__image',  item => item.map((link: any) => { return link.src }))
//             let titleML = await page.$eval('.ui-pdp-title', (item: any) => item.innerText)
//             let anoEKmVeiculo = await page.$eval('.ui-pdp-subtitle', (item: any) => item.innerText)
//             let precoVeiculow = await page.$eval('.andes-money-amount__fraction', (item: any) => item.innerText)
//             const objML = {
//                 title : titleML,
//                 img: imgML[0],
//                 anoEKmVeiculo,
//                 precoVeiculow,
//                 link: linksML[a]
//             }
//             list.push(objML)
//         }
//     })();
// }