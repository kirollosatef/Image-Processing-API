import { Request, Response } from 'express'
import resizeImage from './resize.controller'
import isExist from './ifImageExist.controller'
import { resizedImagesDir } from './imagePath.controllor'
import imageValidation from '../controller/validation.controller'

const getImage = async (req: Request, res: Response): Promise<void> => {
  const fileName: string = req.query.fileName as string
  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)
  const validation = await imageValidation(fileName, width, height)
  if (validation === 'ok') {
    try {
      const imageExist: boolean = await isExist(fileName, width, height)
      if (!imageExist) {
        await resizeImage(fileName, width, height)
        res
          .status(200)
          .sendFile(`${resizedImagesDir}/${fileName}_${width}_${height}.jpg`)
      } else {
        res
          .status(200)
          .sendFile(`${resizedImagesDir}/${fileName}_${width}_${height}.jpg`)
      }
    } catch (err) {
      console.log(err)
    }
  } else {
    res.status(400).send(validation)
  }
}

export default getImage
