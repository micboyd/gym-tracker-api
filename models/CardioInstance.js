import mongoose from 'mongoose';

const { Schema } = mongoose;

const cardioInstanceSchema = new Schema({
    cardioType: String,
    date: {
        type: Date,
        default: Date.now
    },
    createdBy: String,
    distance: Number,
    time: String,
    averagePace: String,
    calories: Number
});

const cardioInstance = mongoose.model('CardioInstance', cardioInstanceSchema);

export default cardioInstance;