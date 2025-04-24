
export type UserType = 'client' | 'tradesperson';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  userType: UserType;
  avatar?: string;
  location?: Location;
  specialty?: string; // Only for tradesperson
  bio?: string;
  rating?: number;
  completedTasks?: number;
}

export interface Location {
  governorate: string;
  city: string;
  area?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  clientId: string;
  specialty: string;
  location: Location;
  status: 'open' | 'assigned' | 'completed';
  createdAt: string;
  budget?: string;
  applications?: Application[];
}

export interface Application {
  id: string;
  taskId: string;
  tradespersonId: string;
  tradespersonName: string;
  tradespersonAvatar?: string;
  tradespersonRating?: number;
  price?: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Rating {
  id: string;
  taskId: string;
  fromId: string;
  toId: string;
  rating: number;
  comment?: string;
  createdAt: string;
}

export const SPECIALTIES = [
  { id: 'plumber', name: 'سباك' },
  { id: 'electrician', name: 'كهربائي' },
  { id: 'painter', name: 'نقاش' },
  { id: 'carpenter', name: 'نجار' },
  { id: 'tiler', name: 'مبلط' },
  { id: 'aircon', name: 'فني تكييف' },
  { id: 'satellite', name: 'فني أطباق دش' },
  { id: 'gypsum', name: 'فني جبسيوم بورد' },
  { id: 'cleaner', name: 'عامل نظافة' },
  { id: 'gardener', name: 'بستاني' },
  { id: 'locksmith', name: 'فني أقفال' },
  { id: 'other', name: 'أخرى' },
];

export const GOVERNORATES = [
  'القاهرة', 
  'الإسكندرية', 
  'الجيزة', 
  'الشرقية', 
  'القليوبية', 
  'المنوفية', 
  'البحيرة',
  'دمياط',
  'الغربية',
  'بورسعيد',
  'الإسماعيلية',
  'السويس',
  'كفر الشيخ',
  'الفيوم',
  'بني سويف',
  'المنيا',
  'أسيوط',
  'سوهاج',
  'قنا',
  'الأقصر',
  'أسوان',
  'مطروح',
  'البحر الأحمر',
  'الوادي الجديد',
  'شمال سيناء',
  'جنوب سيناء'
];
