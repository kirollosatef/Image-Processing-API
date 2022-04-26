import { promises as fs } from 'fs'
import { resizedImagesDir } from './imagePath.controllor'

const isExist = async (
  fileName: string,
  width: number,
  height: number
): Promise<boolean> => {
  await fs.mkdir(resizedImagesDir, { recursive: true })
  const resizedImagePath = `${resizedImagesDir}/${fileName}_${width}_${height}.jpg`
  try {
    await fs.access(resizedImagePath)
    return true
  } catch {
    return false
  }
}

export default isExist
