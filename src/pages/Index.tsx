
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import TaskCard from "@/components/tasks/TaskCard";
import TradespersonCard from "@/components/tradesperson/TradespersonCard";
import { SearchFilter } from "@/components/ui/search-filter";
import { Task, User } from "@/types";

// Mock data for demonstration
const featuredTasks: Task[] = [
  {
    id: "1",
    title: "إصلاح تسريب مياه في المطبخ",
    description: "يوجد تسريب مياه تحت حوض المطبخ، أحتاج سباك لإصلاحه في أقرب وقت ممكن.",
    clientId: "client1",
    specialty: "سباك",
    location: {
      governorate: "القاهرة",
      city: "مدينة نصر",
    },
    status: "open",
    createdAt: "2025-04-20T10:30:00",
    budget: "200 - 300 جنيه",
  },
  {
    id: "2",
    title: "تركيب أباجورات وثريات في شقة جديدة",
    description: "أحتاج كهربائي لتركيب 5 أباجورات و3 ثريات في شقة جديدة. الشقة في الدور الثالث.",
    clientId: "client2",
    specialty: "كهربائي",
    location: {
      governorate: "الجيزة",
      city: "6 أكتوبر",
    },
    status: "open",
    createdAt: "2025-04-21T15:45:00",
    budget: "400 - 600 جنيه",
  },
  {
    id: "3",
    title: "طلاء غرفتين في منزل",
    description: "مطلوب نقاش لطلاء غرفتين بمساحة 4×4 متر. الطلاء متوفر ويحتاج فقط للعمالة.",
    clientId: "client3",
    specialty: "نقاش",
    location: {
      governorate: "الإسكندرية",
      city: "سموحة",
    },
    status: "open",
    createdAt: "2025-04-22T09:15:00",
    budget: "800 - 1000 جنيه",
  },
];

const topTradespeople: User[] = [
  {
    id: "1",
    name: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "01234567890",
    userType: "tradesperson",
    specialty: "سباك",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    location: {
      governorate: "القاهرة",
      city: "المعادي",
    },
    rating: 4.8,
    completedTasks: 42,
  },
  {
    id: "2",
    name: "محمود إبراهيم",
    email: "mahmoud@example.com",
    phone: "01234567891",
    userType: "tradesperson",
    specialty: "كهربائي",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: {
      governorate: "الجيزة",
      city: "العجوزة",
    },
    rating: 4.6,
    completedTasks: 28,
  },
  {
    id: "3",
    name: "خالد عبد الرحمن",
    email: "khaled@example.com",
    phone: "01234567892",
    userType: "tradesperson",
    specialty: "نقاش",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    location: {
      governorate: "القاهرة",
      city: "مصر الجديدة",
    },
    rating: 4.9,
    completedTasks: 53,
  },
];

export default function Index() {
  const handleSearch = (filters: { query: string; governorate: string; city: string; specialty: string }) => {
    console.log("Search with filters:", filters);
    // In a real app, this would trigger a search/filter API call
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sanaye3i-blue to-blue-700 text-white py-12 md:py-24 px-4 md:px-8 rounded-lg mb-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ابحث عن أمهر الصنايعية في منطقتك</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            منصة صنايعي.كوم تربط بين العملاء والصنايعية الموثوقين بشكل سهل وسريع
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="default" className="bg-white text-sanaye3i-blue hover:bg-gray-100 w-full sm:w-auto">
                تسجيل كصنايعي
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                تسجيل كعميل
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="mb-12">
        <SearchFilter onSearch={handleSearch} />
      </section>
      
      {/* Featured Tasks */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">أحدث المهام</h2>
          <Link to="/tasks" className="text-sanaye3i-blue hover:underline">عرض الكل</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
      
      {/* Top Tradespeople */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">أفضل الصنايعية</h2>
          <Link to="/tradespeople" className="text-sanaye3i-blue hover:underline">عرض الكل</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topTradespeople.map(tradesperson => (
            <TradespersonCard key={tradesperson.id} tradesperson={tradesperson} />
          ))}
        </div>
      </section>
      
      {/* How It Works */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-10">كيف تعمل المنصة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-sanaye3i-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-lg font-semibold mb-2">انشر المهمة</h3>
            <p className="text-gray-600">قم بإنشاء حساب ونشر المهمة التي تحتاجها مع وصف تفصيلي</p>
          </div>
          
          <div className="text-center">
            <div className="bg-sanaye3i-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-lg font-semibold mb-2">استلم العروض</h3>
            <p className="text-gray-600">سيقوم الصنايعية المتخصصون بإرسال عروضهم وأسعارهم</p>
          </div>
          
          <div className="text-center">
            <div className="bg-sanaye3i-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-lg font-semibold mb-2">اختر الأفضل</h3>
            <p className="text-gray-600">راجع التقييمات واختر الصنايعي المناسب وتواصل معه</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-sanaye3i-orange text-white rounded-lg p-8 md:p-12 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">انضم إلى منصة صنايعي.كوم الآن</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          سواء كنت عميل تبحث عن صنايعية موثوقين أو صنايعي تبحث عن عملاء جدد، منصتنا هي الحل الأمثل لك
        </p>
        <Link to="/register">
          <Button size="lg" className="bg-white text-sanaye3i-orange hover:bg-gray-100">
            سجل الآن مجاناً
          </Button>
        </Link>
      </section>
    </MainLayout>
  );
}
