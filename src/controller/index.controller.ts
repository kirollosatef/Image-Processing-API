import { Request, Response } from 'express'
import resizeImage from './resize.controller'
import isExist from './ifImageExist.controller'
import { resizedImagesDir } from './imagePath.controllor'

const getImage = async (req: Request, res: Response) => {
  const fileName: string = req.query.fileName as string
  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)
  console.log(`fileName: ${fileName} & width: ${width} & height: ${height}`)
  try {
    const imageExist: boolean = await isExist(fileName, width, height)
    console.log(`imageExist: ${imageExist}`)
    console.time('resizeImageTime')
    if (!imageExist) {
      await resizeImage(fileName, width, height)
      res.sendFile(`${resizedImagesDir}/${fileName}_${width}_${height}.jpg`)
    } else {
      res.sendFile(`${resizedImagesDir}/${fileName}_${width}_${height}.jpg`)
    }
    console.timeEnd('resizeImageTime')
  } catch (err) {
    console.log(err)
  }
}

export default getImage
