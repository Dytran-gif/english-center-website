import type { LearningProcess } from "../../../types/StudentTypes/DashboardTypes";

export const learningProcessData: LearningProcess = {
    overview: {
        title: "English skill overview",
        fromDate: "01 Dec 2025",
        description:
            "Your learning progress for this month is shown below. You've steadily improved every time.",
        modules: 15,
        lessons: 45,
        hours: 10.5,
        weeklyHours: 10.5,
    },

    skills: [
        {
            name: "Reading",
            progress: 20,
            color: "green",
        },

        {
            name: "Listening",
            progress: 78,
            color: "blue",
        },

        {
            name: "Writing",
            progress: 80,
            color: "purple",
        },

        {
            name: "Speaking",
            progress: 10,
            color: "orange",
        },
    ],

    message: {
        title: "Great job! 🎉",
        description:
            "You have completed 80% of your learning goals this month. Keep up the great work and continue building your four English skills every day!",
    },
};