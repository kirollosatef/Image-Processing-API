import isExist from '../controller/ifImageExist.controller'
import resizeImage from '../controller/resize.controller'
import supertest from 'supertest'
import app from '../index'
import { promises as fs } from 'fs'
import { resizedImagesDir } from '../controller/imagePath.controllor'
const request = supertest(app)

describe('Test if Image Exist or Not', () => {
  it('expect checkIfImagesExist function defined ', () => {
    expect(isExist('labla', 200, 200)).toBeDefined()
  })
  it('expect checkIfImagesExist function to return false with file name fjord_200_200.jpg ', async () => {
    await resizeImage('fjord', 200, 200)
    expect(isExist('fjord', 200, 200)).toBeTruthy()
    fs.unlink(resizedImagesDir + '/fjord_200_200.jpg')
  })
})

describe('Test endpoint', () => {
  it('expect endpoint to return 200', async () => {
    const response = await request.get(
      '/api/images?fileName=fjord&width=100&height=200'
    )
    expect(response.status).toBe(200)
    fs.unlink(resizedImagesDir + '/fjord_100_200.jpg')
  })
})
