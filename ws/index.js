// IMPORTS
import express from 'express';
import morgan from 'morgan';
import connectDB from './database.js';
import router from './src/routes/salao.routes.js';
import cors from 'cors'

// VARIABLES
const app = express()
app.set('port', 8000)

// MIDDLEWARES
app.use(cors()); // Habilita CORS para todas as origens
app.use(express.json());
app.use(morgan('dev'));

// ROTAS
app.use('/salao', router)

app.listen(app.get('port'), ()=>{
    console.log(`Servidor iniciado na porta ${app.get('port')}`);
    connectDB()
})