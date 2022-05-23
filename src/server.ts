import * as express from 'express'
import { ServerResponse } from 'http'
import { getPeople } from './routes/people/controller'
import { getPlanets } from './routes/planets/controller'
import { getStarships } from './routes/starships/controller'
import { getVehicles } from './routes/vehicles/controller'
import { getSpecies } from './routes/species/controller'
import { createTravel } from './routes/travel/controller'


const server = express()

/* Middleware que intercepta a requisição e a transmiti como um json */
server.use(express.json())

server.get('/people/:id', getPeople)
server.get('/planets/:id', getPlanets)
server.get('/starships/:id', getStarships)
server.get('/vehicles/:id', getVehicles)
server.get('/species/:id', getSpecies)
server.post('/travel', createTravel)

export default server



