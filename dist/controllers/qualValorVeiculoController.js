"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchApi = exports.searchVeiculos = exports.home = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const home = (req, res) => {
    res.render('qualValorVeiculo/home', {});
};
exports.home = home;
const searchVeiculos = (req, response) => {
    let url = "https://veiculos.fipe.org.br/";
    let google = "https://www.google.com.br/";
    let option = [''];
    let option3 = [''];
    let option5 = [''];
    // const list : string[] = ['']    
    // let option6: string[]  = ['']
    let formSelectModel = false;
    let formSelectAnoCar = false;
    let mostrarBotao = false;
    let anunciosSelects = false;
    let anunciosSelectsIcarros = false;
    let dados = req.body.select;
    let marcaVeiculo = req.body.select1;
    let modeloVeiculo = req.body.select2;
    let anoVeiculo = req.body.select3;
    let mesReferencia = '';
    let codigoFipe = '';
    let marca = '';
    let modelo = '';
    let anoModelo = '';
    let autenficacao = '';
    let dataConsulta = '';
    let precoMedio = '';
    console.log(dados);
    if (dados) {
        ;
        (() => __awaiter(void 0, void 0, void 0, function* () {
            const list = [];
            const listIcarros = [];
            const browser = yield puppeteer_1.default.launch({ headless: true });
            const page = yield browser.newPage();
            yield page.goto(url, { timeout: 0 });
            yield page.waitForSelector('[data-slug="carro"]');
            if (dados == 'Consulta de Carros e utilitários pequenos') {
                yield page.click('[data-label="carro"]');
                yield page.waitForSelector('#selectMarcacarro');
                let arrayOption = yield page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.innerHTML));
                let arrayOption2 = yield page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.getAttribute('value')));
                const option = [...arrayOption];
                const option2 = [...arrayOption2];
                option[0] == '' ? option.shift() : option;
                option2[0] == '' ? option2.shift() : option2;
                mostrarBotao = true;
                if (marcaVeiculo) {
                    let number = option.indexOf(marcaVeiculo);
                    let veiculo = option2[number];
                    yield page.waitForSelector('.input');
                    yield page.waitForSelector('#selectMarcacarro');
                    yield page.select('select#selectMarcacarro', veiculo);
                    let arrayOption3 = yield page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.innerHTML));
                    let arrayOption4 = yield page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')));
                    option3 = [...arrayOption3];
                    option3[0] == '' ? option3.shift() : option3;
                    const option4 = [...arrayOption4];
                    option4[0] == '' ? option4.shift() : option4;
                    formSelectModel = true;
                }
                if (modeloVeiculo) {
                    let arrayOption5 = yield page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')));
                    let option4 = [...arrayOption5];
                    option4[0] == '' ? option4.shift() : option4;
                    let number2 = option3.indexOf(modeloVeiculo);
                    let veiculo2 = option4[number2];
                    yield page.waitForSelector('#selectAnoModelocarro');
                    yield page.select('select#selectAnoModelocarro', veiculo2);
                    formSelectAnoCar = true;
                    let arrayOption6 = yield page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')));
                    option5 = [...arrayOption6];
                    let option6 = [...arrayOption7];
                    option5[0] == '' ? option5.shift() : option5;
                    option6[0] == '' ? option6.shift() : option6;
                }
                if (anoVeiculo) {
                    let arrayOption6 = yield page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')));
                    option5 = [...arrayOption6];
                    const option6 = [...arrayOption7];
                    option5[0] == '' ? option5.shift() : option5;
                    option6[0] == '' ? option6.shift() : option6;
                    let number2 = option5.indexOf(anoVeiculo);
                    let veiculo3 = option6[number2];
                    yield page.waitForSelector('#selectAnocarro');
                    yield page.select('select#selectAnocarro', veiculo3);
                    yield page.click('#buttonPesquisarcarro');
                    yield page.waitForSelector('#resultadoConsultacarroFiltros .last');
                    let arrayValues = yield page.$$eval('#resultadoConsultacarroFiltros tbody td p', item => item.map(opt => opt.innerHTML));
                    mesReferencia = arrayValues[1];
                    codigoFipe = arrayValues[3];
                    marca = arrayValues[5];
                    modelo = arrayValues[7];
                    let anoModelo1 = arrayValues[9];
                    let anoModeloArray = anoModelo1.split(' ')[0];
                    anoModelo = anoModeloArray;
                    console.log(anoModelo);
                    autenficacao = arrayValues[11];
                    dataConsulta = arrayValues[13];
                    precoMedio = arrayValues[15];
                    yield page.goto(google, { timeout: 0 });
                    yield page.waitForSelector('.gLFyf');
                    yield page.type('.gLFyf.gsfi', `comprar ${modelo} ${anoModelo}`);
                    yield page.keyboard.press('Enter');
                    yield page.waitForSelector('.yuRUbf');
                    let links2 = yield page.$$eval('.yuRUbf a', item => item.map((link) => { return link.href; }));
                    for (const item of links2) {
                        let x = 1;
                        if (item.indexOf('lista.mercadolivre.com.br') > -1) {
                            if (x === 2)
                                continue;
                            yield page.goto(item, { timeout: 0 });
                            yield page.waitForSelector('.ui-search-result__image');
                            let linksML = yield page.$$eval('.ui-search-result__image a', item => item.map((link) => { return link.href; }));
                            let i = 1;
                            for (let link of linksML) {
                                if (i === 6)
                                    continue;
                                yield page.goto(link, { timeout: 0 });
                                let imgML = yield page.$$eval('.ui-pdp-gallery__figure__image', item => item.map((link) => { return link.src; }));
                                let titleML = yield page.$eval('.ui-pdp-title', (item) => item.innerText);
                                let anoEKmVeiculo = yield page.$eval('.ui-pdp-subtitle', (item) => item.innerText);
                                let precoVeiculow = yield page.$eval('.andes-money-amount__fraction', (item) => item.innerText);
                                const objML = {
                                    title: titleML,
                                    img: imgML[0],
                                    anoEKmVeiculo,
                                    precoVeiculow,
                                    link
                                };
                                list.push(objML);
                                if (list.length > 0) {
                                    anunciosSelects = true;
                                }
                                i++;
                            }
                            x++;
                        }
                        if (item.indexOf('icarros.com.br/tabela-fipe') > -1) {
                            yield page.goto(item, { timeout: 0 });
                            yield page.waitForSelector('.col-xs-6.col-md-4').then(() => {
                            }).catch(e => {
                                e.continue;
                            });
                            let linksIc = yield page.$$eval('.col-xs-6.col-md-4 a', item => item.map((link) => { return link.href; }));
                            let i = 1;
                            for (let link of linksIc) {
                                if (i === 4)
                                    continue;
                                yield page.goto(link, { timeout: 0 });
                                let imgIc = yield page.$eval('.swiper-slide.swiper-slide-active img', (item) => item.src);
                                let titleIc = yield page.$eval('.titulo-sm', (item) => item.innerText);
                                let precoIc = yield page.$eval('.preco', (item) => item.innerText);
                                let anoIc = yield page.$eval('.listahorizontal .primeiro .destaque', (item) => item.innerText);
                                let kmIcarros = yield page.$$eval('.card-informacoes-basicas .card-conteudo .listahorizontal li .destaque', item => item.map((item) => item.innerText));
                                let kmIc = kmIcarros[1];
                                const objIC = {
                                    title: titleIc,
                                    img: imgIc,
                                    anoEKmVeiculo: `Ano: ${anoIc}  Km: ${kmIc}`,
                                    precoVeiculow: precoIc,
                                    link
                                };
                                listIcarros.push(objIC);
                                if (listIcarros.length > 0) {
                                    anunciosSelectsIcarros = true;
                                }
                                i++;
                            }
                        }
                    }
                    console.log(list);
                    console.log(listIcarros);
                    console.log(links2);
                }
                yield browser.close();
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
                    precoMedio,
                    anunciosSelects,
                    anuncio1: list[0],
                    anuncio2: list[1],
                    anuncio3: list[2],
                    anuncio4: list[3],
                    anuncio5: list[4],
                    anunciosSelectsIcarros,
                    anuncioIcarros1: listIcarros[0],
                    anuncioIcarros2: listIcarros[1],
                    anuncioIcarros3: listIcarros[2],
                });
            }
            if (dados == 'Consulta de Caminhões e Micro-Ônibus') {
                yield page.click('[data-label="caminhao"]');
                yield page.waitForSelector('#selectMarcacaminhao');
                let arrayOption = yield page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.innerHTML));
                let arrayOption2 = yield page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.getAttribute('value')));
                const option = [...arrayOption];
                const option2 = [...arrayOption2];
                option[0] == '' ? option.shift() : option;
                option2[0] == '' ? option2.shift() : option2;
                mostrarBotao = true;
                if (marcaVeiculo) {
                    let number = option.indexOf(marcaVeiculo);
                    let veiculo = option2[number];
                    yield page.waitForSelector('.input');
                    yield page.waitForSelector('#selectMarcacaminhao');
                    yield page.select('select#selectMarcacaminhao', veiculo);
                    let arrayOption3 = yield page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.innerHTML));
                    let arrayOption4 = yield page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')));
                    option3 = [...arrayOption3];
                    option3[0] == '' ? option3.shift() : option3;
                    const option4 = [...arrayOption4];
                    option4[0] == '' ? option4.shift() : option4;
                    formSelectModel = true;
                }
                if (modeloVeiculo) {
                    let arrayOption5 = yield page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')));
                    let option4 = [...arrayOption5];
                    option4[0] == '' ? option4.shift() : option4;
                    let number2 = option3.indexOf(modeloVeiculo);
                    let veiculo2 = option4[number2];
                    yield page.waitForSelector('#selectAnoModelocaminhao');
                    yield page.select('select#selectAnoModelocaminhao', veiculo2);
                    formSelectAnoCar = true;
                    let arrayOption6 = yield page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')));
                    option5 = [...arrayOption6];
                    let option6 = [...arrayOption7];
                    option5[0] == '' ? option5.shift() : option5;
                    option6[0] == '' ? option6.shift() : option6;
                }
                if (anoVeiculo) {
                    let arrayOption6 = yield page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')));
                    option5 = [...arrayOption6];
                    const option6 = [...arrayOption7];
                    option5[0] == '' ? option5.shift() : option5;
                    option6[0] == '' ? option6.shift() : option6;
                    let number2 = option5.indexOf(anoVeiculo);
                    let veiculo3 = option6[number2];
                    yield page.waitForSelector('#selectAnocaminhao');
                    yield page.select('select#selectAnocaminhao', veiculo3);
                    yield page.click('#buttonPesquisarcaminhao');
                    yield page.waitForSelector('#resultadoConsultacaminhaoFiltros .last');
                    let arrayValues = yield page.$$eval('#resultadoConsultacaminhaoFiltros tbody td p', item => item.map(opt => opt.innerHTML));
                    mesReferencia = arrayValues[1];
                    codigoFipe = arrayValues[3];
                    marca = arrayValues[5];
                    modelo = arrayValues[7];
                    anoModelo = arrayValues[9];
                    autenficacao = arrayValues[11];
                    dataConsulta = arrayValues[13];
                    precoMedio = arrayValues[15];
                    yield page.goto(google, { timeout: 0 });
                    yield page.waitForSelector('.gLFyf');
                    yield page.type('.gLFyf.gsfi', `comprar ${modelo} ${anoModelo}`);
                    yield page.keyboard.press('Enter');
                    yield page.waitForSelector('.yuRUbf');
                    let links2 = yield page.$$eval('.yuRUbf a', item => item.map((link) => { return link.href; }));
                    for (const item of links2) {
                        let x = 1;
                        if (item.indexOf('lista.mercadolivre.com.br') > -1) {
                            if (x === 2)
                                continue;
                            yield page.goto(item, { timeout: 0 });
                            yield page.waitForSelector('.ui-search-result__image');
                            let linksML = yield page.$$eval('.ui-search-result__image a', item => item.map((link) => { return link.href; }));
                            let i = 1;
                            for (let link of linksML) {
                                if (i === 6)
                                    continue;
                                yield page.goto(link, { timeout: 0 });
                                let imgML = yield page.$$eval('.ui-pdp-gallery__figure__image', item => item.map((link) => { return link.src; }));
                                let titleML = yield page.$eval('.ui-pdp-title', (item) => item.innerText);
                                let anoEKmVeiculo = yield page.$eval('.ui-pdp-subtitle', (item) => item.innerText);
                                let precoVeiculow = yield page.$eval('.andes-money-amount__fraction', (item) => item.innerText);
                                const objML = {
                                    title: titleML,
                                    img: imgML[0],
                                    anoEKmVeiculo,
                                    precoVeiculow,
                                    link
                                };
                                list.push(objML);
                                if (list.length > 0) {
                                    anunciosSelects = true;
                                }
                                i++;
                            }
                        }
                        if (item.indexOf('icarros.com.br') > -1) {
                            yield page.goto(item, { timeout: 0 });
                            yield page.waitForSelector('.col-xs-6.col-md-4').then(() => {
                            }).catch(e => {
                                e.continue;
                            });
                            let linksIc = yield page.$$eval('.col-xs-6.col-md-4 a', item => item.map((link) => { return link.href; }));
                            // let linksParaImg = await page.$$eval('.sc-gzOgki.jwzpnh a', item => item.map((link: any) => { return link }))
                            console.log(linksIc);
                            let i = 1;
                            for (let link of linksIc) {
                                if (i === 4)
                                    continue;
                                yield page.goto(link, { timeout: 0 });
                                let imgIc = yield page.$eval('.swiper-slide.swiper-slide-active img', (item) => item.src);
                                let titleIc = yield page.$eval('.titulo-sm', (item) => item.innerText);
                                let precoIc = yield page.$eval('.preco', (item) => item.innerText);
                                let anoIc = yield page.$eval('.listahorizontal .primeiro .destaque', (item) => item.innerText);
                                let kmIcarros = yield page.$$eval('.card-informacoes-basicas .card-conteudo .listahorizontal li .destaque', item => item.map((item) => item.innerText));
                                console.log(kmIcarros);
                                let kmIc = kmIcarros[1];
                                const objIC = {
                                    title: titleIc,
                                    img: imgIc,
                                    anoEKmVeiculo: `Ano: ${anoIc}  Km: ${kmIc}`,
                                    precoVeiculow: precoIc,
                                    link
                                };
                                listIcarros.push(objIC);
                                if (listIcarros.length > 0) {
                                    anunciosSelectsIcarros = true;
                                }
                                i++;
                            }
                        }
                    }
                    console.log(list);
                    console.log(listIcarros);
                    console.log(links2);
                }
                yield browser.close();
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
                    precoMedio,
                    anunciosSelects,
                    anuncio1: list[0],
                    anuncio2: list[1],
                    anuncio3: list[2],
                    anuncio4: list[3],
                    anuncio5: list[4],
                    anunciosSelectsIcarros,
                    anuncioIcarros1: listIcarros[0],
                    anuncioIcarros2: listIcarros[1],
                    anuncioIcarros3: listIcarros[2],
                });
            }
            if (dados == 'Consulta de motos') {
                yield page.click('[data-label="moto"]');
                yield page.waitForSelector('#selectMarcamoto');
                let arrayOption = yield page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.innerHTML));
                let arrayOption2 = yield page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.getAttribute('value')));
                const option = [...arrayOption];
                const option2 = [...arrayOption2];
                option[0] == '' ? option.shift() : option;
                option2[0] == '' ? option2.shift() : option2;
                mostrarBotao = true;
                if (marcaVeiculo) {
                    let number = option.indexOf(marcaVeiculo);
                    let veiculo = option2[number];
                    yield page.waitForSelector('.input');
                    yield page.waitForSelector('#selectMarcamoto');
                    yield page.select('select#selectMarcamoto', veiculo);
                    let arrayOption3 = yield page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.innerHTML));
                    let arrayOption4 = yield page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')));
                    option3 = [...arrayOption3];
                    option3[0] == '' ? option3.shift() : option3;
                    const option4 = [...arrayOption4];
                    option4[0] == '' ? option4.shift() : option4;
                    formSelectModel = true;
                }
                if (modeloVeiculo) {
                    let arrayOption5 = yield page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')));
                    let option4 = [...arrayOption5];
                    option4[0] == '' ? option4.shift() : option4;
                    let number2 = option3.indexOf(modeloVeiculo);
                    let veiculo2 = option4[number2];
                    yield page.waitForSelector('#selectAnoModelomoto');
                    yield page.select('select#selectAnoModelomoto', veiculo2);
                    formSelectAnoCar = true;
                    let arrayOption6 = yield page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')));
                    option5 = [...arrayOption6];
                    let option6 = [...arrayOption7];
                    option5[0] == '' ? option5.shift() : option5;
                    option6[0] == '' ? option6.shift() : option6;
                }
                if (anoVeiculo) {
                    let arrayOption6 = yield page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')));
                    option5 = [...arrayOption6];
                    const option6 = [...arrayOption7];
                    option5[0] == '' ? option5.shift() : option5;
                    option6[0] == '' ? option6.shift() : option6;
                    let number2 = option5.indexOf(anoVeiculo);
                    let veiculo3 = option6[number2];
                    yield page.waitForSelector('#selectAnomoto');
                    yield page.select('select#selectAnomoto', veiculo3);
                    yield page.click('#buttonPesquisarmoto');
                    yield page.waitForSelector('#resultadoConsultamotoFiltros .last');
                    let arrayValues = yield page.$$eval('#resultadoConsultamotoFiltros tbody td p', item => item.map(opt => opt.innerHTML));
                    mesReferencia = arrayValues[1];
                    codigoFipe = arrayValues[3];
                    marca = arrayValues[5];
                    modelo = arrayValues[7];
                    anoModelo = arrayValues[9];
                    autenficacao = arrayValues[11];
                    dataConsulta = arrayValues[13];
                    precoMedio = arrayValues[15];
                    yield page.goto(google, { timeout: 0 });
                    yield page.waitForSelector('.gLFyf');
                    yield page.type('.gLFyf.gsfi', `comprar ${modelo} ${anoModelo}`);
                    yield page.keyboard.press('Enter');
                    yield page.waitForSelector('.yuRUbf');
                    let links2 = yield page.$$eval('.yuRUbf a', item => item.map((link) => { return link.href; }));
                    for (const item of links2) {
                        let x = 1;
                        if (item.indexOf('lista.mercadolivre.com.br') > -1) {
                            if (x === 2)
                                continue;
                            yield page.goto(item, { timeout: 0 });
                            yield page.waitForSelector('.ui-search-result__image');
                            let linksML = yield page.$$eval('.ui-search-result__image a', item => item.map((link) => { return link.href; }));
                            let i = 1;
                            for (let link of linksML) {
                                if (i === 6)
                                    continue;
                                yield page.goto(link, { timeout: 0 });
                                let imgML = yield page.$$eval('.ui-pdp-gallery__figure__image', item => item.map((link) => { return link.src; }));
                                let titleML = yield page.$eval('.ui-pdp-title', (item) => item.innerText);
                                let anoEKmVeiculo = yield page.$eval('.ui-pdp-subtitle', (item) => item.innerText);
                                let precoVeiculow = yield page.$eval('.andes-money-amount__fraction', (item) => item.innerText);
                                const objML = {
                                    title: titleML,
                                    img: imgML[0],
                                    anoEKmVeiculo,
                                    precoVeiculow,
                                    link
                                };
                                list.push(objML);
                                if (list.length > 0) {
                                    anunciosSelects = true;
                                }
                                i++;
                            }
                        }
                    }
                    console.log(list);
                    console.log(listIcarros);
                    console.log(links2);
                }
                yield browser.close();
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
                    precoMedio,
                    anunciosSelects,
                    anuncio1: list[0],
                    anuncio2: list[1],
                    anuncio3: list[2],
                    anuncio4: list[3],
                    anuncio5: list[4],
                    anunciosSelectsIcarros,
                });
            }
        }))();
    }
};
exports.searchVeiculos = searchVeiculos;
const searchApi = (req, response) => {
    let url = "https://veiculos.fipe.org.br/";
    let google = "https://www.google.com.br/";
    let marcadoVeiculo = [''];
    let option3 = [''];
    let anoDoVeiculo = [''];
    // const list : string[] = ['']    
    // let option6: string[]  = ['']
    let formSelectModel = false;
    let formSelectAnoCar = false;
    let mostrarBotao = false;
    let anunciosSelects = false;
    let anunciosSelectsIcarros = false;
    let dados = req.body.select;
    let marcaVeiculo = req.body.select1;
    let modeloVeiculo = req.body.select2;
    let anoVeiculo = req.body.select3;
    let mesReferencia = '';
    let codigoFipe = '';
    let marca = '';
    let modelo = '';
    let anoModelo = '';
    let autenficacao = '';
    let dataConsulta = '';
    let precoMedio = '';
    const list = [''];
    const anunciosML = [''];
    const listIcarros = [''];
    console.log(dados);
    if (dados) {
        ;
        (() => __awaiter(void 0, void 0, void 0, function* () {
            const list = [];
            const anunciosML = [];
            const anunciosIcarros = [];
            const listIcarros = [];
            const browser = yield puppeteer_1.default.launch({ headless: true });
            const page = yield browser.newPage();
            yield page.goto(url, { timeout: 0 });
            yield page.waitForSelector('[data-slug="carro"]');
            if (dados == 'Consulta de Carros e utilitários pequenos') {
                yield page.click('[data-label="carro"]');
                yield page.waitForSelector('#selectMarcacarro');
                const arrayOption = yield page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.innerHTML));
                const arrayOption2 = yield page.$$eval('#selectMarcacarro option', item => item.map(opt => opt.getAttribute('value')));
                const marcadoVeiculo = [...arrayOption];
                const modelodoVeiculo = [...arrayOption2];
                marcadoVeiculo[0] == '' ? marcadoVeiculo.shift() : marcadoVeiculo;
                modelodoVeiculo[0] == '' ? modelodoVeiculo.shift() : modelodoVeiculo;
                if (marcaVeiculo) {
                    console.log(marcaVeiculo);
                    const number = marcadoVeiculo.indexOf(marcaVeiculo);
                    if (number === -1) {
                        response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
                    }
                    else {
                        let veiculo = modelodoVeiculo[number];
                        yield page.waitForSelector('.input');
                        yield page.waitForSelector('#selectMarcacarro');
                        yield page.select('select#selectMarcacarro', veiculo);
                        let arrayOption3 = yield page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.innerHTML));
                        let arrayOption4 = yield page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')));
                        option3 = [...arrayOption3];
                        option3[0] == '' ? option3.shift() : option3;
                        const option4 = [...arrayOption4];
                        option4[0] == '' ? option4.shift() : option4;
                    }
                }
                if (modeloVeiculo) {
                    console.log(modeloVeiculo);
                    let arrayOption5 = yield page.$$eval('#selectAnoModelocarro option', item => item.map(opt => opt.getAttribute('value')));
                    let option4 = [...arrayOption5];
                    option4[0] == '' ? option4.shift() : option4;
                    let number2 = option3.indexOf(modeloVeiculo);
                    if (number2 === -1) {
                        response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
                    }
                    else {
                        let veiculo2 = option4[number2];
                        yield page.waitForSelector('#selectAnoModelocarro');
                        yield page.select('select#selectAnoModelocarro', veiculo2);
                        formSelectAnoCar = true;
                        let arrayOption6 = yield page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML));
                        let arrayOption7 = yield page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')));
                        anoDoVeiculo = [...arrayOption6];
                        let option6 = [...arrayOption7];
                        anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo;
                        option6[0] == '' ? option6.shift() : option6;
                    }
                }
                if (anoVeiculo) {
                    console.log(anoVeiculo);
                    let arrayOption6 = yield page.$$eval('#selectAnocarro option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnocarro option', item => item.map(opt => opt.getAttribute('value')));
                    anoDoVeiculo = [...arrayOption6];
                    const option6 = [...arrayOption7];
                    anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo;
                    option6[0] == '' ? option6.shift() : option6;
                    let number2 = anoDoVeiculo.indexOf(anoVeiculo);
                    if (number2 === -1) {
                        response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
                    }
                    else {
                        let veiculo3 = option6[number2];
                        yield page.waitForSelector('#selectAnocarro');
                        yield page.select('select#selectAnocarro', veiculo3);
                        yield page.click('#buttonPesquisarcarro');
                        yield page.waitForSelector('#resultadoConsultacarroFiltros .last');
                        let arrayValues = yield page.$$eval('#resultadoConsultacarroFiltros tbody td p', item => item.map(opt => opt.innerHTML));
                        mesReferencia = arrayValues[1];
                        codigoFipe = arrayValues[3];
                        marca = arrayValues[5];
                        modelo = arrayValues[7];
                        let anoModelo1 = arrayValues[9];
                        let anoModeloArray = anoModelo1.split(' ')[0];
                        anoModelo = anoModeloArray;
                        autenficacao = arrayValues[11];
                        dataConsulta = arrayValues[13];
                        precoMedio = arrayValues[15];
                        yield page.goto(google, { timeout: 0 });
                        yield page.waitForSelector('.gLFyf');
                        yield page.type('.gLFyf.gsfi', `comprar ${modelo} ${anoModelo}`);
                        yield page.keyboard.press('Enter');
                        yield page.waitForSelector('.yuRUbf');
                        let links2 = yield page.$$eval('.yuRUbf a', item => item.map((link) => { return link.href; }));
                        for (const item of links2) {
                            let x = 1;
                            if (item.indexOf('lista.mercadolivre.com.br') > -1) {
                                if (x === 2)
                                    continue;
                                yield page.goto(item, { timeout: 0 });
                                yield page.waitForSelector('.ui-search-result__image');
                                let linksML = yield page.$$eval('.ui-search-result__image a', item => item.map((link) => { return link.href; }));
                                let i = 1;
                                for (let link of linksML) {
                                    if (i === 6)
                                        continue;
                                    yield page.goto(link, { timeout: 0 });
                                    let imgML = yield page.$$eval('.ui-pdp-gallery__figure__image', item => item.map((link) => { return link.src; }));
                                    let titleML = yield page.$eval('.ui-pdp-title', (item) => item.innerText);
                                    let anoEKmVeiculo = yield page.$eval('.ui-pdp-subtitle', (item) => item.innerText);
                                    let precoVeiculow = yield page.$eval('.andes-money-amount__fraction', (item) => item.innerText);
                                    const objML = {
                                        title: titleML,
                                        img: imgML[0],
                                        anoEKmVeiculo,
                                        precoVeiculow,
                                        link
                                    };
                                    list.push(objML);
                                    if (list.length > 0) {
                                        anunciosSelects = true;
                                    }
                                    i++;
                                }
                                x++;
                            }
                            if (item.indexOf('icarros.com.br/tabela-fipe') > -1) {
                                yield page.goto(item, { timeout: 0 });
                                yield page.waitForSelector('.col-xs-6.col-md-4').then(() => {
                                }).catch(e => {
                                    e.continue;
                                });
                                let linksIc = yield page.$$eval('.col-xs-6.col-md-4 a', item => item.map((link) => { return link.href; }));
                                let i = 1;
                                for (let link of linksIc) {
                                    if (i === 4)
                                        continue;
                                    yield page.goto(link, { timeout: 0 });
                                    let imgIc = yield page.$eval('.swiper-slide.swiper-slide-active img', (item) => item.src);
                                    let titleIc = yield page.$eval('.titulo-sm', (item) => item.innerText);
                                    let precoIc = yield page.$eval('.preco', (item) => item.innerText);
                                    let anoIc = yield page.$eval('.listahorizontal .primeiro .destaque', (item) => item.innerText);
                                    let kmIcarros = yield page.$$eval('.card-informacoes-basicas .card-conteudo .listahorizontal li .destaque', item => item.map((item) => item.innerText));
                                    let kmIc = kmIcarros[1];
                                    const objIC = {
                                        title: titleIc,
                                        img: imgIc,
                                        anoEKmVeiculo: `Ano: ${anoIc}  Km: ${kmIc}`,
                                        precoVeiculow: precoIc,
                                        link
                                    };
                                    listIcarros.push(objIC);
                                    if (listIcarros.length > 0) {
                                        anunciosSelectsIcarros = true;
                                    }
                                    i++;
                                }
                            }
                        }
                        console.log(list);
                        console.log(listIcarros);
                        console.log(links2);
                    }
                }
                yield browser.close();
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
                    precoMedio,
                    anunciosML: list,
                    anunciosIcarros: listIcarros,
                });
            }
            else {
                response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
            }
            if (dados == 'Consulta de Caminhões e Micro-Ônibus') {
                yield page.click('[data-label="caminhao"]');
                yield page.waitForSelector('#selectMarcacaminhao');
                let arrayOption = yield page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.innerHTML));
                let arrayOption2 = yield page.$$eval('#selectMarcacaminhao option', item => item.map(opt => opt.getAttribute('value')));
                const marcadoVeiculo = [...arrayOption];
                const option2 = [...arrayOption2];
                marcadoVeiculo[0] == '' ? marcadoVeiculo.shift() : marcadoVeiculo;
                option2[0] == '' ? option2.shift() : option2;
                mostrarBotao = true;
                if (marcaVeiculo) {
                    let number = marcadoVeiculo.indexOf(marcaVeiculo);
                    if (number === -1) {
                        response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
                    }
                    let veiculo = option2[number];
                    yield page.waitForSelector('.input');
                    yield page.waitForSelector('#selectMarcacaminhao');
                    yield page.select('select#selectMarcacaminhao', veiculo);
                    let arrayOption3 = yield page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.innerHTML));
                    let arrayOption4 = yield page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')));
                    option3 = [...arrayOption3];
                    option3[0] == '' ? option3.shift() : option3;
                    const option4 = [...arrayOption4];
                    option4[0] == '' ? option4.shift() : option4;
                    formSelectModel = true;
                }
                if (modeloVeiculo) {
                    let arrayOption5 = yield page.$$eval('#selectAnoModelocaminhao option', item => item.map(opt => opt.getAttribute('value')));
                    let option4 = [...arrayOption5];
                    option4[0] == '' ? option4.shift() : option4;
                    let number2 = option3.indexOf(modeloVeiculo);
                    if (number2 === -1) {
                        response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
                    }
                    let veiculo2 = option4[number2];
                    yield page.waitForSelector('#selectAnoModelocaminhao');
                    yield page.select('select#selectAnoModelocaminhao', veiculo2);
                    formSelectAnoCar = true;
                    let arrayOption6 = yield page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')));
                    anoDoVeiculo = [...arrayOption6];
                    let option6 = [...arrayOption7];
                    anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo;
                    option6[0] == '' ? option6.shift() : option6;
                }
                if (anoVeiculo) {
                    let arrayOption6 = yield page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnocaminhao option', item => item.map(opt => opt.getAttribute('value')));
                    anoDoVeiculo = [...arrayOption6];
                    const option6 = [...arrayOption7];
                    anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo;
                    option6[0] == '' ? option6.shift() : option6;
                    let number2 = anoDoVeiculo.indexOf(anoVeiculo);
                    if (number2 === -1) {
                        response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
                    }
                    let veiculo3 = option6[number2];
                    yield page.waitForSelector('#selectAnocaminhao');
                    yield page.select('select#selectAnocaminhao', veiculo3);
                    yield page.click('#buttonPesquisarcaminhao');
                    yield page.waitForSelector('#resultadoConsultacaminhaoFiltros .last');
                    let arrayValues = yield page.$$eval('#resultadoConsultacaminhaoFiltros tbody td p', item => item.map(opt => opt.innerHTML));
                    mesReferencia = arrayValues[1];
                    codigoFipe = arrayValues[3];
                    marca = arrayValues[5];
                    modelo = arrayValues[7];
                    anoModelo = arrayValues[9];
                    autenficacao = arrayValues[11];
                    dataConsulta = arrayValues[13];
                    precoMedio = arrayValues[15];
                    yield page.goto(google, { timeout: 0 });
                    yield page.waitForSelector('.gLFyf');
                    yield page.type('.gLFyf.gsfi', `comprar ${modelo} ${anoModelo}`);
                    yield page.keyboard.press('Enter');
                    yield page.waitForSelector('.yuRUbf');
                    let links2 = yield page.$$eval('.yuRUbf a', item => item.map((link) => { return link.href; }));
                    for (const item of links2) {
                        let x = 1;
                        if (item.indexOf('lista.mercadolivre.com.br') > -1) {
                            if (x === 2)
                                continue;
                            yield page.goto(item, { timeout: 0 });
                            yield page.waitForSelector('.ui-search-result__image');
                            let linksML = yield page.$$eval('.ui-search-result__image a', item => item.map((link) => { return link.href; }));
                            let i = 1;
                            for (let link of linksML) {
                                if (i === 6)
                                    continue;
                                yield page.goto(link, { timeout: 0 });
                                let imgML = yield page.$$eval('.ui-pdp-gallery__figure__image', item => item.map((link) => { return link.src; }));
                                let titleML = yield page.$eval('.ui-pdp-title', (item) => item.innerText);
                                let anoEKmVeiculo = yield page.$eval('.ui-pdp-subtitle', (item) => item.innerText);
                                let precoVeiculow = yield page.$eval('.andes-money-amount__fraction', (item) => item.innerText);
                                const objML = {
                                    title: titleML,
                                    img: imgML[0],
                                    anoEKmVeiculo,
                                    precoVeiculow,
                                    link
                                };
                                list.push(objML);
                                if (list.length > 0) {
                                    anunciosSelects = true;
                                }
                                i++;
                            }
                        }
                        if (item.indexOf('icarros.com.br') > -1) {
                            yield page.goto(item, { timeout: 0 });
                            yield page.waitForSelector('.col-xs-6.col-md-4').then(() => {
                            }).catch(e => {
                                e.continue;
                            });
                            let linksIc = yield page.$$eval('.col-xs-6.col-md-4 a', item => item.map((link) => { return link.href; }));
                            // let linksParaImg = await page.$$eval('.sc-gzOgki.jwzpnh a', item => item.map((link: any) => { return link }))
                            console.log(linksIc);
                            let i = 1;
                            for (let link of linksIc) {
                                if (i === 4)
                                    continue;
                                yield page.goto(link, { timeout: 0 });
                                let imgIc = yield page.$eval('.swiper-slide.swiper-slide-active img', (item) => item.src);
                                let titleIc = yield page.$eval('.titulo-sm', (item) => item.innerText);
                                let precoIc = yield page.$eval('.preco', (item) => item.innerText);
                                let anoIc = yield page.$eval('.listahorizontal .primeiro .destaque', (item) => item.innerText);
                                let kmIcarros = yield page.$$eval('.card-informacoes-basicas .card-conteudo .listahorizontal li .destaque', item => item.map((item) => item.innerText));
                                console.log(kmIcarros);
                                let kmIc = kmIcarros[1];
                                const objIC = {
                                    title: titleIc,
                                    img: imgIc,
                                    anoEKmVeiculo: `Ano: ${anoIc}  Km: ${kmIc}`,
                                    precoVeiculow: precoIc,
                                    link
                                };
                                listIcarros.push(objIC);
                                if (listIcarros.length > 0) {
                                    anunciosSelectsIcarros = true;
                                }
                                i++;
                            }
                        }
                    }
                    console.log(list);
                    console.log(listIcarros);
                    console.log(links2);
                }
                yield browser.close();
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
                    precoMedio,
                    anunciosML: list,
                    anunciosIcarros: listIcarros,
                });
            }
            else {
                response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
            }
            if (dados == 'Consulta de motos') {
                yield page.click('[data-label="moto"]');
                yield page.waitForSelector('#selectMarcamoto');
                let arrayOption = yield page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.innerHTML));
                let arrayOption2 = yield page.$$eval('#selectMarcamoto option', item => item.map(opt => opt.getAttribute('value')));
                const marcadoVeiculo = [...arrayOption];
                const option2 = [...arrayOption2];
                marcadoVeiculo[0] == '' ? marcadoVeiculo.shift() : marcadoVeiculo;
                option2[0] == '' ? option2.shift() : option2;
                mostrarBotao = true;
                if (marcaVeiculo) {
                    let number = marcadoVeiculo.indexOf(marcaVeiculo);
                    if (number === -1) {
                        response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
                    }
                    let veiculo = option2[number];
                    yield page.waitForSelector('.input');
                    yield page.waitForSelector('#selectMarcamoto');
                    yield page.select('select#selectMarcamoto', veiculo);
                    let arrayOption3 = yield page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.innerHTML));
                    let arrayOption4 = yield page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')));
                    option3 = [...arrayOption3];
                    option3[0] == '' ? option3.shift() : option3;
                    const option4 = [...arrayOption4];
                    option4[0] == '' ? option4.shift() : option4;
                    formSelectModel = true;
                }
                if (modeloVeiculo) {
                    let arrayOption5 = yield page.$$eval('#selectAnoModelomoto option', item => item.map(opt => opt.getAttribute('value')));
                    let option4 = [...arrayOption5];
                    option4[0] == '' ? option4.shift() : option4;
                    let number2 = option3.indexOf(modeloVeiculo);
                    if (number2 === -1) {
                        response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
                    }
                    let veiculo2 = option4[number2];
                    yield page.waitForSelector('#selectAnoModelomoto');
                    yield page.select('select#selectAnoModelomoto', veiculo2);
                    formSelectAnoCar = true;
                    let arrayOption6 = yield page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')));
                    anoDoVeiculo = [...arrayOption6];
                    let option6 = [...arrayOption7];
                    anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo;
                    option6[0] == '' ? option6.shift() : option6;
                }
                if (anoVeiculo) {
                    let arrayOption6 = yield page.$$eval('#selectAnomoto option', item => item.map(opt => opt.innerHTML));
                    let arrayOption7 = yield page.$$eval('#selectAnomoto option', item => item.map(opt => opt.getAttribute('value')));
                    anoDoVeiculo = [...arrayOption6];
                    const option6 = [...arrayOption7];
                    anoDoVeiculo[0] == '' ? anoDoVeiculo.shift() : anoDoVeiculo;
                    option6[0] == '' ? option6.shift() : option6;
                    let number2 = anoDoVeiculo.indexOf(anoVeiculo);
                    if (number2 === -1) {
                        response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
                    }
                    let veiculo3 = option6[number2];
                    yield page.waitForSelector('#selectAnomoto');
                    yield page.select('select#selectAnomoto', veiculo3);
                    yield page.click('#buttonPesquisarmoto');
                    yield page.waitForSelector('#resultadoConsultamotoFiltros .last');
                    let arrayValues = yield page.$$eval('#resultadoConsultamotoFiltros tbody td p', item => item.map(opt => opt.innerHTML));
                    mesReferencia = arrayValues[1];
                    codigoFipe = arrayValues[3];
                    marca = arrayValues[5];
                    modelo = arrayValues[7];
                    anoModelo = arrayValues[9];
                    autenficacao = arrayValues[11];
                    dataConsulta = arrayValues[13];
                    precoMedio = arrayValues[15];
                    yield page.goto(google, { timeout: 0 });
                    yield page.waitForSelector('.gLFyf');
                    yield page.type('.gLFyf.gsfi', `comprar ${modelo} ${anoModelo}`);
                    yield page.keyboard.press('Enter');
                    yield page.waitForSelector('.yuRUbf');
                    let links2 = yield page.$$eval('.yuRUbf a', item => item.map((link) => { return link.href; }));
                    for (const item of links2) {
                        let x = 1;
                        if (item.indexOf('lista.mercadolivre.com.br') > -1) {
                            if (x === 2)
                                continue;
                            yield page.goto(item, { timeout: 0 });
                            yield page.waitForSelector('.ui-search-result__image');
                            let linksML = yield page.$$eval('.ui-search-result__image a', item => item.map((link) => { return link.href; }));
                            let i = 1;
                            for (let link of linksML) {
                                if (i === 6)
                                    continue;
                                yield page.goto(link, { timeout: 0 });
                                let imgML = yield page.$$eval('.ui-pdp-gallery__figure__image', item => item.map((link) => { return link.src; }));
                                let titleML = yield page.$eval('.ui-pdp-title', (item) => item.innerText);
                                let anoEKmVeiculo = yield page.$eval('.ui-pdp-subtitle', (item) => item.innerText);
                                let precoVeiculow = yield page.$eval('.andes-money-amount__fraction', (item) => item.innerText);
                                const objML = {
                                    title: titleML,
                                    img: imgML[0],
                                    anoEKmVeiculo,
                                    precoVeiculow,
                                    link
                                };
                                list.push(objML);
                                if (list.length > 0) {
                                    anunciosSelects = true;
                                }
                                i++;
                            }
                        }
                    }
                    console.log(list);
                    console.log(listIcarros);
                    console.log(links2);
                }
                yield browser.close();
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
                    precoMedio,
                    anunciosML: list,
                    anunciosIcarros: listIcarros,
                });
            }
            else {
                response.status(500).json({ error: "Dados invalidos - Digite corretamente" });
            }
        }))();
    }
    else {
        response.status(500).json({ error: "Dados invalidos" });
    }
};
exports.searchApi = searchApi;
