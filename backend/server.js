require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { sequelize } = require('./models');
const workouts = require('./routes/workouts');

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend static files in production or local
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.use('/api/workouts', workouts);

// default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Startup error:', err);
  }
})();