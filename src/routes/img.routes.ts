import Router from 'express'
import getImage from '../controller/index.controller'
import { imageValidation } from '../controller/validation.controller'
const imgRoutes = Router()

imgRoutes.get('/images', imageValidation(), getImage)

export default imgRoutes
