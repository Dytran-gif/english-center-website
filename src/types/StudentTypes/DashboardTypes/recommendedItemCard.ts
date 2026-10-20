// Dành cho danh sách "Recommended for you"
export interface RecommendedItem {
  id: string;
  tag: 'Course' | 'Practice' | 'Self-study';
  title: string;
  levelInfo: string; // VD: "Level B1 • 12 lessons"
  imageUrl?: string;
}