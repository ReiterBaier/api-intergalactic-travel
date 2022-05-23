import * as express from 'express'
import { ServerResponse } from 'http'
import { getPeople } from './routes/people/controller'
import { getPlanets } from './routes/planets/controller'
import { getStarships } from './routes/starships/controller'
import { getVehicles } from './routes/vehicles/controller'
import { getSpecies } from './routes/species/controller'
import { getTravel } from './routes/travel/controller'
import { createTravel } from './routes/travel/controller'


const server = express()

/* Middleware que intercepta todas as requisições e as transmiti como um json */
server.use(express.json())


/* Todas as rotas disponíveis da API, chamando as funções de cada rota que consta em cada especifco controller.*/
server.get('/people/:id', getPeople)
server.get('/planets/:id', getPlanets)
server.get('/starships/:id', getStarships)
server.get('/vehicles/:id', getVehicles)
server.get('/species/:id', getSpecies)
server.get('/travel', getTravel)
server.post('/travel', createTravel)

export default server



