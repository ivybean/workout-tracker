const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: 'You must include the name of your exercise'
      },
      type: {
        type: String,
        trim: true,
        required: 'You must include the type of exercise'
      },
      duration: {
        type: Number,
        trim: true,
        required: 'You must include the duration (in minutes) of your exercise'
      },
      weight: {
        type: Number,
        trim: true
      },
      sets: {
        type: Number,
        trim: true
      },
      reps: {
        type: Number,
        trim: true
      },
      distance: {
        type: Number,
        trim: true
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;