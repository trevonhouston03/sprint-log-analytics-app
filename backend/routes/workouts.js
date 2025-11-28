const express = require('express');
const router = express.Router();
const { Workout } = require('../models');

router.post('/', async (req, res) => {
  try {
    const { date, distance, time, notes } = req.body;
    if (!date || distance == null || time == null) return res.status(400).json({ error: 'date, distance, and time required' });
    const created = await Workout.create({ date, distance, time, notes });
    return res.status(201).json(created);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const list = await Workout.findAll({ order: [['createdAt', 'DESC']] });
    return res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;