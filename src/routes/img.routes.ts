import Router from 'express'
import getImage from '../controller/index.controller'
const imgRoutes = Router()

imgRoutes.get('/images', getImage)

export default imgRoutes
