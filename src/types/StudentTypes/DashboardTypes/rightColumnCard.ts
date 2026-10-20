// Dành cho thẻ "My Learning Goal"
export interface LearningGoal {
  title: string; // VD: "Reach B1 level"
  progress: number; // VD: 68
  targetDate: string; // VD: "30 Jun 2025"
  goalTime?: string; // VD: "6 months" (tùy chọn, có thể không có)
}

// Dành cho danh sách "Quick Actions"
export interface QuickAction {
  id: string;
  iconType: 'play' | 'document' | 'calendar' | 'book';
  label: string;
}

// Dành cho danh sách "Recent Notifications"
export interface NotificationItem {
  id: string;
  iconType: 'feedback' | 'payment' | 'lesson' | 'schedule';
  title: string;
  description: string; // Bao gồm cả category và time. VD: "Speaking Practice • 2 hours ago"
}