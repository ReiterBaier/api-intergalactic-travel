import { travelModel } from '../../models/travel'

export const createTravel = async (req, res) => {
  try {
    const travel = new travelModel(req.body) /* Espera que o body da requisição seja de acordo com o modelo de body */
    await travel.save() /* Salva a viagem no banco de dados */
    return res.status(201).json(travel) /* Retorna o registro da viagem gravado no banco de dados */
  } catch(error) {
    res.status(400).send({error: error.message})
  }
}


export const getTravel = async (req, res) => {
  try {
    const travelList = await travelModel.find()
    return res.render(travelList)
  } catch(error) {
    res.status(500).send({error: error.message})
  }
}
