import mongoose from 'mongoose'

export const connectDb =  async () => {
    mongoose.connect('mongodb+srv://SYSDBA:masterkey@travels.j3i1q.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
   )
   .then(()=> {console.log('Successful database connection')})
   .catch((err) => console.log(err))
};