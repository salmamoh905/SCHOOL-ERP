const express = require ('express');
const app = express();
const PORT = 8080;
const {readdirSync} = require('fs')
app.use(express.json());
const dotenv = require ('dotenv');
const {Sequelize} = require("sequelize")





//use middleware modules

//routes

readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

//setup database

//connecting to the db
// const db = new Sequelize ('akeosh','salmauser','salma@1234',{
//     host: 'localhost',
//     dialect:'mysql',

// })
// //testing the connection
// try{
//      db.authenticate();
//     console.log('connection has been established');

// }catch(err){
//     console.error('unable to connect to the db')
// }


app.listen (PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
