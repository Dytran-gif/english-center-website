import type { SidebarMenuItem } from "../../types";

// Menu Admin — dựa theo User Tree đã chốt: Quản lý khóa học / người dùng / tin tức
export const adminSidebarMenuItems: SidebarMenuItem[] = [
    { label: "Dashboard", path: "/admin/dashboard", icon: "⌂" },
    { label: "Khóa học", path: "/admin/courses", icon: "▤" },
    { label: "Người dùng", path: "/admin/users", icon: "◈" },
    { label: "Tin tức / Blog", path: "/admin/blog", icon: "✎" },
];
