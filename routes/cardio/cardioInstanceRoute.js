import express from 'express';

import CardioInstance from "../../models/CardioInstance.js";

const router = express.Router();

router.post('/add-cardio-instance', async (req, res) => {
    const cardioInstance = await CardioInstance.create(req.body);

    res.status(200).json(cardioInstance);
});

router.put('/update-cardio-instance/:cardioInstanceId', async (req, res) => {
    const updatedCardioInstance = await CardioInstance.updateOne(
        {
            _id: req.params.cardioInstanceId
        },
        req.body
    );

    res.status(200).json(updatedCardioInstance);
});

router.delete('/delete-cardio-instance/:cardioInstanceId', async (req, res) => {
    const deletedCardioInstance = await CardioInstance.deleteOne(
        {
            _id: req.params.cardioInstanceId
        }
    );

    res.status(200).json(deletedCardioInstance);
});

router.get('/all-cardio-instances/:userId', async (req, res) => {
    const allCardioInstances = await CardioInstance.find(
        {
            createdBy: req.params.userId
        }
    );

    res.status(200).json(allCardioInstances);
});

export default router;