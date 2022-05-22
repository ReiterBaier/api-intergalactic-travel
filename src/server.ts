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
/**
 * export const getPeople = function () { server.get('/people/:id' , async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await swapUrl.get(`people/${id}`)
  
        return res.send(data)
        console.log(data)
    } catch(error) {
      res.send({swapApiError: [error.data, error.message]})
    }
  })
}
 */

getPeople(server)
getPlanets(server)
getStarships(server)
getVehicles(server)
getSpecies(server)
createTravel(server)




