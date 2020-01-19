const express = require('express');
const router = express.Router();
const Gym = require('../models/Gym')
const mongoose = require('mongoose');


router.get('/', (req, res) => {
  Gym.find({}, (err, gyms) => {
    res.send(gyms);
  });
});


router.get('/:gymId', (req, res) => {
  Gym.findById(req.params.gymId)
  .exec()
  .then(gym => {
    res.send(gym);
  })
  .catch(err => {
    res.send({message: err});
  })
});


router.post('/', (req, res) => {
  const gym = new Gym({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    location: req.body.location,
    hours: {
      sun: req.body.hours.sun,
      mon: req.body.hours.mon,
      tue: req.body.hours.tue,
      wed: req.body.hours.wed,
      thu: req.body.hours.thu,
      fri: req.body.hours.fri,
      sat: req.body.hours.sat,
    },
    webSite: req.body.webSite
  });
  
  gym.save((err, gym) => {
    res.send(gym);
  });
});


module.exports = router;