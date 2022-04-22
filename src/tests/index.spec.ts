import isExist from '../controller/ifImageExist.controller'
import resizeImage from '../controller/resize.controller'
import supertest from 'supertest'
import imgRoutes from '../routes/img.routes'

describe('Test if Image Exist or Not', () => {
  it('expect checkIfImagesExist function defined ', () => {
    expect(isExist('labla', 200, 200)).toBeDefined()
  })
  it('expect checkIfImagesExist function to return false with file name image_200_200.jpg ', () => {
    resizeImage('test', 200, 200)
    expect(isExist('test', 200, 200)).toBeTruthy()
  })
})

describe('Test endpoint', () => {
  it('expect endpoint to return 200', async () => {
    const response = await supertest(imgRoutes).get(
      '/images?fileName=fjord&width=100&height=200'
    )
    expect(response.status).toBe(200)
  })
})
