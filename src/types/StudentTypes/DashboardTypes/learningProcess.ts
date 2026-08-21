export interface LearningSkill {
    name: string;
    progress: number;
    color: string;
}

export interface LearningOverview {
    title: string;
    fromDate: string;
    description: string;
    modules: number;
    lessons: number;
    hours: number;
    weeklyHours: number;
}

export interface LearningMessage {
    title: string;
    description: string;
}

export interface LearningProcess {
    overview: LearningOverview;
    skills: LearningSkill[];
    message: LearningMessage;
}