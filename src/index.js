const express = require('express');
const mascotasRoutes = require("./routes/mascotas.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', mascotasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en  http://localhost:${PORT}`);
});