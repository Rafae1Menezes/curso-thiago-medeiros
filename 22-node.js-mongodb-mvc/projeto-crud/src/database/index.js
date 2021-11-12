const mongoose = require('mongoose')

function connect() {
    //conectar ao banco de dados
    mongoose.connect('mongodb://localhost:27017/projeto-crud?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')


    const db = mongoose.connection

    //uma vez que for aberto o db, execute a callback
    db.once('open', () => {
        console.log('Connected to database!')
    })

    //caso der erro, execute a callback
    db.on('error', console.error.bind(console, 'connection error:'))
}

module.exports = {
    connect
}