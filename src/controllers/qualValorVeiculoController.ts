import { Request, Response } from 'express'
import puppeteer from 'puppeteer'

export const home = (req: Request, res: Response) => {
    res.render('qualValorVeiculo/home', {
    })
}
export const vehicle = (req: Request, response: Response) => {
    let url = "https://veiculos.fipe.org.br/"
    let formSelect = false
    let mostrarBotao = false
    let dados = req.body.vehicle
    console.log(req.body)
    console.log(dados)
    if(dados) {
        ;(async () => {
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            await page.goto(url,{ timeout: 0});
            await page.waitForSelector('[data-slug="carro"]')
            if(dados == 'Consulta de Carros e utilitários pequenos') {
                await page.click('[data-label="carro"]')
                await page.waitForSelector('#selectMarcacarro')
                let arrayOption : string[] =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.innerHTML))
                let arrayOption2  : any =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.getAttribute('value')))
                const option: string[] = [...arrayOption]
                const option2 : string[]= [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true
            
                await browser.close();
                response.render('qualValorVeiculo/vehicle', {
                    option,
                    formSelect: true,
                    mostrarBotao,
                    carro: true,
                })
            }
            if(dados == 'Consulta de Caminhões e Micro-Ônibus') {
                await page.click('[data-label="caminhao"]')
                await page.waitForSelector('#selectMarcacaminhao')
                let arrayOption: string[] =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.innerHTML))
                let arrayOption2: any =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.getAttribute('value')))
                const option: string[] = [...arrayOption]
                const option2 : string[] = [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true

                await browser.close();
                response.render('qualValorVeiculo/vehicle', {
                    option,
                    formSelect: true,
                    mostrarBotao,
                    caminhao: true,
                })
            }
            if(dados == 'Consulta de motos') {
                await page.click('[data-label="moto"]')
                await page.waitForSelector('#selectMarcamoto')
                let arrayOption : string[] =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.innerHTML))
                let arrayOption2 : any =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.getAttribute('value')))
                const option: string[] = [...arrayOption]
                const option2 : string[] = [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true

                await browser.close();
                response.render('qualValorVeiculo/vehicle', {
                    option,
                    formSelect: true,
                    mostrarBotao,
                    moto: true,
                })
            }
        })()
    }
}
export const brand = (req: Request, response: Response) => {
    let url = "https://veiculos.fipe.org.br/"
    let formSelect = false
    let mostrarBotao = false
    let formSelectModel = false
    console.log('oi')
    let dados = req.body.vehicle
    let marcaVeiculo = req.body.vehicle_brand
    console.log(marcaVeiculo)
    console.log(dados)
    if(dados) {
        ;(async () => {
            const list = []
            const listIcarros = []
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            await page.goto(url,{ timeout: 0});
            
            await page.waitForSelector('[data-slug="carro"]')
            if(dados == 'Consulta de Carros e utilitários pequenos') {
                await page.click('[data-label="carro"]')
                await page.waitForSelector('#selectMarcacarro')
                let arrayOption : string[] =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.innerHTML))
                let arrayOption2: any =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.getAttribute('value')))
                const option : string[] = [...arrayOption]
                const option2 : string[] = [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true
                
                if(marcaVeiculo)  {
                    let number = option.indexOf(marcaVeiculo)
                    let veiculo = option2[number]
                    await page.waitForSelector('.input')
                    await page.waitForSelector('#selectMarcacarro')
                    await page.select('select#selectMarcacarro', veiculo!)
                    let arrayOption3 : string[] =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.innerHTML))
                    let arrayOption4 : any =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                    const option3 : string[] = [...arrayOption3]
                    option3[0] == '' ? option3.shift() : option3
                    const option4: string[]  = [...arrayOption4]
                    option4[0] == '' ? option4.shift() : option4
                    formSelectModel = true
                    await browser.close();
                    response.render('qualValorVeiculo/vehicle_brand', {
                        option,
                        formSelect: true,
                        option2: option3,
                        carro: true,
                        formSelectModel,
                        mostrarBotao,
                        marcaVeiculo
                    })
                }
            }
            if(dados == 'Consulta de Caminhões e Micro-Ônibus') {
                await page.click('[data-label="caminhao"]')
                await page.waitForSelector('#selectMarcacaminhao')
                let arrayOption : string[] =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.innerHTML))
                let arrayOption2 : any =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.getAttribute('value')))
                const option : string[] = [...arrayOption]
                const option2: string[]  = [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true
    
                if(marcaVeiculo)  {
                    let number = option.indexOf(marcaVeiculo)
                    let veiculo = option2[number]
                    await page.waitForSelector('.input')
                    await page.waitForSelector('#selectMarcacaminhao')
                    await page.select('select#selectMarcacaminhao', veiculo!)
                    let arrayOption3 : string[] =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.innerHTML))
                    let arrayOption4 : any =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                    const option3: string[] = [...arrayOption3]
                    option3[0] == '' ? option3.shift() : option3
                    const option4: string[] = [...arrayOption4]
                    option4[0] == '' ? option4.shift() : option4
                    formSelectModel = true
                    await browser.close();
                    response.render('qualValorVeiculo/vehicle_brand', {
                        option,
                        formSelect: true,
                        option2: option3,
                        caminhao: true,
                        formSelectModel,
                        mostrarBotao,
                        marcaVeiculo
                    })
                    
                }
            }
            if(dados == 'Consulta de motos') {
                await page.click('[data-label="moto"]')
                await page.waitForSelector('#selectMarcamoto')
                let arrayOption : string[] =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.innerHTML))
                let arrayOption2 : any =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.getAttribute('value')))
                const option : string[] = [...arrayOption]
                const option2 : string[] = [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true
    
                if(marcaVeiculo)  {
                    let number = option.indexOf(marcaVeiculo)
                    let veiculo = option2[number]
                    await page.waitForSelector('.input')
                    await page.waitForSelector('#selectMarcamoto')
                    await page.select('select#selectMarcamoto', veiculo!)
                    let arrayOption3 : string[] =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.innerHTML))
                    let arrayOption4 : any =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')))
                    const option3 : string[] = [...arrayOption3]
                    option3[0] == '' ? option3.shift() : option3
                    const option4 : string[] = [...arrayOption4]
                    option4[0] == '' ? option4.shift() : option4
                    formSelectModel = true
                    await browser.close();
                    response.render('qualValorVeiculo/vehicle_brand', {
                        option,
                        formSelect: true,
                        option2: option3,
                        formSelectModel,
                        mostrarBotao,
                        marcaVeiculo,
                        moto: true
                    })
                }
            }
        })()
    }
}
export const model = (req: Request, response: Response) => {
    let url = "https://veiculos.fipe.org.br/"
    let formSelect = false
    let mostrarBotao = false
    let formSelectModel = false
    let formSelectAnoCar = false

    let dados = req.body.vehicle
    let marcaVeiculo = req.body.vehicle_brand
    let modeloVeiculo = req.body.vehicle_model

    console.log(dados)
    if(dados) {
        ;(async () => {
            const list = []
            const listIcarros = []
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            await page.goto(url,{ timeout: 0});
            
            await page.waitForSelector('[data-slug="carro"]')
            if(dados == 'Consulta de Carros e utilitários pequenos') {
                await page.click('[data-label="carro"]')
                await page.waitForSelector('#selectMarcacarro')
                let arrayOption : string[] =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.innerHTML))
                let arrayOption2 : any =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.getAttribute('value')))
                const option : string[] = [...arrayOption]
                const option2 : string[] = [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true
                
                if(marcaVeiculo)  {
                    let number = option.indexOf(marcaVeiculo)
                    let veiculo = option2[number]
                    await page.waitForSelector('.input')
                    await page.waitForSelector('#selectMarcacarro')
                    await page.select('select#selectMarcacarro', veiculo!)
                    let arrayOption3 : string[] =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.innerHTML))
                    let arrayOption4 :any =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                    const option3: string[] = [...arrayOption3]
                    option3[0] == '' ? option3.shift() : option3
                    const option4 : string[] = [...arrayOption4]
                    option4[0] == '' ? option4.shift() : option4
                    formSelectModel = true

                    if(modeloVeiculo){
                        let arrayOption5 : any =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                        let option4 : string[] = [...arrayOption5]
                        option4[0] == '' ? option4.shift() : option4
                        let number2 = option3.indexOf(modeloVeiculo)
                        let veiculo2 = option4[number2]
                        await page.waitForSelector('#selectAnoModelocarro')
                        await page.select('select#selectAnoModelocarro', veiculo2!)
                        formSelectAnoCar = true
                        let arrayOption6 : string[] =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
                        let arrayOption7  : any =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
                        let option5 : string[] = [...arrayOption6]
                        let option6 : string[] = [...arrayOption7]
                        option5[0] == '' ? option5.shift() : option5
                        option6[0] == '' ? option6.shift() : option6
                        await browser.close();
                        response.render('qualValorVeiculo/vehicle_model', {
                            option,
                            formSelect: true,
                            option2: option3,
                            option3: option5,
                            carro: true,
                            formSelectModel,
                            formSelectAnoCar,
                            mostrarBotao,
                            marcaVeiculo,
                            modeloVeiculo
                        })
                    }
                }
            }
            if(dados == 'Consulta de Caminhões e Micro-Ônibus') {
                await page.click('[data-label="caminhao"]')
                await page.waitForSelector('#selectMarcacaminhao')
                let arrayOption : string[] =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.innerHTML))
                let arrayOption2 : any =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.getAttribute('value')))
                const option : string[] = [...arrayOption]
                const option2 : string[] = [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true
    
                if(marcaVeiculo)  {
                    let number = option.indexOf(marcaVeiculo)
                    let veiculo = option2[number]
                    await page.waitForSelector('.input')
                    await page.waitForSelector('#selectMarcacaminhao')
                    await page.select('select#selectMarcacaminhao', veiculo!)
                    let arrayOption3 : string[] =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.innerHTML))
                    let arrayOption4  : any =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                    const option3 : string[] = [...arrayOption3]
                    option3[0] == '' ? option3.shift() : option3
                    const option4 : string[] = [...arrayOption4]
                    option4[0] == '' ? option4.shift() : option4
                    formSelectModel = true
                    if(modeloVeiculo){
                        let arrayOption5 : any =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                        let option4 : string[] = [...arrayOption5]
                        option4[0] == '' ? option4.shift() : option4
                        let number2 = option3.indexOf(modeloVeiculo)
                        let veiculo2 = option4[number2]
                        await page.waitForSelector('#selectAnoModelocaminhao')
                        await page.select('select#selectAnoModelocaminhao', veiculo2!)
                        formSelectAnoCar = true
                        let arrayOption6 : string[] =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML))
                        let arrayOption7 : any =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                        let option5 : string[] = [...arrayOption6]
                        let option6 : string[] = [...arrayOption7]
                        option5[0] == '' ? option5.shift() : option5
                        option6[0] == '' ? option6.shift() : option6
                        await browser.close();
                        response.render('qualValorVeiculo/vehicle_model', {
                            option,
                            formSelect: true,
                            option2: option3,
                            option3: option5,
                            formSelectModel,
                            caminhao: true,
                            formSelectAnoCar,
                            mostrarBotao,
                            marcaVeiculo,
                            modeloVeiculo
                        })
                    }
                }
            }
            if(dados == 'Consulta de motos') {
                await page.click('[data-label="moto"]')
                await page.waitForSelector('#selectMarcamoto')
                let arrayOption : string[] =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.innerHTML))
                let arrayOption2 : any =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.getAttribute('value')))
                const option : string[] = [...arrayOption]
                const option2 : string[] = [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true
    
                if(marcaVeiculo)  {
                    let number = option.indexOf(marcaVeiculo)
                    let veiculo = option2[number]
                    await page.waitForSelector('.input')
                    await page.waitForSelector('#selectMarcamoto')
                    await page.select('select#selectMarcamoto', veiculo!)
                    let arrayOption3 : string[] =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.innerHTML))
                    let arrayOption4 : any =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')))
                    const option3 : string[] = [...arrayOption3]
                    option3[0] == '' ? option3.shift() : option3
                    const option4 : string[] = [...arrayOption4]
                    option4[0] == '' ? option4.shift() : option4
                    formSelectModel = true
                    if(modeloVeiculo){
                        let arrayOption5 : any =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')))
                        let option4 : string[] = [...arrayOption5]
                        option4[0] == '' ? option4.shift() : option4
                        let number2 = option3.indexOf(modeloVeiculo)
                        let veiculo2 = option4[number2]
                        await page.waitForSelector('#selectAnoModelomoto')
                        await page.select('select#selectAnoModelomoto', veiculo2!)
                        formSelectAnoCar = true
                        let arrayOption6 : string[] =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML))
                        let arrayOption7 : any =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')))
                        let option5  : string[]= [...arrayOption6]
                        let option6 : string[] = [...arrayOption7]
                        option5[0] == '' ? option5.shift() : option5
                        option6[0] == '' ? option6.shift() : option6
                        await browser.close();
                        response.render('qualValorVeiculo/vehicle_model', {
                            option,
                            formSelect: true,
                            option2: option3,
                            option3: option5,
                            formSelectModel,
                            formSelectAnoCar,
                            moto: true,
                            mostrarBotao,
                            marcaVeiculo,
                            modeloVeiculo
                        })
                    }
                }
            }
        })()
    }
}
export const year = (req: Request, response: Response) => {
    let url = "https://veiculos.fipe.org.br/"
    let formSelect = false
    let mostrarBotao = false
    let formSelectModel = false
    let formSelectAnoCar = false

    let dados = req.body.vehicle
    let marcaVeiculo = req.body.vehicle_brand
    let modeloVeiculo = req.body.vehicle_model
    let anoVeiculo = req.body.year_model

    console.log(dados, marcaVeiculo, modeloVeiculo, anoVeiculo)
    if(dados) {
        ;(async () => {
           
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            await page.goto(url,{ timeout: 0});
            
            await page.waitForSelector('[data-slug="carro"]')
            if(dados == 'Consulta de Carros e utilitários pequenos') {
                await page.click('[data-label="carro"]')
                await page.waitForSelector('#selectMarcacarro')
                let arrayOption : string[] =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.innerHTML))
                let arrayOption2 : any =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.getAttribute('value')))
                const option : string[]= [...arrayOption]
                const option2  : string[]= [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true
                
                if(marcaVeiculo)  {
                    let number = option.indexOf(marcaVeiculo)
                    let veiculo = option2[number]
                    await page.waitForSelector('.input')
                    await page.waitForSelector('#selectMarcacarro')
                    await page.select('select#selectMarcacarro', veiculo!)
                    let arrayOption3 : string[] =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.innerHTML))
                    let arrayOption4 : any =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                    const option3 : string[] = [...arrayOption3]
                    option3[0] == '' ? option3.shift() : option3
                    const option4 : string[] = [...arrayOption4]
                    option4[0] == '' ? option4.shift() : option4
                    formSelectModel = true

                    if(modeloVeiculo){
                        let arrayOption5 : any =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                        let option4 : string[]= [...arrayOption5]
                        option4[0] == '' ? option4.shift() : option4
                        let number2 = option3.indexOf(modeloVeiculo)
                        let veiculo2 = option4[number2]
                        await page.waitForSelector('#selectAnoModelocarro')
                        await page.select('select#selectAnoModelocarro', veiculo2!)
                        formSelectAnoCar = true
                        let arrayOption6 : string[] =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
                        let arrayOption7 : any =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
                        let option5 : string[] = [...arrayOption6]
                        let option6 : string[] = [...arrayOption7]
                        option5[0] == '' ? option5.shift() : option5
                        option6[0] == '' ? option6.shift() : option6
                        if(anoVeiculo){
                            let arrayOption6 : string[] =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
                            let arrayOption7 : any =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
                            option5 = [...arrayOption6]
                            const option6 : string[] = [...arrayOption7]
                            option5[0] == '' ? option5.shift() : option5
                            option6[0] == '' ? option6.shift() : option6
                            let number2 = option5.indexOf(anoVeiculo)
                            let veiculo3 = option6[number2]
                            await page.waitForSelector('#selectAnocarro')
                            await page.select('select#selectAnocarro', veiculo3!)
                            await page.click('#buttonPesquisarcarro')
                            await page.waitForSelector('#resultadoConsultacarroFiltros .last')
                            let arrayValues: string[] =  await page.$$eval('#resultadoConsultacarroFiltros tbody td p', item => item.map(opt => opt.innerHTML))
                            let anoModelo1 = arrayValues[9]
                            let anoModeloArray = anoModelo1.split(' ')[0]
                            let anoModelo = anoModeloArray
                            await browser.close();
                            response.render('qualValorVeiculo/year_model', {
                                option,
                                formSelect: true,
                                option2: option3,
                                option3: option5,
                                formSelectModel,
                                carro: true,
                                formSelectAnoCar,
                                mostrarBotao,
                                marcaVeiculo,
                                modeloVeiculo,
                                anoVeiculo,
                                mesReferencia: arrayValues[1],
                                codigoFipe: arrayValues[3],
                                marca: arrayValues[5],
                                modelo : arrayValues[7],
                                anoModelo: anoModeloArray,
                                autenficacao: arrayValues[11],
                                dataConsulta : arrayValues[13],
                                precoMedio : arrayValues[15]
                            })
                        }
                        
                    }
                }
            }
            if(dados == 'Consulta de Caminhões e Micro-Ônibus') {
                await page.click('[data-label="caminhao"]')
                await page.waitForSelector('#selectMarcacaminhao')
                let arrayOption : string[] =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.innerHTML))
                let arrayOption2  : any =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.getAttribute('value')))
                const option : string[] = [...arrayOption]
                const option2 : string[] = [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true
    
                if(marcaVeiculo)  {
                    let number = option.indexOf(marcaVeiculo)
                    let veiculo = option2[number]
                    await page.waitForSelector('.input')
                    await page.waitForSelector('#selectMarcacaminhao')
                    await page.select('select#selectMarcacaminhao', veiculo!)
                    let arrayOption3  : string[] =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.innerHTML))
                    let arrayOption4  : any =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                    const option3 : string[] = [...arrayOption3]
                    option3[0] == '' ? option3.shift() : option3
                    const option4 : string[] = [...arrayOption4]
                    option4[0] == '' ? option4.shift() : option4
                    formSelectModel = true
                    if(modeloVeiculo){
                        let arrayOption5 : any =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                        let option4 : string[] = [...arrayOption5]
                        option4[0] == '' ? option4.shift() : option4
                        let number2 = option3.indexOf(modeloVeiculo)
                        let veiculo2 = option4[number2]
                        await page.waitForSelector('#selectAnoModelocaminhao')
                        await page.select('select#selectAnoModelocaminhao', veiculo2!)
                        formSelectAnoCar = true
                        let arrayOption6 : string[] =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML))
                        let arrayOption7 : any =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                        let option5 : string[] = [...arrayOption6]
                        let option6 : string[] = [...arrayOption7]
                        option5[0] == '' ? option5.shift() : option5
                        option6[0] == '' ? option6.shift() : option6
                        if(anoVeiculo){
                            let arrayOption6 : string[] =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML))
                            let arrayOption7 : any =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                            option5 = [...arrayOption6]
                            const option6 : string[] = [...arrayOption7]
                            option5[0] == '' ? option5.shift() : option5
                            option6[0] == '' ? option6.shift() : option6
                            let number2 = option5.indexOf(anoVeiculo)
                            let veiculo3 = option6[number2]
                            await page.waitForSelector('#selectAnocaminhao')
                            await page.select('select#selectAnocaminhao', veiculo3!)
                            await page.click('#buttonPesquisarcaminhao')
                            await page.waitForSelector('#resultadoConsultacaminhaoFiltros .last')
                            let arrayValues =  await page.$$eval('#resultadoConsultacaminhaoFiltros tbody td p', item => item.map(opt => opt.innerHTML))
                            let anoModelo1 = arrayValues[9]
                            let anoModeloArray = anoModelo1.split(' ')[0]
                            let anoModelo = anoModeloArray
                            await browser.close();
                            response.render('qualValorVeiculo/year_model', {
                                option,
                                formSelect: true,
                                option2: option3,
                                option3: option5,
                                caminhao: true,
                                formSelectModel,
                                formSelectAnoCar,
                                mostrarBotao,
                                marcaVeiculo,
                                modeloVeiculo,
                                anoVeiculo,
                                mesReferencia: arrayValues[1],
                                codigoFipe: arrayValues[3],
                                marca: arrayValues[5],
                                modelo : arrayValues[7],
                                anoModelo: anoModeloArray,
                                autenficacao: arrayValues[11],
                                dataConsulta : arrayValues[13],
                                precoMedio : arrayValues[15]
                            })
                        }
                    }
                }
            }
            if(dados == 'Consulta de motos') {
                await page.click('[data-label="moto"]')
                await page.waitForSelector('#selectMarcamoto')
                let arrayOption : string[] =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.innerHTML))
                let arrayOption2 : any =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.getAttribute('value')))
                const option : string[] = [...arrayOption]
                const option2 : string[] = [...arrayOption2]
                option[0] == '' ? option.shift() : option
                option2[0] == '' ? option2.shift() : option2
                mostrarBotao = true
    
                if(marcaVeiculo)  {
                    let number = option.indexOf(marcaVeiculo)
                    let veiculo = option2[number]
                    await page.waitForSelector('.input')
                    await page.waitForSelector('#selectMarcamoto')
                    await page.select('select#selectMarcamoto', veiculo!)
                    let arrayOption3 : string[] =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.innerHTML))
                    let arrayOption4 : any =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')))
                    const option3 : string[] = [...arrayOption3]
                    option3[0] == '' ? option3.shift() : option3
                    const option4 : string[] = [...arrayOption4]
                    option4[0] == '' ? option4.shift() : option4
                    formSelectModel = true
                    if(modeloVeiculo){
                        let arrayOption5 : any =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')))
                        let option4 : string[] = [...arrayOption5]
                        option4[0] == '' ? option4.shift() : option4
                        let number2 = option3.indexOf(modeloVeiculo)
                        let veiculo2 = option4[number2]
                        await page.waitForSelector('#selectAnoModelomoto')
                        await page.select('select#selectAnoModelomoto', veiculo2!)
                        formSelectAnoCar = true
                        let arrayOption6 : string[] =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML))
                        let arrayOption7 : any =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')))
                        let option5 : string[]= [...arrayOption6]
                        let option6 : string[] = [...arrayOption7]
                        option5[0] == '' ? option5.shift() : option5
                        option6[0] == '' ? option6.shift() : option6
                        if(anoVeiculo){
                            let arrayOption6 : string[] =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML))
                            let arrayOption7 : any =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')))
                            option5 = [...arrayOption6]
                            const option6 : string[] = [...arrayOption7]
                            option5[0] == '' ? option5.shift() : option5
                            option6[0] == '' ? option6.shift() : option6
            
                            let number2 = option5.indexOf(anoVeiculo)
                            let veiculo3 = option6[number2]
                            await page.waitForSelector('#selectAnomoto')
                            await page.select('select#selectAnomoto', veiculo3!)
                            await page.click('#buttonPesquisarmoto')
                            await page.waitForSelector('#resultadoConsultamotoFiltros .last')
                            let arrayValues =  await page.$$eval('#resultadoConsultamotoFiltros tbody td p', item => item.map(opt => opt.innerHTML))
                            let anoModelo1 = arrayValues[9]
                            let anoModeloArray = anoModelo1.split(' ')[0]
                            let anoModelo = anoModeloArray
                            await browser.close();
                            response.render('qualValorVeiculo/year_model', {
                                option,
                                formSelect: true,
                                option2: option3,
                                option3: option5,
                                moto: true,
                                formSelectModel,
                                formSelectAnoCar,
                                mostrarBotao,
                                marcaVeiculo,
                                modeloVeiculo,
                                anoVeiculo,
                                mesReferencia: arrayValues[1],
                                codigoFipe: arrayValues[3],
                                marca: arrayValues[5],
                                modelo : arrayValues[7],
                                anoModelo: anoModeloArray,
                                autenficacao: arrayValues[11],
                                dataConsulta : arrayValues[13],
                                precoMedio : arrayValues[15]
                            })
                        }
                    }
                }
            }
        })()
    }
}
export const searchVeiculos = (req: Request, response: Response) => {
    let url = "https://veiculos.fipe.org.br/"
    let option: string[]  = ['']
    let option3: string[]  = ['']
    let option5: string[]  = ['']
    // const list : string[] = ['']    
    // let option6: string[]  = ['']
    let formSelectModel = false
    let formSelectAnoCar = false
    let mostrarBotao = false
    let anunciosSelects = false
    let anunciosSelectsIcarros = false

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
    console.log(dados)
    if(dados) {
     ;(async () => {
        const list = []
        const listIcarros = []
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto(url,{ timeout: 0});
        
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
            mostrarBotao = true
            
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
                formSelect: true,
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
                precoMedio
            })
            
            
        }

        if(dados == 'Consulta de Caminhões e Micro-Ônibus') {
            await page.click('[data-label="caminhao"]')
            await page.waitForSelector('#selectMarcacaminhao')
            let arrayOption =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.innerHTML))
            let arrayOption2 =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.getAttribute('value')))
            const option = [...arrayOption]
            const option2 = [...arrayOption2]
            option[0] == '' ? option.shift() : option
            option2[0] == '' ? option2.shift() : option2
            mostrarBotao = true

            if(marcaVeiculo)  {
               
                let number = option.indexOf(marcaVeiculo)
                let veiculo = option2[number]
               
                await page.waitForSelector('.input')
                await page.waitForSelector('#selectMarcacaminhao')
                
                await page.select('select#selectMarcacaminhao', veiculo!)
                let arrayOption3 =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.innerHTML))
                let arrayOption4 =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                option3 = [...arrayOption3]
                option3[0] == '' ? option3.shift() : option3
                const option4 = [...arrayOption4]
                option4[0] == '' ? option4.shift() : option4

                formSelectModel = true
                
            }
            if(modeloVeiculo){

                let arrayOption5 =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                let option4 = [...arrayOption5]
                option4[0] == '' ? option4.shift() : option4
                let number2 = option3.indexOf(modeloVeiculo)
                let veiculo2 = option4[number2]
            
                await page.waitForSelector('#selectAnoModelocaminhao')
                await page.select('select#selectAnoModelocaminhao', veiculo2!)
                formSelectAnoCar = true

                let arrayOption6 =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                option5 = [...arrayOption6]
                let option6 = [...arrayOption7]
                option5[0] == '' ? option5.shift() : option5
                option6[0] == '' ? option6.shift() : option6
            }
            if(anoVeiculo){
                let arrayOption6 =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                option5 = [...arrayOption6]
                const option6 = [...arrayOption7]
                option5[0] == '' ? option5.shift() : option5
                option6[0] == '' ? option6.shift() : option6

                let number2 = option5.indexOf(anoVeiculo)
                let veiculo3 = option6[number2]
                await page.waitForSelector('#selectAnocaminhao')
                await page.select('select#selectAnocaminhao', veiculo3!)

                await page.click('#buttonPesquisarcaminhao')

                await page.waitForSelector('#resultadoConsultacaminhaoFiltros .last')

                let arrayValues =  await page.$$eval('#resultadoConsultacaminhaoFiltros tbody td p', item => item.map(opt => opt.innerHTML))

                mesReferencia = arrayValues[1]
                codigoFipe = arrayValues[3]
                marca = arrayValues[5]
                modelo = arrayValues[7]
                anoModelo = arrayValues[9]
                autenficacao = arrayValues[11]
                dataConsulta = arrayValues[13]
                precoMedio = arrayValues[15]

                // await page.goto(google,{ timeout: 0});
                // await page.waitForSelector('.gLFyf')
                // await page.type('.gLFyf.gsfi', `comprar ${modelo} ${anoModelo}`)
                // await page.keyboard.press('Enter')
                // await page.waitForSelector('.yuRUbf')
        
                // let links2 =  await page.$$eval('.yuRUbf a', item => item.map((link: any) => { return link.href }))
                
                // for(const item of links2 ){
                //     let x = 1
                //     if(item.indexOf('lista.mercadolivre.com.br') > -1 ){
                //         if(x === 2) continue
                //         await page.goto(item,{ timeout: 0})
                //         await page.waitForSelector('.ui-search-result__image')
                //         let linksML = await page.$$eval('.ui-search-result__image a', item => item.map((link: any) => { return link.href }))
                //         let i = 1
                //         for (let link of linksML) {
                //             if(i === 6) continue
                //             await page.goto(link,{ timeout: 0})
                //             let imgML = await page.$$eval('.ui-pdp-gallery__figure__image',  item => item.map((link: any) => { return link.src }))
                //             let titleML = await page.$eval('.ui-pdp-title', (item: any) => item.innerText)
                //             let anoEKmVeiculo = await page.$eval('.ui-pdp-subtitle', (item: any) => item.innerText)
                //             let precoVeiculow = await page.$eval('.andes-money-amount__fraction', (item: any) => item.innerText)
                //             const objML = {
                //                 title : titleML,
                //                 img: imgML[0],
                //                 anoEKmVeiculo,
                //                 precoVeiculow,
                //                 link
                //             }
                //             list.push(objML)
                //             if(list.length > 0){
                //                 anunciosSelects = true
                //             }
                //             i++
                //         }
                        
                //     }
                //     if(item.indexOf('icarros.com.br') > -1 ){
                //         await page.goto(item,{ timeout: 0})
                //         await page.waitForSelector('.col-xs-6.col-md-4').then(()=>{

                //         }).catch(e => {
                //             e.continue
                //         })
                       
                //         let linksIc = await page.$$eval('.col-xs-6.col-md-4 a', item => item.map((link: any) => { return link.href }))
                        
                //         // let linksParaImg = await page.$$eval('.sc-gzOgki.jwzpnh a', item => item.map((link: any) => { return link }))
                //         console.log(linksIc)
                //         let i = 1
                //         for (let link of linksIc) {
                //             if(i === 4) continue
                //             await page.goto(link,{ timeout: 0})
                //             let imgIc = await page.$eval('.swiper-slide.swiper-slide-active img',  (item: any)=>  item.src)
                //             let titleIc = await page.$eval('.titulo-sm',  (item: any) =>  item.innerText)
                //             let precoIc = await page.$eval('.preco',  (item: any) =>  item.innerText)
                //             let anoIc = await page.$eval('.listahorizontal .primeiro .destaque',  (item: any) =>  item.innerText)
                //             let kmIcarros = await page.$$eval('.card-informacoes-basicas .card-conteudo .listahorizontal li .destaque',  item =>  item.map((item: any) =>  item.innerText ))
                //             console.log(kmIcarros)
                //             let kmIc = kmIcarros[1]
                //             const objIC = {
                //                 title : titleIc,
                //                 img: imgIc,
                //                 anoEKmVeiculo: `Ano: ${anoIc}  Km: ${kmIc}`,
                //                 precoVeiculow: precoIc ,
                //                 link
                //             }
                //             listIcarros.push(objIC)
                //             if(listIcarros.length > 0){
                //                 anunciosSelectsIcarros = true
                //             }
                            
                //             i++
                //         }
                        
                       
                //     }
                // }

                // console.log(list)
                // console.log(listIcarros)
                // console.log(links2)
            }
            

            await browser.close();
            response.render('qualValorVeiculo/home', {
                formSelect: true,
                caminhao: true,
                option,
                option2: option3,
                option3: option5,
                formSelectModel,
                formSelectAnoCar,
                mostrarBotao,
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
                precoMedio
            }
        )}

        if(dados == 'Consulta de motos') {
            await page.click('[data-label="moto"]')
            await page.waitForSelector('#selectMarcamoto')
            let arrayOption =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.innerHTML))
            let arrayOption2 =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.getAttribute('value')))
            const option = [...arrayOption]
            const option2 = [...arrayOption2]
            option[0] == '' ? option.shift() : option
            option2[0] == '' ? option2.shift() : option2
            mostrarBotao = true

            if(marcaVeiculo)  {
               
                let number = option.indexOf(marcaVeiculo)
                let veiculo = option2[number]
               
                await page.waitForSelector('.input')
                await page.waitForSelector('#selectMarcamoto')
                
                await page.select('select#selectMarcamoto', veiculo!)
                let arrayOption3 =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.innerHTML))
                let arrayOption4 =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')))
                option3 = [...arrayOption3]
                option3[0] == '' ? option3.shift() : option3
                const option4 = [...arrayOption4]
                option4[0] == '' ? option4.shift() : option4

                formSelectModel = true
                
            }
            if(modeloVeiculo){

                let arrayOption5 =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')))
                let option4 = [...arrayOption5]
                option4[0] == '' ? option4.shift() : option4
                let number2 = option3.indexOf(modeloVeiculo)
                let veiculo2 = option4[number2]
            
                await page.waitForSelector('#selectAnoModelomoto')
                await page.select('select#selectAnoModelomoto', veiculo2!)
                formSelectAnoCar = true

                let arrayOption6 =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')))
                option5 = [...arrayOption6]
                let option6 = [...arrayOption7]
                option5[0] == '' ? option5.shift() : option5
                option6[0] == '' ? option6.shift() : option6
            }
        
            if(anoVeiculo){
                let arrayOption6 =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')))
                option5 = [...arrayOption6]
                const option6 = [...arrayOption7]
                option5[0] == '' ? option5.shift() : option5
                option6[0] == '' ? option6.shift() : option6

                let number2 = option5.indexOf(anoVeiculo)
                let veiculo3 = option6[number2]
                await page.waitForSelector('#selectAnomoto')
                await page.select('select#selectAnomoto', veiculo3!)

                await page.click('#buttonPesquisarmoto')

                await page.waitForSelector('#resultadoConsultamotoFiltros .last')

                let arrayValues =  await page.$$eval('#resultadoConsultamotoFiltros tbody td p', item => item.map(opt => opt.innerHTML))

                mesReferencia = arrayValues[1]
                codigoFipe = arrayValues[3]
                marca = arrayValues[5]
                modelo = arrayValues[7]
                anoModelo = arrayValues[9]
                autenficacao = arrayValues[11]
                dataConsulta = arrayValues[13]
                precoMedio = arrayValues[15]

            }

            await browser.close();
            response.render('qualValorVeiculo/home', {
                option,
                formSelect: true,
                moto: true,
                option2: option3,
                option3: option5,
                formSelectModel,
                formSelectAnoCar,
                mostrarBotao,
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
                precoMedio
            }
        )}
        
      })();
    }
}

export const searchApi = (req: Request, response: Response) => {
    let url = "https://veiculos.fipe.org.br/"
    
    let marcadoVeiculo: string[]  = ['']
    let option3: string[]  = ['']
    let anoDoVeiculo: string[]  = ['']
    
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

    const list : string[]  = ['']
    

    console.log(dados)
    if(dados) {
     ;(async () => {
        const list = []
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto(url,{ timeout: 0});
        
        await page.waitForSelector('[data-slug="carro"]')
        if(dados === 'Consulta de Carros e utilitários pequenos') {
            await page.click('[data-label="carro"]')
            await page.waitForSelector('#selectMarcacarro')
            const arrayOption =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.innerHTML))
            const arrayOption2 =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.getAttribute('value')))
            const marcadoVeiculo = [...arrayOption]
            const modelodoVeiculo = [...arrayOption2]
            marcadoVeiculo[0] == '' ? marcadoVeiculo.shift() : marcadoVeiculo
            modelodoVeiculo[0] == '' ? modelodoVeiculo.shift() : modelodoVeiculo
            
            
            if(marcaVeiculo)  {
                
                        
                console.log(marcaVeiculo)
                    
                const number = marcadoVeiculo.indexOf(marcaVeiculo)
                
                if(number === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                    
                } 
                    let veiculo = modelodoVeiculo[number]
                
                    await page.waitForSelector('.input')
                    await page.waitForSelector('#selectMarcacarro')
                    
                    await page.select('select#selectMarcacarro', veiculo!)
                    let arrayOption3 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.innerHTML))
                    let arrayOption4 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                    option3 = [...arrayOption3]
                    option3[0] == '' ? option3.shift() : option3
                    const option4 = [...arrayOption4]
                    option4[0] == '' ? option4.shift() : option4
                
                
            }
            if(modeloVeiculo){
                console.log(modeloVeiculo)
                let arrayOption5 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                let option4 = [...arrayOption5]
                option4[0] == '' ? option4.shift() : option4
                let number2 = option3.indexOf(modeloVeiculo)
                if(number2 === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                } else {
                    let veiculo2 = option4[number2]
                
                    await page.waitForSelector('#selectAnoModelocarro')
                    await page.select('select#selectAnoModelocarro', veiculo2!)

                    let arrayOption6 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
                    let arrayOption7 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
                    anoDoVeiculo = [...arrayOption6]
                    let option6 = [...arrayOption7]
                    anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo
                    option6[0] == '' ? option6.shift() : option6
                }
            }
            
            if(anoVeiculo){
                console.log(anoVeiculo)
                let arrayOption6 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
                anoDoVeiculo = [...arrayOption6]
                const option6 = [...arrayOption7]
                anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo
                option6[0] == '' ? option6.shift() : option6

                let number2 = anoDoVeiculo.indexOf(anoVeiculo)
                if(number2 === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                } else {
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
                    autenficacao = arrayValues[11]
                    dataConsulta = arrayValues[13]
                    precoMedio = arrayValues[15]

                }    
            }
            await browser.close();
            response.status(200).json({
                marcadoVeiculo,
                modelodoVeiculo: option3,
                anoDoVeiculo,
                mesReferencia,
                codigoFipe,
                marca,
                modelo,
                anoModelo,
                autenficacao,
                dataConsulta,
                precoMedio
            })
            
            
        } else if (dados === 'Consulta de Caminhões e Micro-Ônibus') {
            await page.click('[data-label="caminhao"]')
            await page.waitForSelector('#selectMarcacaminhao')
            let arrayOption =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.innerHTML))
            let arrayOption2 =  await page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.getAttribute('value')))
            const marcadoVeiculo = [...arrayOption]
            const option2 = [...arrayOption2]
            marcadoVeiculo[0] == '' ? marcadoVeiculo.shift() : marcadoVeiculo
            option2[0] == '' ? option2.shift() : option2
            

            if(marcaVeiculo)  {
               
                let number = marcadoVeiculo.indexOf(marcaVeiculo)
                if(number === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                }
                let veiculo = option2[number]
               
                await page.waitForSelector('.input')
                await page.waitForSelector('#selectMarcacaminhao')
                
                await page.select('select#selectMarcacaminhao', veiculo!)
                let arrayOption3 =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.innerHTML))
                let arrayOption4 =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                option3 = [...arrayOption3]
                option3[0] == '' ? option3.shift() : option3
                const option4 = [...arrayOption4]
                option4[0] == '' ? option4.shift() : option4

                
            }
            if(modeloVeiculo){

                let arrayOption5 =  await page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                let option4 = [...arrayOption5]
                option4[0] == '' ? option4.shift() : option4
                let number2 = option3.indexOf(modeloVeiculo)
                if(number2 === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                }
                let veiculo2 = option4[number2]
            
                await page.waitForSelector('#selectAnoModelocaminhao')
                await page.select('select#selectAnoModelocaminhao', veiculo2!)
               

                let arrayOption6 =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                anoDoVeiculo = [...arrayOption6]
                let option6 = [...arrayOption7]
                anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo
                option6[0] == '' ? option6.shift() : option6
            }
            if(anoVeiculo){
                let arrayOption6 =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')))
                anoDoVeiculo = [...arrayOption6]
                const option6 = [...arrayOption7]
                anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo
                option6[0] == '' ? option6.shift() : option6

                let number2 = anoDoVeiculo.indexOf(anoVeiculo)
                if(number2 === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                }
                let veiculo3 = option6[number2]
                await page.waitForSelector('#selectAnocaminhao')
                await page.select('select#selectAnocaminhao', veiculo3!)

                await page.click('#buttonPesquisarcaminhao')

                await page.waitForSelector('#resultadoConsultacaminhaoFiltros .last')

                let arrayValues =  await page.$$eval('#resultadoConsultacaminhaoFiltros tbody td p', item => item.map(opt => opt.innerHTML))

                mesReferencia = arrayValues[1]
                codigoFipe = arrayValues[3]
                marca = arrayValues[5]
                modelo = arrayValues[7]
                anoModelo = arrayValues[9]
                autenficacao = arrayValues[11]
                dataConsulta = arrayValues[13]
                precoMedio = arrayValues[15]

            }
            
            await browser.close();
            response.status(200).json({
                marcadoVeiculo,
                modelodoVeiculo: option3,
                anoDoVeiculo,
                mesReferencia,
                codigoFipe,
                marca,
                modelo,
                anoModelo,
                autenficacao,
                dataConsulta,
                precoMedio
            }
        )} else if (dados === 'Consulta de motos') {
            await page.click('[data-label="moto"]')
            await page.waitForSelector('#selectMarcamoto')
            let arrayOption =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.innerHTML))
            let arrayOption2 =  await page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.getAttribute('value')))
            const marcadoVeiculo = [...arrayOption]
            const option2 = [...arrayOption2]
            marcadoVeiculo[0] == '' ? marcadoVeiculo.shift() : marcadoVeiculo
            option2[0] == '' ? option2.shift() : option2
            

            if(marcaVeiculo)  {
               
                let number = marcadoVeiculo.indexOf(marcaVeiculo)
                if(number === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                }
                let veiculo = option2[number]
               
                await page.waitForSelector('.input')
                await page.waitForSelector('#selectMarcamoto')
                
                await page.select('select#selectMarcamoto', veiculo!)
                let arrayOption3 =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.innerHTML))
                let arrayOption4 =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')))
                option3 = [...arrayOption3]
                option3[0] == '' ? option3.shift() : option3
                const option4 = [...arrayOption4]
                option4[0] == '' ? option4.shift() : option4

                
            }
            if(modeloVeiculo){

                let arrayOption5 =  await page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')))
                let option4 = [...arrayOption5]
                option4[0] == '' ? option4.shift() : option4
                let number2 = option3.indexOf(modeloVeiculo)
                if(number2 === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                }
                let veiculo2 = option4[number2]
            
                await page.waitForSelector('#selectAnoModelomoto')
                await page.select('select#selectAnoModelomoto', veiculo2!)
             

                let arrayOption6 =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')))
                anoDoVeiculo = [...arrayOption6]
                let option6 = [...arrayOption7]
                anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo
                option6[0] == '' ? option6.shift() : option6
            }
        
            if(anoVeiculo){
                let arrayOption6 =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')))
                anoDoVeiculo = [...arrayOption6]
                const option6 = [...arrayOption7]
                anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo
                option6[0] == '' ? option6.shift() : option6

                let number2 = anoDoVeiculo.indexOf(anoVeiculo)
                if(number2 === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                }
                let veiculo3 = option6[number2]
                await page.waitForSelector('#selectAnomoto')
                await page.select('select#selectAnomoto', veiculo3!)

                await page.click('#buttonPesquisarmoto')

                await page.waitForSelector('#resultadoConsultamotoFiltros .last')

                let arrayValues =  await page.$$eval('#resultadoConsultamotoFiltros tbody td p', item => item.map(opt => opt.innerHTML))

                mesReferencia = arrayValues[1]
                codigoFipe = arrayValues[3]
                marca = arrayValues[5]
                modelo = arrayValues[7]
                anoModelo = arrayValues[9]
                autenficacao = arrayValues[11]
                dataConsulta = arrayValues[13]
                precoMedio = arrayValues[15]

            }

            await browser.close();
            response.status(200).json({
                marcadoVeiculo,
                modelodoVeiculo: option3,
                anoDoVeiculo,
                mesReferencia,
                codigoFipe,
                marca,
                modelo,
                anoModelo,
                autenficacao,
                dataConsulta,
                precoMedio
            }
        )} else {
            response.status(500).json({error: "Dados invalidos"})
        }
      })();
    } else {
        response.status(500).json({error: "Dados invalidos"})
    }    

}

// export const carApi = (req: Request, response: Response) => {
//     let url = "https://veiculos.fipe.org.br/"
    
//     let option3: string[]  = ['']
//     let option5: string[]  = ['']
    
//     let formSelect = false
//     let formSelectModel = false
//     let formSelectAnoCar = false
//     let mostrarBotao = false
//     let anunciosSelects = false
    
//     let dados = req.body.select
//     let marcaVeiculo = req.body.select1
//     let modeloVeiculo = req.body.select2
//     let anoVeiculo = req.body.select3

//     let mesReferencia = ''
//     let codigoFipe = ''
//     let marca = ''
//     let modelo = ''
//     let anoModelo = ''
//     let autenficacao = ''
//     let dataConsulta = ''
//     let precoMedio = ''
//     console.log(req.body)
//     if(dados) {
//         console.log('entrou dados')
//         const list:any  = []
//         const listIcarros:any = []
//      ;(async () => {
//         const browser = await puppeteer.launch({headless: true});
        
//         const page = await browser.newPage();
//         await page.goto(url, { timeout: 0} ); //{ timeout: 0}
        
//         await page.waitForSelector('[data-slug="carro"]')
//         if(dados == 'Consulta de Carros e utilitários pequenos') {
//             await page.click('[data-label="carro"]')
//             await page.waitForSelector('#selectMarcacarro')
//             let arrayOption =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.innerHTML))
//             let arrayOption2 =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.getAttribute('value')))
//             const option = [...arrayOption]
//             const option2 = [...arrayOption2]
//             option[0] == '' ? option.shift() : option
//             option2[0] == '' ? option2.shift() : option2
//             console.log(option)
//             mostrarBotao = true
//             formSelect = true
            
//             if(marcaVeiculo)  {
               
//                 let number = option.indexOf(marcaVeiculo)
//                 let veiculo = option2[number]
               
//                 await page.waitForSelector('.input')
//                 await page.waitForSelector('#selectMarcacarro')
                
//                 await page.select('select#selectMarcacarro', veiculo!)
//                 let arrayOption3 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.innerHTML))
//                 let arrayOption4 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
//                 option3 = [...arrayOption3]
//                 option3[0] == '' ? option3.shift() : option3
//                 const option4 = [...arrayOption4]
//                 option4[0] == '' ? option4.shift() : option4

//                 formSelectModel = true
                
//             }
//             if(modeloVeiculo){

//                 let arrayOption5 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
//                 let option4 = [...arrayOption5]
//                 option4[0] == '' ? option4.shift() : option4
//                 let number2 = option3.indexOf(modeloVeiculo)
//                 let veiculo2 = option4[number2]
            
//                 await page.waitForSelector('#selectAnoModelocarro')
//                 await page.select('select#selectAnoModelocarro', veiculo2!)
//                 formSelectAnoCar = true

//                 let arrayOption6 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
//                 let arrayOption7 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
//                 option5 = [...arrayOption6]
//                 let option6 = [...arrayOption7]
//                 option5[0] == '' ? option5.shift() : option5
//                 option6[0] == '' ? option6.shift() : option6
//             }
            
//             if(anoVeiculo){
//                 let arrayOption6 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
//                 let arrayOption7 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
//                 option5 = [...arrayOption6]
//                 const option6 = [...arrayOption7]
//                 option5[0] == '' ? option5.shift() : option5
//                 option6[0] == '' ? option6.shift() : option6

//                 let number2 = option5.indexOf(anoVeiculo)
//                 let veiculo3 = option6[number2]
//                 await page.waitForSelector('#selectAnocarro')
//                 await page.select('select#selectAnocarro', veiculo3!)

//                 await page.click('#buttonPesquisarcarro')

//                 await page.waitForSelector('#resultadoConsultacarroFiltros .last')

//                 let arrayValues =  await page.$$eval('#resultadoConsultacarroFiltros tbody td p', item => item.map(opt => opt.innerHTML))

//                 mesReferencia = arrayValues[1]
//                 codigoFipe = arrayValues[3]
//                 marca = arrayValues[5]
//                 modelo = arrayValues[7]
//                 let anoModelo1 = arrayValues[9]
//                 let anoModeloArray = anoModelo1.split(' ')[0]
//                 anoModelo = anoModeloArray
//                 console.log(anoModelo)
//                 autenficacao = arrayValues[11]
//                 dataConsulta = arrayValues[13]
//                 precoMedio = arrayValues[15]

//             }    
        
//             await browser.close();
//             response.status(200).json({
//                 marcadoVeiculo,
//                 modelodoVeiculo: option3,
//                 anoDoVeiculo,
//                 mesReferencia,
//                 codigoFipe,
//                 marca,
//                 modelo,
//                 anoModelo,
//                 autenficacao,
//                 dataConsulta,
//                 precoMedio,
//                 anunciosML : list,
//                 anunciosIcarros: listIcarros,
//             })
//         }
//         })()
//     } 
// }

export const procuraCar = (req: Request, response: Response) => {
    console.log('teste')
    let url = "https://veiculos.fipe.org.br/"
    let google = "https://www.google.com.br/"
    let marcadoVeiculo: string[]  = ['']
    let option3: string[]  = ['']
    let anoDoVeiculo: string[]  = ['']
    
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

    const list : string[]  = ['']
    const anunciosML : string[]  = ['']
    const listIcarros : string[]  = ['']

    console.log(req.body)
    if(dados) {
        console.log('entrou')
     ;(async () => {
        const list = []
        const anunciosML = []
        const anunciosIcarros = []
        const listIcarros: any  = ['']
        let pup = puppeteer

        const browser = await pup.launch({headless: false});
        console.log('teste1')
        const page = await browser.newPage();
        await page.goto(url,{ timeout: 0});
        console.log('teste2')
        await page.waitForSelector('[data-slug="carro"]')
        if(dados === 'Consulta de Carros e utilitários pequenos') {
            await page.click('[data-label="carro"]')
            await page.waitForSelector('#selectMarcacarro')
            const arrayOption =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.innerHTML))
            const arrayOption2 =  await page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.getAttribute('value')))
            const marcadoVeiculo = [...arrayOption]
            const modelodoVeiculo = [...arrayOption2]
            marcadoVeiculo[0] == '' ? marcadoVeiculo.shift() : marcadoVeiculo
            modelodoVeiculo[0] == '' ? modelodoVeiculo.shift() : modelodoVeiculo
            
            if(marcaVeiculo)  {
                console.log(marcaVeiculo)
                const number = marcadoVeiculo.indexOf(marcaVeiculo)
                if(number === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                    
                } 
                let veiculo = modelodoVeiculo[number]
                await page.waitForSelector('.input')
                await page.waitForSelector('#selectMarcacarro')
                await page.select('select#selectMarcacarro', veiculo!)
                let arrayOption3 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.innerHTML))
                let arrayOption4 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                option3 = [...arrayOption3]
                option3[0] == '' ? option3.shift() : option3
                const option4 = [...arrayOption4]
                option4[0] == '' ? option4.shift() : option4
            }
            if(modeloVeiculo){
                console.log(modeloVeiculo)
                let arrayOption5 =  await page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')))
                let option4 = [...arrayOption5]
                option4[0] == '' ? option4.shift() : option4
                let number2 = option3.indexOf(modeloVeiculo)
                if(number2 === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                } else {
                    let veiculo2 = option4[number2]
                    await page.waitForSelector('#selectAnoModelocarro')
                    await page.select('select#selectAnoModelocarro', veiculo2!)
                    let arrayOption6 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
                    let arrayOption7 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
                    anoDoVeiculo = [...arrayOption6]
                    let option6 = [...arrayOption7]
                    anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo
                    option6[0] == '' ? option6.shift() : option6
                }
            }
            
            if(anoVeiculo){
                console.log(anoVeiculo)
                let arrayOption6 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML))
                let arrayOption7 =  await page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')))
                anoDoVeiculo = [...arrayOption6]
                const option6 = [...arrayOption7]
                anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo
                option6[0] == '' ? option6.shift() : option6
                let number2 = anoDoVeiculo.indexOf(anoVeiculo)
                if(number2 === -1){
                    response.status(500).json({error: "Dados invalidos - Digite corretamente"})
                } else {
                    let veiculo3 = option6[number2]
                    await page.waitForSelector('#selectAnocarro')
                    await page.select('select#selectAnocarro', veiculo3!)
                    await page.click('#buttonPesquisarcarro')
                    await page.waitForSelector('#resultadoConsultacarroFiltros .last')
                    let arrayValues =  await page.$$eval('#resultadoConsultacarroFiltros tbody td p', item => item.map(opt => opt.innerHTML))
                    let mercadoLivre = 'https://www.mercadolivre.com.br/c/carros-motos-e-outros#menu=categories'
                    mesReferencia = arrayValues[1]
                    codigoFipe = arrayValues[3]
                    marca = arrayValues[5]
                    modelo = arrayValues[7]
                    let anoModelo1 = arrayValues[9]
                    let anoModeloArray = anoModelo1.split(' ')[0]
                    anoModelo = anoModeloArray
                    autenficacao = arrayValues[11]
                    dataConsulta = arrayValues[13]
                    precoMedio = arrayValues[15]

                    await page.goto(mercadoLivre,{ timeout: 0});
                    await page.waitForSelector('.nav-search-input')
                    await page.type('.nav-search-input', `${modelo}`)
                    await page.keyboard.press('Enter')
                    await page.waitForSelector(`[aria-label="${anoModelo}"]`)
                    await page.click(`[aria-label="${anoModelo}"]`)
            
                    let links2 =  await page.$$eval('.yuRUbf a', item => item.map((link: any) => { return link.href }))

                    await page.waitForSelector('.ui-search-result__image')
                    let linksML = await page.$$eval('.ui-search-result__image a', item => item.map((link: any) => { return link.href }))
                    let i = 1
                    for (let link of linksML) {
                        
                        if(i === 10) continue
                        await page.goto(link,{ timeout: 0})
                        let imgML = await page.$$eval('.ui-pdp-gallery__figure__image',  item => item.map((link: any) => { return link.src }))
                        let titleML = await page.$eval('.ui-pdp-title', (item: any) => item.innerText)
                        let anoEKmVeiculo = await page.$eval('.ui-pdp-subtitle', (item: any) => item.innerText)
                        let precoVeiculow = await page.$eval('.andes-money-amount__fraction', (item: any) => item.innerText)
                        const objML = {
                            title : titleML,
                            img: imgML[0],
                            anoEKmVeiculo,
                            precoVeiculow,
                            link
                        }
                        list.push(objML)
                        i++
                    }

                    console.log(list)
                    console.log(listIcarros)
                    console.log(links2)
                }    
            }
            await browser.close();
            response.render('qualValorVeiculo/home', {
                marcadoVeiculo,
                modelodoVeiculo: option3,
                anoDoVeiculo,
                mesReferencia,
                codigoFipe,
                marca,
                modelo,
                anoModelo,
                autenficacao,
                dataConsulta,
                precoMedio,
                anunciosML : list,
                anunciosIcarros: listIcarros,
            })
            // response.status(200).json({
            //     marcadoVeiculo,
            //     modelodoVeiculo: option3,
            //     anoDoVeiculo,
            //     mesReferencia,
            //     codigoFipe,
            //     marca,
            //     modelo,
            //     anoModelo,
            //     autenficacao,
            //     dataConsulta,
            //     precoMedio,
            //     anunciosML : list,
            //     anunciosIcarros: listIcarros,
            // })
            
        }    
    })
    }
}