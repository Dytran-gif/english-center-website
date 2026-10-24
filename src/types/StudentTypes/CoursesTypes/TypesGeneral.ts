// CourseTypes.ts

// 1. CÁC KIỂU DỮ LIỆU CƠ BẢN (Enums / Literals)
export type CourseLevel = 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';
export type SkillType = 'Speaking' | 'Listening' | 'Reading' | 'Writing' | 'Grammar' | 'Vocabulary' | 'Pronunciation' | string;

// 2. KIỂU DỮ LIỆU CHO LỊCH HỌC (Khu vực 2 - Bottom: Cho phép FE tự tính trạng thái)
export interface ClassSchedule {
    classId: string;           // VD: "SPE-B1-02"
    scheduleTime: string;      // VD: "Tue & Thu | 18:00 - 19:30"
    center: string;            // VD: "Center B"
    maxCapacity: number;       // Tối đa bao nhiêu người (VD: 15)
    currentEnrolled: number;   // Hiện tại đã có bao nhiêu người đăng ký (VD: 12)
}

// 3. KIỂU DỮ LIỆU CHÍNH CHO KHÓA HỌC (Khu vực 1 - Main)
export interface Course {
    id: string;
    title: string;
    description: string;
    level: CourseLevel;
    imageUrl: string;
    
    // Thông tin hiển thị chung trên thẻ khóa học
    durationHours: number;       // VD: 60 (FE sẽ hiển thị "60 hours")
    studentCapacity: string;     // VD: "12-15 students"
    
    skills: SkillType[];         // Các tag kỹ năng màu xanh (VD: Speaking, Listening)
    price: number;               // VD: 2500000 (FE sẽ format thành 2,500,000 VND)
    
    // Danh sách các lớp học cụ thể để user chọn ở phần Bottom
    availableClasses: ClassSchedule[]; 
}

// 4. KIỂU DỮ LIỆU CHO KHU VỰC 3 (Right Sidebar - Why Choose Our Courses)
export interface FeatureItem {
    id: string;
    title: string;
    description: string;
    icon: string; // Tên class icon (VD: "fa-solid fa-book-open")
}

// 5. KIỂU DỮ LIỆU CHO STATE BỘ LỌC (Dùng cho thanh tìm kiếm và dropdown sort)
export interface CourseFilters {
    searchQuery: string;
    level: CourseLevel;
    skill: string;      
    courseType: string; 
}