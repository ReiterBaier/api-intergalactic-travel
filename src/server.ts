import { Express } from 'express'
import { createExpressServer, RoutingControllersOptions } from 'routing-controllers'

const app: Express = createExpressServer

export const server = async () => {
    console.log('----------------------------------INICIANDO O SERVIDOR---------------------------------------------')
  
    await connect()
  
    return app
  }