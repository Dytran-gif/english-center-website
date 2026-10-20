export type SkillName = 'Listening' | 'Reading' | 'Writing';
export interface ChartDataPoint {
  dateLabel: string; // VD: "Apr 28", "May 5"
  score: number;     // Giá trị phần trăm trên biểu đồ
}

export interface SkillDetailData {
  skillName: SkillName;       // Tên kỹ năng đang chọn
  levelLabel: string;         // VD: "B1 - Intermediate"
  currentScore: number;       // Vòng tròn điểm nhỏ bên phải (VD: 72)
  chartData: ChartDataPoint[];// Dữ liệu vẽ biểu đồ
}