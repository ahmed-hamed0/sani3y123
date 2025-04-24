
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BellIcon,
  MessageSquare,
  Search,
  Menu,
  X,
  User,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  setMobileNavOpen: (isOpen: boolean) => void;
}

export default function Header({ setMobileNavOpen }: HeaderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Mock user data - in a real app this would come from authentication
  const user = isLoggedIn ? {
    id: "1",
    name: "أحمد محمد",
    userType: "client"
  } : null;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(prevState => !prevState);
  };

  // For demo purposes only, toggle login state
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-sanaye3i-blue">صنايعي<span className="text-sanaye3i-orange">.كوم</span></span>
          </Link>
        </div>

        {!isMobile && (
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-sanaye3i-blue font-medium">الرئيسية</Link>
            <Link to="/tasks" className="text-gray-700 hover:text-sanaye3i-blue font-medium">المهام</Link>
            <Link to="/tradespeople" className="text-gray-700 hover:text-sanaye3i-blue font-medium">الصنايعية</Link>
            <Link to="/about" className="text-gray-700 hover:text-sanaye3i-blue font-medium">عن المنصة</Link>
          </div>
        )}

        <div className="flex items-center space-x-3 space-x-reverse">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="h-5 w-5 text-gray-600" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5 text-gray-600" />
              </Button>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-gray-600" />
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={toggleLogin}>تسجيل خروج</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">تسجيل دخول</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">حساب جديد</Button>
              </Link>
            </>
          )}
          
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMobileNav}>
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
