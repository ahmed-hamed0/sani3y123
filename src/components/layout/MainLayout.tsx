
import { useState } from "react";
import Header from "./Header";
import MobileNav from "./MobileNav";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background font-cairo">
      <TooltipProvider>
        <Toaster />
        <Sonner />
      </TooltipProvider>
      
      <Header setMobileNavOpen={setMobileNavOpen} />
      
      <div className="container mx-auto px-4 py-6 flex-grow">
        {children}
      </div>
      
      <footer className="bg-sanaye3i-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">صنايعي دوت كوم</h3>
              <p className="text-sm">منصة لربط العملاء بالصنايعية الموثوقين</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-sanaye3i-orange">الرئيسية</a></li>
                <li><a href="/tasks" className="hover:text-sanaye3i-orange">المهام</a></li>
                <li><a href="/tradespeople" className="hover:text-sanaye3i-orange">الصنايعية</a></li>
                <li><a href="/about" className="hover:text-sanaye3i-orange">عن المنصة</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
              <p className="text-sm mb-2">البريد الإلكتروني: info@sanaye3i.com</p>
              <p className="text-sm">الهاتف: +20123456789</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm">
            <p>جميع الحقوق محفوظة &copy; صنايعي دوت كوم {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>

      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />
    </div>
  );
}
