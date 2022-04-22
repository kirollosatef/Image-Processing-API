import sharp from 'sharp'
import { imagesDir, resizedImagesDir } from './imagePath.controllor'

const resizeImage = async (
  fileName: string,
  width: number,
  height: number
): Promise<void> => {
  const imagePath = `${imagesDir}/${fileName}.jpg`
  const resizedImagePath = `${resizedImagesDir}/${fileName}_${width}_${height}.jpg`
  try {
    await sharp(imagePath).resize(width, height).toFile(resizedImagePath)
  } catch (err) {
    console.log(`Error while resizing image: ${err}`)
  }
}

export default resizeImage
