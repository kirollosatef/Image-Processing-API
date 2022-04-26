import path from 'path'

const images: string[] = [
  'fjord',
  'encenadaport',
  'palmtunnel',
  'santamonica',
  'icelandwaterfall',
]

const imagesDir = path.join(__dirname, '../../image')

const resizedImagesDir = path.join(__dirname, '../../image/resized')

export { images, imagesDir, resizedImagesDir }
