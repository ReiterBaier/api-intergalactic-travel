import { server } from '../server'
import { swapUrl } from '../swapi' 

export const getVehicles = function () { server.get('/vehicles/:id' , async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await swapUrl.get(`vehicles/${id}`)
  
        return res.send(data)
        console.log(data)
    } catch(error) {
      res.send({swapApiError: [error.data, error.message]})
    }
  })
}