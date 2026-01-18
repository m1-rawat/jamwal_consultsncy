import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  className?: string;
}

export function ServiceCard({ title, description, icon, image, className }: ServiceCardProps) {
  return (
    <Card className={cn("group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1", className)}>
      {image && (
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
      )}
      <CardHeader>
        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors w-fit">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-6 line-clamp-3">
          {description}
        </CardDescription>
        <Link href="/services">
          <Button variant="link" className="p-0 h-auto font-semibold text-primary group-hover:text-primary/80" asChild>
             <span>Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
