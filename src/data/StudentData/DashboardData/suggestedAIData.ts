import type { AISuggestion } from "../../../types/StudentTypes/DashboardTypes";

export const aiSuggestedData: AISuggestion[] = [
    {
        id: 1,
        type: "In your process",
        title: "Listening skill",
        subtitle: "Module 2",
        progress: 80,
        action: "Continue",
        actionType: "continue",
    },

    {
        id: 2,
        type: "Practice",
        title: "Vocabulary",
        subtitle: "10 new vocabulary words about technology",
        progress: null,
        action: "Start",
        actionType: "start",
    },

    {
        id: 3,
        type: "Need improvement",
        title: "Grammar",
        subtitle: "Common structures used in technology topics",
        progress: null,
        action: "Start",
        actionType: "start",
    },
];