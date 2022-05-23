import { swapUrl } from '../../swapi' 

export const getPlanets = async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await swapUrl.get(`planets/${id}`)
  
        return res.send(data)
        console.log(data)
    } catch(error) {
      res.send({swapApiError: [error.data, error.message]})
    }
  }

  