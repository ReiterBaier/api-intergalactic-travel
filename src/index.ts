import server from './server'
import { connectDb } from './database/databaseConnection'

/*  Chama a função de conexão com o banco de dados */
connectDb()
server.listen(10550, () => console.log('Server is running on port 10550'))



