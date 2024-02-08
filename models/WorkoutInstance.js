import mongoose from 'mongoose';

const { Schema } = mongoose;

const workoutInstanceSchema = new Schema({
    name: String,
    date: {
        type: Date,
        default: Date.now
    },
    createdBy: String,
    exercises: [
        {
            exerciseName: String,
            muscleGroup: String,
            sets: [
                {
                    reps: Number,
                    weight: Number
                }
            ]
        }
    ]
});

const workoutInstance = mongoose.model('WorkoutInstance', workoutInstanceSchema);

export default workoutInstance;