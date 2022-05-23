import server from './server'
import { connectDb } from './database/databaseConnection'

connectDb()
server.listen(10550, () => console.log('Server is running on port 10550'))



