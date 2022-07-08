import { Router } from 'express'
import * as authCtrl from '../controllers/auth.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import CharSheetCtrl from '../controllers/charSheet.js'
const router = Router()

/*---------- Public Routes ----------*/
router.get('/', charSheetCtrl.index)
router.get('/new', charSheetCtrl.new)
router.get('/:id', charSheetCtrl.show)
router.post('/', charSheetCtrl.create)
/*---------- Protected Routes ----------*/


export { router }