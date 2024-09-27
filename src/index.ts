import dotenv from 'dotenv';
import app from './server'; // Importa la configuración del servidor

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Definir el puerto desde el archivo .env o un valor por defecto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
