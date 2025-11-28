const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/slaa_db', {
  dialect: 'postgres',
  logging: false,
  dialectOptions: process.env.NODE_ENV === 'production' ? { ssl: { rejectUnauthorized: false } } : {}
});

const Workout = sequelize.define('Workout', {
  date: { type: DataTypes.STRING, allowNull: false },
  distance: { type: DataTypes.FLOAT, allowNull: false },
  time: { type: DataTypes.FLOAT, allowNull: false },
  notes: { type: DataTypes.TEXT }
}, {
  timestamps: true
});

module.exports = { sequelize, Workout };