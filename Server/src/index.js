const express = require('express');
const myRouter = require('./routes/index');
const morgan = require('morgan');
const server = express();
const PORT = 3001;


const { conn } = require('./DB_connection');


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(morgan("dev"));
server.use(express.json());

server.use('/rickandmorty', myRouter);

conn.sync({ force: false }).then(() => {
    console.log("Se conecto exitosamente a mi DB")
    server.listen(PORT, () =>
        console.log('Server raised in port: ' + PORT)
    );
})
.catch((err) => console.log(err));

