import express from 'express';
import 'express-async-errors';
import './database/connection';
import path from 'path';
import cors from 'cors';

import Routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);
app.use('/uploads', express.static(path.join(__dirname,'..', 'uploads')))
app.use(errorHandler);

//rota = conjunto de tudo
//recurso = usuário
//métodos http = post, get, put, delete
//parâmetros = {
    //Query Params: filtros, buscas, paginação
    //Route Params: identificar um recurso
    //Body: corpo da requisição (enviar dados)
//}

app.listen(3333);

//req & res
//localhost:3333