import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <Card className="h-full transition-all hover:shadow-md hover:border-dental-primary">
      <CardHeader>
        <div className="w-12 h-12 bg-dental-accent rounded-full flex items-center justify-center text-dental-primary mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">
          Подробнее об услуге, ценах и особенностях процедуры вы можете узнать на странице услуги.
        </p>
      </CardContent>
      <CardFooter>
        <Link to={link}>
          <Button variant="ghost" className="text-dental-primary hover:text-dental-secondary hover:bg-dental-accent p-0 flex items-center gap-2">
            Подробнее <ArrowRight size={16} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
