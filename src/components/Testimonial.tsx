interface TestimonialProps {
  text: string;
  author: string;
}

const Testimonial = ({ text, author }: TestimonialProps) => {
  return (
    <div className="bg-secondary rounded-lg p-8 md:p-12 max-w-3xl mx-auto text-center">
      <i className="fi fi-rr-quote-right text-primary text-2xl leading-none flex items-center justify-center mx-auto mb-4" />
      <blockquote className="text-lg md:text-xl italic text-foreground/80 leading-relaxed mb-4">
        "{text}"
      </blockquote>
      <cite className="text-sm text-muted-foreground not-italic">
        — {author}
      </cite>
    </div>
  );
};

export default Testimonial;
