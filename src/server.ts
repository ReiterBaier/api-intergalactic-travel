import * as express from 'express'
import { ServerResponse } from 'http'
import { getPeople } from './routes/people/controller'
import { getPlanets } from './routes/planets/controller'
import { getStarships } from './routes/starships/controller'
import { getVehicles } from './routes/vehicles/controller'
import { getSpecies } from './routes/species/controller'


export const server = express()

server.use(express.json())
getPeople(server)
getPlanets(server)
getStarships(server)
getVehicles(server)
getSpecies(server)

/* outras rotas, já prontas

server.get('/planets/:id' , async (req, res) => {
  const { id } = req.params;
  try {
      const { data } = await axios.get(`planets/${id}`)

      return res.send(data)
      console.log(data)
  } catch(error) {
    res.send({swapApiError: [error.data, error.message]})
  }
})

server.get('/species/:id' , async (req, res) => {
  const { id } = req.params;
  try {
      const { data } = await axios.get(`species/${id}`)

      return res.send(data)
      console.log(data)
  } catch(error) {
    res.send({swapApiError: [error.data, error.message]})
  }
})

server.get('/starships/:id' , async (req, res) => {
  const { id } = req.params;
  try {
      const { data } = await axios.get(`starships/${id}`)

      return res.send(data)
      console.log(data)
  } catch(error) {
    res.send({swapApiError: [error.data, error.message]})
  }
})

server.get('/vehicles/:id' , async (req, res) => {
  const { id } = req.params;
  try {
      const { data } = await axios.get(`vehicles/${id}`)

      return res.send(data)
      console.log(data)
  } catch(error) {
    res.send({swapApiError: [error.data, error.message]})
  }
})

*/







