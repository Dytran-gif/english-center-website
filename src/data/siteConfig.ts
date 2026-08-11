export interface NavLink {
  label: string;
  to: string;
}

export const siteName = "HAPPY IELTS";
export const siteFullName = "Trung tâm Anh ngữ Happy IELTS";
export const siteTagline =
  "Trung tâm Anh ngữ hàng đầu chuyên luyện thi IELTS, SAT và giảng dạy tiếng Anh cho mọi trình độ.";
export const siteAbout =
  "Happy IELTS là tổ chức giáo dục chuyên đào tạo luyện thi IELTS, SAT, và giảng dạy Tiếng Anh ở mọi trình độ. Happy IELTS kết hợp các giải pháp công nghệ mới nhất cùng khả năng chuyên môn tối ưu nhằm đem lại chất lượng giảng dạy cao nhất.";

export const primaryNav: NavLink[] = [
  { label: "Trang chủ", to: "/" },
  { label: "Về chúng tôi", to: "/ve-chung-toi" },
  { label: "Khoá học", to: "/khoa-hoc" },
  { label: "Giáo viên", to: "/giao-vien" },
  { label: "Blog", to: "/blog" },
  { label: "Liên hệ", to: "/lien-he" },
];

export interface OfficeLocation {
  city: string;
  lines: string[];
}

// Contact details below are placeholders for this student project — not the
// reference center's real hotline/email — kept in the same city/format style.
export const offices: OfficeLocation[] = [
  { city: "Hồ Chí Minh", lines: ["226 Lê Văn Sỹ, Tân Bình, Hồ Chí Minh"] },
  {
    city: "Vũng Tàu",
    lines: [
      "Cơ sở 1: 27G1 Nguyễn Oanh, P.7, TP Vũng Tàu",
      "Cơ sở 2: 2K3-3K3-4K3 Nguyễn Thái Học, P.7, TP Vũng Tàu",
    ],
  },
  { city: "Bà Rịa", lines: ["76-80-84 Bạch Đằng, P. Phước Trung, TP Bà Rịa"] },
];

export const contactEmail = "hi@happyielts.vn";
export const contactPhone = "1900 0000";

export const footerCoursesNav: NavLink[] = [
  { label: "IELTS tại trung tâm", to: "/khoa-hoc/ielts-tai-trung-tam" },
  { label: "IELTS Online 4+2", to: "/khoa-hoc/ielts-online-4-2" },
  { label: "IELTS Online Intensive", to: "/khoa-hoc/ielts-online-intensive" },
  { label: "English with Huy", to: "/khoa-hoc/english-with-huy" },
  { label: "SAT Preparation", to: "/khoa-hoc/sat-preparation" },
  { label: "Kid & Teenager", to: "/khoa-hoc/kid-teenager" },
];

export const footerPolicyNav: NavLink[] = [
  { label: "Chính sách bảo hành", to: "/lien-he" },
  { label: "Chính sách bảo vệ thông tin người dùng", to: "/lien-he" },
  { label: "Điều khoản dịch vụ", to: "/lien-he" },
];
