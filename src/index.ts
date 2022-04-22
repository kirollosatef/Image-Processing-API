import express from 'express'
import imgRouter from './routes/img.routes'
const app = express()
const port = 3000

app.use('/api', imgRouter)

app.listen(port, () => {
  console.log(`server is up and running in port ${port}`)
})
