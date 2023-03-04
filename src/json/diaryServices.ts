import { DiaryEntries, newDiaryEntry } from '../types';
import diaryData from './diaries.json';
import { NonSensitiveDiaryEntry } from '../types';

const diaries: DiaryEntries[] = diaryData as DiaryEntries[];

export const getEntries = (): DiaryEntries[] => diaries;

export const getFindById = (id: number): NonSensitiveDiaryEntry | undefined => {
    const entryId = diaries.find(diary => diary.id === id)
    if(entryId != null){
        const {comment, ...restOfDiary} = entryId
        return restOfDiary
    }
    return entryId
}


export const addDiary = (newDiaryEntrie : newDiaryEntry): DiaryEntries => {
    const newDiary = {
        id: Math.max(...diaries.map(diary => diary.id))+1,
        ...newDiaryEntrie
    }
    diaries.push(newDiary)
    return newDiary;
};


export const getEntriesWithSensitiveInfo = (): 
NonSensitiveDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return{
            id, date, weather, visibility
        }
    })
}

