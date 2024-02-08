import mongoose from 'mongoose';

const { Schema } = mongoose;

const workoutTemplateSchema = new Schema({
    userId: String,
    name: String,
    date: {
        type: Date,
        default: Date.now
    },
    createdBy: String,
    exercises: [
        {
            exerciseName: String,
            muscleGroup: String
        }
    ]
});

const workoutTemplate = mongoose.model('WorkoutTemplate', workoutTemplateSchema);

export default workoutTemplate;





