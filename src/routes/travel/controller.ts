import { travelModel } from '../../models/travel'

export const createTravel = async (req, res) => {
  try {
    const travel = new travelModel(req.body)
    await travel.save()
    return res.status(201).json(travel)
  } catch(error) {
    res.status(400).send({error: error.message})
  }
}

