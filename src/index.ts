import express from 'express';
import { AppDataSourse } from './data-sourse';

AppDataSourse.initialize().then(() => {

  const app = express()

  app.use(express.json())

  app.get('/', (req, res) => {
    return res.json('Top.!')
  })

  return app.listen(process.env.PORT)
})