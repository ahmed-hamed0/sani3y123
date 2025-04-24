
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  readOnly?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

export function RatingStars({
  rating,
  maxRating = 5,
  size = "md",
  readOnly = true,
  onChange,
  className,
}: RatingStarsProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };
  
  const renderStar = (starNumber: number) => {
    const isFilled = starNumber <= rating;
    
    return (
      <Star
        key={starNumber}
        className={cn(
          sizeClasses[size],
          "cursor-default transition-all",
          isFilled ? "fill-amber-500 text-amber-500" : "text-gray-300",
          !readOnly && "cursor-pointer hover:scale-110"
        )}
        onClick={() => {
          if (!readOnly && onChange) {
            onChange(starNumber);
          }
        }}
      />
    );
  };
  
  return (
    <div className={cn("flex items-center space-x-1 space-x-reverse", className)}>
      {Array.from({ length: maxRating }, (_, i) => i + 1)
        .reverse()
        .map(renderStar)}
    </div>
  );
}
