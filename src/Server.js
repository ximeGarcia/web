// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/generate_report', (req, res) => {
  const { startDate, endDate } = req.body;

  // Aquí puedes generar el reporte utilizando las fechas proporcionadas
  // y devolver el resultado como una respuesta al cliente
  const reportResult = `Reporte generado desde ${startDate} hasta ${endDate}`;

  res.json({ result: reportResult });
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
