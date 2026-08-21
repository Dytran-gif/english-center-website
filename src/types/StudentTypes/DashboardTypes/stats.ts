export interface StatItem {
    value: number;
    change?: string;
    message?: string;
}

export interface DashboardStats {
    points: StatItem;
    streak: StatItem;
    courses: StatItem;
    attendance: StatItem;
}