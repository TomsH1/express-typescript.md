import { Router } from 'express';
import {addDiary, getEntriesWithSensitiveInfo, getFindById} from '../json/diaryServices';
import validateDiary  from '../utils/utils';

const controller = Router();

controller.get('/', (_req, res) => {
    res.send(getEntriesWithSensitiveInfo())
})

controller.get('/:id', (req, res) => {
    const diary = getFindById(Number(req.params.id)) 
    return (diary !== undefined)
    ? res.send(diary)
    : res.send('<h2>404 not found <h2>')
})

controller.post('/', (req, res) => {
    try {
        const addDiaryEntries = addDiary(validateDiary(req.body))
        res.json(addDiaryEntries)
    } catch (error) {
        if(error instanceof Error){res.status(400).send(error.message)}
        else {res.status(400).send(error);}
    }    
})


export default controller; 