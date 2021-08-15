import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/productapi', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify: true,
    useCreateIndex: true,
})
.then(db => console.log('DB coneccting'))
.catch( error => console.log(error))