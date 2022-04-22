import { query } from 'express-validator'
import { images } from './imagePath.controllor'

const imageValidation = () => [
  query('width')
    .exists()
    .withMessage('width is required')
    .toInt()
    .isInt({ max: 1080 })
    .withMessage('The max width should be 1000'),
  query('height')
    .exists()
    .withMessage('Image height is required')
    .toInt()
    .isInt({ max: 1080 })
    .withMessage('The max height should be 1000'),
  query('filename')
    .exists()
    .withMessage('Image name is required')
    .isIn(images)
    .withMessage('The image is not exist'),
]

export { imageValidation }
