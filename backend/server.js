require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const workoutRoutes = require('./routes/workouts');

const app = express();
app.use(cors());
app.use(express.json());

// serve frontend static files when deployed in single container
app.use(express.static('../frontend'));

app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // sync models
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
  }
})();