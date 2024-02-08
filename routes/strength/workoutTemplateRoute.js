import express from 'express';

import WorkoutTemplate from "../../models/WorkoutTemplate.js";

const router = express.Router();

router.post('/add-workout-template', async (req, res) => {
    const workoutTemplate = await WorkoutTemplate.create(req.body);

    res.status(200).json(workoutTemplate);
});

router.put('/update-workout-template/:workoutTemplateId', async (req, res) => {
    const updatedWorkoutTemplate = await WorkoutTemplate.updateOne(
        {
            _id: req.params.workoutTemplateId
        },
        req.body
    );

    res.status(200).json(updatedWorkoutTemplate);
});

router.delete('/delete-workout-template/:workoutTemplateId', async (req, res) => {
    const deletedWorkoutTemplate = await WorkoutTemplate.deleteOne(
        {
            _id: req.params.workoutTemplateId
        }
    );

    res.status(200).json(deletedWorkoutTemplate);
});

router.get('/all-workout-templates/:userId', async (req, res) => {
    const allWorkoutTemplates = await WorkoutTemplate.find(
        {
            userId: req.params.userId
        }
    );

    res.status(200).json(allWorkoutTemplates);
});

export default router;