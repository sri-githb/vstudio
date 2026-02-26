import heroImage from "@/assets/hero-illustration.png";

const FloatingBrushStroke = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full opacity-30 animate-gentle-pulse ${className}`} />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden canvas-texture">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-peach/20 to-blush/30" />

      {/* Floating brush stroke elements */}
      <FloatingBrushStroke className="top-20 left-10 w-32 h-8 bg-blush float-slow" />
      <FloatingBrushStroke className="top-40 right-20 w-24 h-6 bg-sage float-medium" />
      <FloatingBrushStroke className="bottom-32 left-1/4 w-40 h-10 bg-peach float-fast" />
      <FloatingBrushStroke className="top-1/3 right-1/3 w-20 h-5 bg-mustard/50 float-slow" />
      <FloatingBrushStroke className="bottom-20 right-10 w-28 h-7 bg-blush/60 float-medium" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground animate-fade-in-up leading-tight">
            Varsha
          </h1>
          <p className="text-xl md:text-2xl font-body font-light text-muted-foreground mt-4 animate-fade-in-up-delay-1">
            Fashion Designer Portfolio
          </p>
          <a
            href="#collections"
            className="inline-block mt-8 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full 
              hover:bg-mustard hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl 
              animate-fade-in-up-delay-2"
          >
            View Collections
          </a>
        </div>

        {/* Hero illustration */}
        <div className="flex-1 max-w-xl lg:max-w-2xl animate-fade-in-up-delay-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blush/40 via-peach/30 to-sage/30 rounded-3xl blur-2xl" />
            <img
              src={heroImage}
              alt="Varsha - Fashion designer sketching in her studio, acrylic painting illustration"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
