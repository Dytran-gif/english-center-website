import type { Course } from "../../../types/StudentTypes/CoursesTypes";
import { schedulesByCourseId } from "./courseBottomData";
import imageMock from "../../../assets/images/next-lesson-mock.jpg";

export const coursesData: Course[] = [
    {
        id: "c1",
        title: "General English",
        description: "Build a solid foundation in English with practical and everyday communication skills.",
        level: "Beginner",
        imageUrl: imageMock,
        durationHours: 60,
        studentCapacity: "12-15 students",
        skills: ["Speaking", "Listening", "Grammar"],
        price: 2500000,
        availableClasses: schedulesByCourseId["c1"] || []
    },
    {
        id: "c2",
        title: "Practical Speaking",
        description: "Improve your speaking confidence in real-life situations and daily conversations.",
        level: "Intermediate",
        imageUrl: imageMock,
        durationHours: 45,
        studentCapacity: "10-12 students",
        skills: ["Speaking", "Pronunciation", "Vocabulary"],
        price: 2200000,
        availableClasses: schedulesByCourseId["c2"] || []
    },
    {
        id: "c3",
        title: "Business English",
        description: "Develop your professional communication skills for the workplace and business environment.",
        level: "Advanced",
        imageUrl: imageMock,
        durationHours: 60,
        studentCapacity: "12-15 students",
        skills: ["Speaking", "Writing", "Listening"],
        price: 2800000,
        availableClasses: schedulesByCourseId["c3"] || []
    },
    {
        id: "c4",
        title: "Listening & Comprehension",
        description: "Train your listening skills with authentic materials and real-life topics.",
        level: "Intermediate",
        imageUrl: imageMock,
        durationHours: 45,
        studentCapacity: "10-15 students",
        skills: ["Listening", "Vocabulary", "Pronunciation"],
        price: 2000000,
        availableClasses: schedulesByCourseId["c4"] || []
    },
    {
        id: "c5",
        title: "Academic Writing",
        description: "Learn how to write essays, reports and academic texts effectively.",
        level: "Advanced",
        imageUrl: imageMock,
        durationHours: 40,
        studentCapacity: "10-12 students",
        skills: ["Writing", "Grammar", "Vocabulary"],
        price: 2000000,
        availableClasses: schedulesByCourseId["c5"] || []
    },
    {
        id: "c6",
        title: "English for Daily Life",
        description: "Use English confidently in everyday situations like travel, shopping, and socializing.",
        level: "Beginner",
        imageUrl: imageMock,
        durationHours: 45,
        studentCapacity: "12-15 students",
        skills: ["Speaking", "Listening", "Vocabulary"],
        price: 2000000,
        availableClasses: schedulesByCourseId["c6"] || []
    }
];