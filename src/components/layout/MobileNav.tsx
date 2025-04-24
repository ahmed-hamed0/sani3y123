
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div 
        className={`bg-white h-full w-4/5 max-w-xs fixed top-0 right-0 shadow-xl transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-auto`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-sanaye3i-blue">القائمة</h2>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="py-2">
          <Link 
            to="/" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            الرئيسية
          </Link>
          <Link 
            to="/tasks" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            المهام
          </Link>
          <Link 
            to="/tradespeople" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            الصنايعية
          </Link>
          <Link 
            to="/about" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            عن المنصة
          </Link>
        </div>
        
        <div className="border-t py-4 px-4">
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="w-full mb-2">تسجيل دخول</Button>
          </Link>
          <Link to="/register" onClick={() => setIsOpen(false)}>
            <Button className="w-full">حساب جديد</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
