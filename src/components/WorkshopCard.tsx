interface WorkshopCardProps {
  title: string;
  image: string;
  description: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
  reversed?: boolean;
}

const WorkshopCard = ({ title, image, description, ctaLabel, ctaHref, reversed }: WorkshopCardProps) => {
  return (
    <div
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-12 items-stretch`}
    >
      {/* Image */}
      <div className="lg:w-2/5 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-72 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          width={800}
          height={1000}
        />
      </div>

      {/* Content */}
      <div className="lg:w-3/5 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{title}</h3>
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
