const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const DarkSky = require('dark-sky')
const darksky = new DarkSky(process.env.SKY_KEY)

app.use(cors());
app.use(bodyParser.json());

app.post('/weather', async(req, res, next) => {
  try {
    const {latitude, longitude} = req.body
    const weather = await darksky
      .options({
        latitude,
        longitude,
        lang: 'es',
        units: 'si'
      })
      .get();
     res.status(200).json(weather);
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
