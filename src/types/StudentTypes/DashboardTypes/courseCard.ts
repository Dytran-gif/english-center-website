// Dành cho danh sách "Continue Learning"
export interface CourseCard {
  id: string;
  unit: string;
  title: string;
  type: string; // VD: Listening, Speaking, Reading...
  lesson: string;
  progress: number;
  imageUrl?: string;
}