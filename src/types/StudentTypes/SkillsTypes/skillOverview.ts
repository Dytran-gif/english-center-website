export type SkillName = 'Listening' | 'Reading' | 'Writing';
export interface SkillProgressItem {
  id: string;
  skillName: SkillName;
  progress: number;       // Phần trăm hoàn thành (VD: 72)
  levelLabel: string;     // VD: "B1 - Intermediate"
}

export interface MonthlyTrend {
  percentage: number;     // Mức thay đổi (VD: 12)
  isIncrease: boolean;    // true: Tăng (màu xanh), false: Giảm (màu đỏ)
}

export interface YourSkillsOverviewData {
  overallProgress: number;     // Vòng tròn tổng (VD: 68)
  trend: MonthlyTrend;         // So sánh với tháng trước
  selectedCEFRLevel: string;   // Dropdown góc phải (VD: "B1")
  skills: SkillProgressItem[]; // Danh sách 4 kỹ năng
}