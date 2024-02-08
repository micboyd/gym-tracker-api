import express from 'express';

import WorkoutInstance from "../../models/WorkoutInstance.js";

const router = express.Router();

router.post('/add-workout-instance', async (req, res) => {
    const workoutInstance = await WorkoutInstance.create(req.body);

    res.status(200).json(workoutInstance);
});

router.put('/update-workout-instance/:workoutInstanceId', async (req, res) => {
    const updatedWorkoutInstance = await WorkoutInstance.updateOne(
        {
            _id: req.params.workoutInstanceId
        },
        req.body
    );

    res.status(200).json(updatedWorkoutInstance);
});

router.delete('/delete-workout-instance/:workoutInstanceId', async (req, res) => {
    const deletedWorkoutInstance = await WorkoutInstance.deleteOne(
        {
            _id: req.params.workoutInstanceId
        }
    );

    res.status(200).json(deletedWorkoutInstance);
});

router.get('/all-workout-instances/:userId', async (req, res) => {
    const allWorkoutInstances = await WorkoutInstance.find(
        {
            createdBy: req.params.userId
        }
    );

    res.status(200).json(allWorkoutInstances);
});

export default router;