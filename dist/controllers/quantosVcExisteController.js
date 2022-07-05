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
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeApi = exports.home = exports.index = void 0;
// import Puppeteer from 'puppeteer'
const pup = require('puppeteer');
const index = (req, res) => {
    res.render('quantosDeVcExiste/page');
};
exports.index = index;
const home = (req, res) => {
    let url = "https://censo2010.ibge.gov.br/nomes/#/search";
    let { name } = req.body;
    if (name.length <= 2 || name == '') {
        return res.redirect('/quantos-de-vc-existe');
    }
    let newName = name[0].toUpperCase() + name.substr(1);
    console.log(name);
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const browser = yield pup.launch(); // , slowMo : 950
        const searchFor = name;
        const page = yield browser.newPage();
        yield page.goto(url, { timeout: 0 });
        yield page.waitForSelector('input[ng-model="criteria.nome"]');
        yield page.type('input[ng-model="criteria.nome"]', searchFor);
        console.log("DIGITEI");
        yield page.click('.button-wrapper button');
        console.log("CLIQUEI");
        yield page.waitForSelector('.item-note.ng-binding');
        let dados = yield page.evaluate(() => {
            let nodeList = document.querySelectorAll('.item-note.ng-binding');
            let array = [...nodeList];
            console.log(array[0].innerHTML);
            let nomesEstados = {
                emNomeEstado: false,
                noNomeEstado: false,
                naNomeEstado: false,
                deNomeEstado: false,
                doNomeEstado: false,
                daNomeEstado: false
            };
            let estado = array[3].innerHTML;
            switch (estado) {
                case 'Alagoas':
                case 'São Paulo':
                case 'Goiás':
                case 'Mato Grosso':
                case 'Mato Grosso do Sul':
                case 'Minas Gerais':
                case 'Pernambuco':
                case 'Rondônia':
                case 'Roraima':
                case 'Santa Catarina':
                case 'Tocantis':
                    nomesEstados.emNomeEstado = true;
                    break;
                case 'Amapá':
                case 'Amazonas':
                case 'Espírito Santo':
                case 'Acre':
                case 'Ceará':
                case 'Distrito Federal':
                case 'Maranhão':
                case 'Pará':
                case 'Paraná':
                case 'Piauí':
                case 'Rio de Janeiro':
                case 'Rio Grande do Norte':
                case 'Rio Grande do Sul':
                case 'Sergipe':
                    nomesEstados.noNomeEstado = true;
                    break;
                case 'Bahia':
                case 'Paraíba':
                    nomesEstados.naNomeEstado = true;
                    break;
                default:
                    break;
            }
            switch (estado) {
                case 'Alagoas':
                case 'São Paulo':
                case 'Goiás':
                case 'Minas Gerais':
                case 'Rondônia':
                case 'Roraima':
                case 'Santa Catarina':
                case 'Sergipe':
                    nomesEstados.deNomeEstado = true;
                    break;
                case 'Amapá':
                case 'Amazonas':
                case 'Acre':
                case 'Ceará':
                case 'Distrito Federal':
                case 'Espírito Santo':
                case 'Maranhão':
                case 'Mato Grosso':
                case 'Mato Grosso do Sul':
                case 'Pará':
                case 'Piauí':
                case 'Paraná':
                case 'Pernambuco':
                case 'Rio de Janeiro':
                case 'Rio Grande do Norte':
                case 'Rio Grande do Sul':
                case 'Tocantis':
                    nomesEstados.doNomeEstado = true;
                    break;
                case 'Bahia':
                case 'Paraíba':
                    nomesEstados.daNomeEstado = true;
                    break;
                default:
                    break;
            }
            let pessoas = array[4].innerHTML.replace('.', '');
            // let pessoas = pessoasString
            let obj = {
                qt: array[0].innerHTML,
                percentual: array[1].innerHTML,
                popularidade: array[2].innerHTML,
                estadoComMais: array[3].innerHTML,
                aCada100MilNoEstado: parseInt(pessoas),
                nomesEstados
            };
            return obj;
        });
        let obj = dados;
        console.log('Nome:', searchFor);
        console.log('Dados:', obj);
        yield browser.close();
        res.render('quantosDeVcExiste/home', {
            name: newName,
            quantidade: obj.qt,
            popularidade: obj.popularidade,
            estado: obj.estadoComMais,
            aCada100MilNoEstado: obj.aCada100MilNoEstado,
            percentage: obj.percentual,
            nomesEstados: obj.nomesEstados
        });
    }))();
};
exports.home = home;
const homeApi = (req, res) => {
    let url = "https://censo2010.ibge.gov.br/nomes/#/search";
    let { name } = req.body;
    console.log(name);
    if (name == undefined) {
        return res.status(400).json({ error: "Digite os dados corretamente" });
    }
    if (name.length <= 2 || name == '') {
        return res.status(400).json({ error: "Digite um nome válido" });
    }
    let newName = name[0].toUpperCase() + name.substr(1);
    console.log(name);
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const browser = yield pup.launch(); // , slowMo : 950
        const searchFor = name;
        const page = yield browser.newPage();
        yield page.goto(url, { timeout: 0 });
        yield page.waitForSelector('input[ng-model="criteria.nome"]');
        yield page.type('input[ng-model="criteria.nome"]', searchFor);
        console.log("DIGITEI");
        yield page.click('.button-wrapper button');
        console.log("CLIQUEI");
        yield page.waitForSelector('.item-note.ng-binding');
        let dados = yield page.evaluate(() => {
            let nodeList = document.querySelectorAll('.item-note.ng-binding');
            let array = [...nodeList];
            console.log(array[0].innerHTML);
            let nomesEstados = {
                emNomeEstado: false,
                noNomeEstado: false,
                naNomeEstado: false,
                deNomeEstado: false,
                doNomeEstado: false,
                daNomeEstado: false
            };
            let estado = array[3].innerHTML;
            switch (estado) {
                case 'Alagoas':
                case 'São Paulo':
                case 'Goiás':
                case 'Mato Grosso':
                case 'Mato Grosso do Sul':
                case 'Minas Gerais':
                case 'Pernambuco':
                case 'Rondônia':
                case 'Roraima':
                case 'Santa Catarina':
                case 'Tocantis':
                    nomesEstados.emNomeEstado = true;
                    break;
                case 'Amapá':
                case 'Amazonas':
                case 'Espírito Santo':
                case 'Acre':
                case 'Ceará':
                case 'Distrito Federal':
                case 'Maranhão':
                case 'Pará':
                case 'Paraná':
                case 'Piauí':
                case 'Rio de Janeiro':
                case 'Rio Grande do Norte':
                case 'Rio Grande do Sul':
                case 'Sergipe':
                    nomesEstados.noNomeEstado = true;
                    break;
                case 'Bahia':
                case 'Paraíba':
                    nomesEstados.naNomeEstado = true;
                    break;
                default:
                    break;
            }
            switch (estado) {
                case 'Alagoas':
                case 'São Paulo':
                case 'Goiás':
                case 'Minas Gerais':
                case 'Rondônia':
                case 'Roraima':
                case 'Santa Catarina':
                case 'Sergipe':
                    nomesEstados.deNomeEstado = true;
                    break;
                case 'Amapá':
                case 'Amazonas':
                case 'Acre':
                case 'Ceará':
                case 'Distrito Federal':
                case 'Espírito Santo':
                case 'Maranhão':
                case 'Mato Grosso':
                case 'Mato Grosso do Sul':
                case 'Pará':
                case 'Piauí':
                case 'Paraná':
                case 'Pernambuco':
                case 'Rio de Janeiro':
                case 'Rio Grande do Norte':
                case 'Rio Grande do Sul':
                case 'Tocantis':
                    nomesEstados.doNomeEstado = true;
                    break;
                case 'Bahia':
                case 'Paraíba':
                    nomesEstados.daNomeEstado = true;
                    break;
                default:
                    break;
            }
            let pessoas = array[4].innerHTML.replace('.', '');
            // let pessoas = pessoasString
            let obj = {
                qt: array[0].innerHTML,
                percentual: array[1].innerHTML,
                popularidade: array[2].innerHTML,
                estadoComMais: array[3].innerHTML,
                aCada100MilNoEstado: parseInt(pessoas),
                nomesEstados
            };
            return obj;
        });
        let obj = dados;
        console.log('Nome:', searchFor);
        console.log('Dados:', obj);
        yield browser.close();
        res.status(200).json({
            name: newName,
            numberNamesBrasil: obj.qt,
            namePopular: obj.popularidade,
            statePopularName: obj.estadoComMais,
            name100ThousandState: obj.aCada100MilNoEstado,
            percentage: obj.percentual
        });
    }))();
};
exports.homeApi = homeApi;
