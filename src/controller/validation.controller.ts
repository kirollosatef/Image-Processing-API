import { images } from './imagePath.controllor'

const imageValidation = async (
  fileName: string,
  width: number,
  height: number
): Promise<string> => {
  const isExist = images.find((img) => img === fileName)
  if (!isExist) {
    return 'File not found'
  }
  if (!width) return 'width required'
  if (!height) return 'height required'
  if (width < 0) return 'width must be greater than 0'
  if (height < 0) return 'height must be greater than 0'
  if (height > 1080) return 'height must be less than 1080'
  if (width > 1080) return 'width must be less than 1080'
  return 'ok'
}

export default imageValidation
