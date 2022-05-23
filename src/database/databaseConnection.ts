import mongoose from 'mongoose'


/* Faz a conexão com a base de dados mongo Db (na AWS da amazon) */
export const connectDb =  async () => {
    mongoose.connect('mongodb+srv://SYSDBA:masterkey@travels.j3i1q.mongodb.net/?retryWrites=true&w=majority')
   .then(()=> {console.log('Successful database connection')})
   .catch((err) => console.log(err))
};

