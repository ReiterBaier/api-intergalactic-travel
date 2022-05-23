import { travelModel } from '../../models/travel'

export const createTravel = async (req, res) => {
  try {
    const travel = new travelModel(req.body)
    //validatePilotAndCopilotSpecies()
    await travel.save()
    return res.status(201).json(travel)
  } catch(error) {
    res.status(400).send({error: error.message})
  }
}


/*const validatePilotAndCopilotSpecies = ({pilot, copilot}: {pilot:string, copilot:string}) => {
  const species = '' // funcao que retorna a especie
  if (false) { //falha
    throw new Error('Deve ser um droid')
  }
}*/
