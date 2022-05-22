import * as express from 'express'
import { ServerResponse } from 'http'
import { getPeople } from './routes/people/controller'
import { getPlanets } from './routes/planets/controller'
import { getStarships } from './routes/starships/controller'
import { getVehicles } from './routes/vehicles/controller'
import { getSpecies } from './routes/species/controller'
import { createTravel } from './routes/travel/controller'



export const server = express()

server.use(express.json())
getPeople(server)
getPlanets(server)
getStarships(server)
getVehicles(server)
getSpecies(server)
createTravel(server)




