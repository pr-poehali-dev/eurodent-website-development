import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience: string;
  imageUrl: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, experience, imageUrl }) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative overflow-hidden h-80">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{specialty}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">Стаж работы: {experience}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-dental-primary hover:bg-dental-secondary flex items-center gap-2">
          <CalendarDays size={16} />
          Записаться
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
