import { useState, useEffect } from "react";

interface WorkshopCardProps {
  title: string;
  images: string[];
  description: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
  reversed?: boolean;
}

const WorkshopCard = ({ title, images, description, ctaLabel, ctaHref, reversed }: WorkshopCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-12 items-stretch`}
    >
      {/* Image carousel */}
      <div className="lg:w-2/5 overflow-hidden rounded-lg relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} ${index + 1}`}
            className={`w-full h-72 lg:h-full object-cover transition-opacity duration-700 ${
              index === 0 ? "" : "absolute inset-0"
            } ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            loading="lazy"
            width={800}
            height={1000}
          />
        ))}
      </div>

      {/* Content */}
      <div className="lg:w-3/5 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-normal text-black mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>{title}</h3>
        <div className="text-foreground/80 leading-relaxed space-y-4 mb-8">
          {description}
        </div>
        <div>
          <a href={ctaHref} className="btn-primary">
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
