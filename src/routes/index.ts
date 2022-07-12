import { Router } from 'express'
import * as homeController from '../controllers/homeController'
import * as quantosDeVcExiste from '../controllers/quantosVcExisteController'
import * as qualValorVeiculo from '../controllers/qualValorVeiculoController'
import * as carController from '../controllers/carController'

const router = Router()

router.get('/', homeController.home )
router.get('/quantos-de-vc-existe', quantosDeVcExiste.index)
router.post('/quantos-de-vc-existe', quantosDeVcExiste.home)

router.get('/qual-o-valor-do-seu-veiculo', qualValorVeiculo.home)
// router.post('/qual-o-valor-do-seu-veiculo', qualValorVeiculo.searchVeiculos)
router.post('/qual-o-valor-do-seu-veiculo/veiculo', qualValorVeiculo.vehicle)
router.post('/qual-o-valor-do-seu-veiculo/veiculo/marca', qualValorVeiculo.brand)
router.post('/qual-o-valor-do-seu-veiculo/veiculo/marca/modelo', qualValorVeiculo.model)
router.post('/qual-o-valor-do-seu-veiculo/veiculo/marca/modelo/ano', qualValorVeiculo.year)
// router.post('/qual-o-valor-do-seu-veiculo', qualValorVeiculo.searchVeiculos)


export default router