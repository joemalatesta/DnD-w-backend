import { Router } from 'express'

import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as charSheetCtrl from '../controllers/charSheet.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use( decodeUserFromToken )
router.get( '/', charSheetCtrl.index )
router.get( '/myIndex', checkAuth, charSheetCtrl.myIndex)
router.post('/', checkAuth, charSheetCtrl.create)
router.delete('/:id', checkAuth, charSheetCtrl.delete)
router.put('/:id', checkAuth, charSheetCtrl.update)


export { router }

// router.get('/new', charSheetCtrl.new)
// router.get('/:id', charSheetCtrl.show)