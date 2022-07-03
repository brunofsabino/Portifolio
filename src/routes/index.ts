import { Router } from 'express'
import * as homeController from '../controllers/homeController'
import * as quantosDeVcExiste from '../controllers/quantosVcExisteController'
import * as qualValorVeiculo from '../controllers/qualValorVeiculoController'

const router = Router()

router.get('/', homeController.home )
router.get('/quantos-de-vc-existe', quantosDeVcExiste.index)
router.post('/quantos-de-vc-existe', quantosDeVcExiste.home)

router.get('/qual-o-valor-do-seu-veiculo', qualValorVeiculo.home)
router.post('/qual-o-valor-do-seu-veiculo', qualValorVeiculo.searchVeiculos)


export default router