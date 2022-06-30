import { Router } from 'express'
import * as homeController from '../controllers/homeController'
import * as quantosDeVcExiste from '../controllers/quantosVcExisteController'

const router = Router()

router.get('/', homeController.home )
router.get('/quantos-de-vc-existe', quantosDeVcExiste.index)
router.post('/quantos-de-vc-existe', quantosDeVcExiste.home)

export default router