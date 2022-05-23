import { swapUrl } from '../../swapi' 


/* Função para chamar uma rota especifica da API externa, nesse caso a SWAPI.
  Utiliza o parâmetro da requisição como uma variação e retorna o 'data' da api externa
*/
export const getVehicles = async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await swapUrl.get(`vehicles/${id}`)
  
        return res.send(data)
        console.log(data)
    } catch(error) {
      res.send({swapApiError: [error.data, error.message]})
    }
  }