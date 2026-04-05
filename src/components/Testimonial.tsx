import { Quote } from "lucide-react";

interface TestimonialProps {
  text: string;
  author: string;
}

const Testimonial = ({ text, author }: TestimonialProps) => {
  return (
    <div className="bg-secondary rounded-lg p-8 md:p-12 max-w-3xl mx-auto text-center">
      <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
      <blockquote className="text-lg md:text-xl italic text-foreground/80 leading-relaxed mb-4">
        "{text}"
      </blockquote>
      <cite className="text-sm font-bold text-muted-foreground not-italic">
        — {author}
      </cite>
    </div>
  );
};

export default Testimonial;
