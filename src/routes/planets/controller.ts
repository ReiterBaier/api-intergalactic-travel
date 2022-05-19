import fetch from 'node-fetch'


export const routePlanets = fetch('http://swapi.dev/api/planets/1/')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))