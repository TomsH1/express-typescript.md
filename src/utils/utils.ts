import { newDiaryEntry, Visibility, Weather } from '../types';

const isString = (string: any): boolean =>{
    return typeof string === 'string' 
} 

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const isWeatherEnabled = (weather: any): boolean =>{
    return Object.values(Weather).includes(weather)
}

const isVisibilityEnabled = (visibility: any): boolean => {
    return Object.values(Visibility).includes(visibility)
}

const parseDate = (dateFromRequest: any): string => {
    if(!isString(dateFromRequest) ||!isDate(dateFromRequest)){
        throw new Error('Incorrect or missing date field');
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if(!isWeatherEnabled(weatherFromRequest)){
        throw new Error('Incorrect or missing weather field');
    }
    return weatherFromRequest 
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if(!isVisibilityEnabled(visibilityFromRequest)){
        throw new Error('Incorrect or missing visibility field')
    }
    return visibilityFromRequest
}


const parseComment = (commentFromRequest: any): string =>{
    if(!isString(commentFromRequest)){
        throw new Error('Incorrect or missing comment field')
    }
    return commentFromRequest;
} 

const validateDiary = (object: any): newDiaryEntry => {
    const newEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment),

    }
    return newEntry
}

export default validateDiary;