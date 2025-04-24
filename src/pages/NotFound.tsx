
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-600 mb-8">الصفحة غير موجودة</h2>
        <p className="text-lg text-gray-500 mb-8 text-center">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Link to="/">
          <Button size="lg">
            العودة للصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
}
