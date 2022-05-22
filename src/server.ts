import * as express from 'express'
import { swapUrl } from './api'
import axios from 'axios'


export const server = express()

server.use(express.json())

server.get('/people/:id' , async (req, res) => {
  const { id } = req.params;
  try {
      const { data } = await axios.get(`https://swapi.dev/api/people/${id}`)

      return res.send(data)
      console.log(data)
  } catch(error) {
    res.send({swapApiError: [error.code, error.message]})
  }
})








