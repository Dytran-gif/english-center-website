import type { RecommendedItem } from "../../../types/StudentTypes/DashboardTypes";
import imageMock from "../../../assets/images/next-lesson-mock.jpg";
export const recommendedData: RecommendedItem[] = [
  {
    id: "rec-1",
    tag: "Course",
    title: "Business English",
    levelInfo: "Level B1 • 12 lessons",
    imageUrl: imageMock // Ảnh nhóm người họp
  },
  {
    id: "rec-2",
    tag: "Practice",
    title: "Travel Vocabulary",
    levelInfo: "Level A2 • 10 exercises",
    imageUrl: imageMock // Ảnh cầu tháp London
  },
  {
    id: "rec-3",
    tag: "Self-study",
    title: "Improving Speaking Fluency",
    levelInfo: "Level B1 • 8 lessons",
    imageUrl: imageMock // Ảnh người đeo tai nghe dùng laptop
  },
  {
    id: "rec-4",
    tag: "Course",
    title: "Grammar Bootcamp",
    levelInfo: "Level B1 • 15 lessons",
    imageUrl: imageMock // Ảnh bàn tay gõ phím
  }
];