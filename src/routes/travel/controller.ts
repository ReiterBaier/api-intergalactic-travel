import { server } from '~/server'
import { travelSchema } from '../../models/travel'



export const createTravel = async function() {server.post('/travel', async (req, res) => {
  const travel = req.body

  try {
    await travelSchema.create(travel)
    return res.status(201).json(travel)
  } catch(error) {
    res.status(400).send({error: error.message})
  }
})
}


/* export const createTravel = async function() {server.post('/travel', async (req, res) => {
  const travelSchema = req.body

  try {
    await travelSchema.create(travelSchema)
    return res.status(201).json(travelSchema)
  } catch(error) {
    res.status(400).send({error: error.message})
  }
})
} 
*/





