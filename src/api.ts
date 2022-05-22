import axios from 'axios';

export const swapUrl =  async () => {axios.create ({
baseURL: 'https://swapi.dev/api/'
  })
}


