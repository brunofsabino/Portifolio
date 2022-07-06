import { Router } from 'express'
import * as quantosDeVcExiste from '../controllers/quantosVcExisteController'
import * as qualValorVeiculo from '../controllers/qualValorVeiculoController'


const routerApi = Router()

routerApi.get('/quantos-de-vc-existe-brasil', quantosDeVcExiste.homeApi )
routerApi.get('/qual-o-valor-do-seu-veiculo', qualValorVeiculo.searchApi)
// routerApi.get('/qual-o-valor-do-seu-veiculo', qualValorVeiculo.searchApi)

export default routerApi