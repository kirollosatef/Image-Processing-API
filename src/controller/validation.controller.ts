import { images } from './imagePath.controllor'
import { Response } from 'express'
const imageValidation = async (
  fileName: string,
  width: number,
  height: number,
  res: Response
): Promise<void> => {
  const isExist = images.find((img) => img === fileName)
  if (!isExist) {
    res.status(400).send('File not found')
  }
  if (!width) res.status(400).send('width required')
  if (!height) res.status(400).send('height required')
  if (width < 0) res.status(400).send('width must be greater than 0')
  if (height < 0) res.status(400).send('height must be greater than 0')
  if (height > 1080) res.status(400).send('height must be less than 1080')
  if (width > 1080) res.status(400).send('width must be less than 1080')
}

export default imageValidation
