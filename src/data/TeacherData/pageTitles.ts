import type { PageTitle } from "../../types";

export const teacherPageTitles: Record<string, PageTitle> = {
    "/teacher/dashboard": {
        title: "Dashboard",
        subtitle: "Tổng quan lớp học đang phụ trách.",
    },
    "/teacher/classes": {
        title: "Lớp phụ trách",
        subtitle: "Danh sách khóa học bạn đang giảng dạy.",
    },
    "/teacher/schedule": {
        title: "Lịch dạy",
        subtitle: "Lịch học theo tuần của các lớp.",
    },
    "/teacher/profile": {
        title: "Hồ sơ cá nhân",
        subtitle: "Thông tin giáo viên hiển thị công khai.",
    },
};
