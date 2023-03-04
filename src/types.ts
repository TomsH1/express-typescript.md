// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'snowny'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Snowny = 'snowny'
}

export enum Visibility{
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
    Clear = 'clear'
}

export interface DiaryEntries {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

export type NonSensitiveDiaryEntry  = Omit<DiaryEntries, 'comment'>

export type newDiaryEntry = Omit<DiaryEntries, 'id'>

// interface SpecialDiaryEntries extends DiaryEntries{
//     flightNumber: number;
// }