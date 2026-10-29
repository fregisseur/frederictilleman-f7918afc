import { useState, useEffect } from "react";

interface WorkshopCardProps {
  title: string;
  images: string[];
  imageAlts?: string[];
  description: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
  reversed?: boolean;
  underline?: string;
  sparkle?: string;
}

const WorkshopCard = ({ title, images, imageAlts, description, ctaLabel, ctaHref, reversed, underline, sparkle }: WorkshopCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const titleWords = title.split(" ");
  const lastTitleWord = titleWords.length > 1 ? titleWords.pop() : title;
  const firstTitleWords = titleWords.join(" ");
  const hasTitleDecor = Boolean(underline || sparkle);


  return (
    <div
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-12 items-stretch`}
    >
      {/* Image carousel */}
      <div className="lg:w-2/5 overflow-hidden relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={imageAlts?.[index] ?? `${title} ${index + 1}`}
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
        <h3 className="text-3xl md:text-4xl font-normal text-black mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
          {hasTitleDecor ? (
            <>
              {firstTitleWords}{" "}
              <span className="relative inline-block">
                {lastTitleWord}
                {underline && (
                  <img
                    src={underline}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="pointer-events-none absolute left-0 top-full w-[122.5%] max-w-none select-none -translate-y-[83.6%]"
                  />
                )}
                {sparkle && (
                  <img
                    src={sparkle}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="pointer-events-none absolute left-[50px] top-[-26px] w-[60px] max-w-none select-none"
                  />
                )}
              </span>
            </>
          ) : (
            title
          )}
        </h3>
        <div className="text-foreground/80 leading-relaxed space-y-4 mb-8">
          {description}
        </div>
        <div className="flex justify-center lg:justify-start">
          <a href={ctaHref} className="btn-primary">
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
