import { server } from '../../server'

const mainBody = []

export const postTravel = function () { server.post('/travel' , async (req, res) => {
  const {
          pilot,
          copilot,
          starship,
          homePlanet,
          destionationPlanet  }   = req.body;

  const objectBody = {
    pilot,
    copilot,
    starship,
    homePlanet,
    destionationPlanet
  }

  mainBody.push(objectBody)

  return res.status(201).json(objectBody)
})
}