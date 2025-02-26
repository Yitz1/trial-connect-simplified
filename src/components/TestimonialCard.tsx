
import { StarIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, title, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-purple-100 hover:border-purple-200 transition-colors">
      <div className="flex gap-1 mb-4 p-2 border border-purple-50 rounded-lg">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} size={16} className="fill-primary text-primary" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic p-3 border border-purple-50 rounded-lg">"{quote}"</p>
      <div className="p-2 border border-purple-50 rounded-lg">
        <p className="font-medium text-gray-900">{author}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
