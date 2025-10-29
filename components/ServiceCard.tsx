import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link: string;
  buttonText?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, link, buttonText = "Learn More" }: ServiceCardProps) => {
  return (
    <Card className="h-full bg-wellness-light border-wellness-calm hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-4 bg-wellness-success rounded-full w-fit">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-wellness-success rounded-full mr-3 flex-shrink-0"></div>
              <span className="text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Link to={link} className="block">
          <Button className="w-full bg-wellness hover:bg-wellness/90 text-wellness-light">
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;