import type { User, Enrollment } from "../types";

// Demo-only accounts — the project has no real backend/auth yet (see docs/6).
export const demoUser: User = {
  user_id: 1,
  full_name: "Lê Văn Duy",
  email: "duy@example.com",
  phone: "0901234567",
  role: "student",
  created_at: "2026-07-01T08:00:00",
};

export const enrollments: Enrollment[] = [
  {
    enrollment_id: 1,
    user_id: 1,
    course_id: 1,
    enroll_date: "2026-07-10",
    status: "confirmed",
  },
  {
    enrollment_id: 2,
    user_id: 1,
    course_id: 5,
    enroll_date: "2026-07-20",
    status: "pending",
  },
];

export function getEnrollmentsByUser(userId: number): Enrollment[] {
  return enrollments.filter((e) => e.user_id === userId);
}
