import mongoose from 'mongoose'
import config from './config'


if(config.env == 'local'){
    mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify: true,
        useCreateIndex: true,
    })
    .then(db => console.log('DB coneccting'))
    .catch( error => console.log(error))
}else{
    mongoose.connect(`mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
    })
        .then(db => console.log('DB coneccting'))
        .catch(error => console.log(error))
}

