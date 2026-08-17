export interface StudyTimeItem {
    day: string;
    minutes: number;
}

export interface StudyTime {
    data: StudyTimeItem[];
    goal: number;
}