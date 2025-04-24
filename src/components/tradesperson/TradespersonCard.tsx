
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { User } from "@/types";
import { MapPin, Star, CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TradespersonCardProps {
  tradesperson: User;
}

export default function TradespersonCard({ tradesperson }: TradespersonCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="pt-6 px-6 pb-2">
        <div className="flex flex-col items-center mb-4">
          <Avatar className="h-20 w-20 mb-3">
            <AvatarImage src={tradesperson.avatar} />
            <AvatarFallback className="bg-sanaye3i-blue text-white text-xl">
              {tradesperson.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="text-lg font-bold text-center">{tradesperson.name}</h3>
          
          <div className="mt-1 px-3 py-1 bg-blue-100 text-sanaye3i-blue text-sm rounded-full">
            {tradesperson.specialty}
          </div>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-center space-x-1 space-x-reverse text-amber-500">
            <Star className="fill-amber-500 h-4 w-4" />
            <span className="font-semibold">
              {tradesperson.rating?.toFixed(1) || "جديد"}
            </span>
            {tradesperson.rating && (
              <span className="text-gray-500">({Math.floor(Math.random() * 100) + 1} تقييم)</span>
            )}
          </div>
          
          {tradesperson.location && (
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>
                {tradesperson.location.city}، {tradesperson.location.governorate}
              </span>
            </div>
          )}
          
          {tradesperson.completedTasks && (
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-gray-600">
              <CheckCircle className="h-4 w-4" />
              <span>{tradesperson.completedTasks} مهمة منجزة</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4 border-t">
        <Link to={`/tradespeople/${tradesperson.id}`} className="w-full">
          <Button variant="default" className="w-full">
            عرض الملف الشخصي
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
