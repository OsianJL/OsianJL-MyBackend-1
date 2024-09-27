import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Crear una instancia de Express
const app: Application = express();

// Middlewares
app.use(express.json()); // Para que Express entienda JSON
app.use(express.urlencoded({ extended: true })); // Para entender datos form-urlencoded
app.use(morgan('dev')); // Para loguear las peticiones HTTP
app.use(cors()); // Para permitir peticiones de otros dominios

// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

export default app;
