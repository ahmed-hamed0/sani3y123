
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Task } from "@/types";
import { Calendar, MapPin } from "lucide-react";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-EG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-6">
        <div className="mb-3 flex justify-between items-start">
          <h3 className="text-lg font-bold line-clamp-2">{task.title}</h3>
          <span className="px-2 py-1 bg-blue-100 text-sanaye3i-blue text-xs rounded-full">
            {task.specialty}
          </span>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {task.description}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{task.location.governorate} - {task.location.city}</span>
          </div>
          
          <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>نُشر في {formatDate(task.createdAt)}</span>
          </div>
          
          {task.budget && (
            <div className="text-sanaye3i-blue font-semibold">
              الميزانية: {task.budget}
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4 border-t">
        <Link to={`/tasks/${task.id}`} className="w-full">
          <Button variant="default" className="w-full">
            عرض التفاصيل
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
