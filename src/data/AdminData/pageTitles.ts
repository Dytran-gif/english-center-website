import type { PageTitle } from "../../types";

export const adminPageTitles: Record<string, PageTitle> = {
    "/admin/dashboard": {
        title: "Dashboard",
        subtitle: "Tổng quan hoạt động trung tâm.",
    },
    "/admin/courses": {
        title: "Quản lý khóa học",
        subtitle: "Xem và quản lý toàn bộ khóa học đang mở.",
    },
    "/admin/users": {
        title: "Quản lý người dùng",
        subtitle: "Danh sách học viên và giáo viên trong hệ thống.",
    },
    "/admin/blog": {
        title: "Quản lý tin tức",
        subtitle: "Xem và quản lý bài viết trên blog.",
    },
};
