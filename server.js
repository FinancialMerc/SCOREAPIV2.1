require('dotenv').config();
const express = require('express');
const authRoutes = require('./src/routes/authRoutes');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;
const app = express();
const getTokenRoute = require('./src/routes/getToken');
const fileRoutes = require('./src/routes/fileRoutes')
const generateNipRoutes = require('./src/routes/generateNip');
const verifyNipRoutes = require('./src/routes/verifyNip'); 
const generateLinkRoutes = require('./src/routes/generateLink');
const formRoutes = require('./src/routes/validateForm');
const validateTokenRoutes = require('./src/routes/validateForm');

app.use(express.json());
app.use(cors());

// Middleware para manejo de errores centralizado
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({ error: err.message || 'Ocurrió un error inesperado' });
});

// Ruta para autenticar
app.use('/api/auth', authRoutes);

app.get('/generate-pdf/:fileName', async (req, res, next) => {
    try {
        const { fileName } = req.params;
        const pdfFilePath = path.join(__dirname, 'src/Downloads', fileName);

        console.log("Intentando descargar archivo en ruta:", pdfFilePath); // Para verificar la ruta

        // Verificar si el archivo existe
        await fs.access(pdfFilePath);

        // Enviar el archivo PDF como respuesta
        res.download(pdfFilePath, fileName, (err) => {
            if (err) {
                console.error('Error al intentar descargar el archivo:', err);
                return next(new Error('Error al descargar el archivo'));
            } else {
                console.log("Archivo descargado exitosamente:", fileName);
            }
        });
    } catch (error) {
        console.error('Error al generar o descargar el PDF:', error);
        next(new Error('Error al generar o descargar el PDF'));
    }
});

app.use('/api', getTokenRoute);

app.use('/api/files', fileRoutes);

app.get('/', (res) => {
    res.send('Welcome to the API');
});

app.use('/api/nip', generateNipRoutes);
app.use('/api/nip', verifyNipRoutes);
app.use('/api/links', generateLinkRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/links', validateTokenRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
