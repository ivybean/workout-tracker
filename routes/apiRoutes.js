const db = require("../models/workout");
const router = require("express").Router();

//Display workouts
router.get("/api/workouts", (req, res) => {
  db.find({})
  .then(dbData => {
    res.json(dbData);
  })
  .catch (err => {
    res.json(err);
  })
});

//Display workout range
router.get("/api/workouts/range", (req, res) => {
  db.find({})
  .then(dbData => {
    res.json(dbData);
  })
  .catch(err => {
    res.json(err);
  })
});

//Post new workout
router.post("/api/workouts/", (req, res) => {
  db.create(req.body)
  .then(dbData => {
    res.json(dbData);
  })
  .catch(err => {
    res.json(err);
  })
});


router.put("/api/workouts/:id", (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    { $push: { exercies: req.body } },
    { new: true }
  )
  .then(dbData => {
    res.json(dbData);
  })
  .catch(err => {
    res.json(err);
  })
});

module.exports = router;