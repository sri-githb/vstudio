import heroImage from "@/assets/hero-illustration.png";

const FloatingBrushStroke = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full opacity-30 animate-gentle-pulse ${className}`} />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden canvas-texture pb-0">
      {/* Soft gradient background matching image edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-peach/40 via-blush/20 to-ivory" />

      {/* Floating brush stroke elements */}
      <FloatingBrushStroke className="top-16 left-8 w-32 h-8 bg-blush float-slow" />
      <FloatingBrushStroke className="top-32 right-16 w-24 h-6 bg-sage float-medium" />
      <FloatingBrushStroke className="top-1/4 left-1/3 w-20 h-5 bg-mustard/50 float-slow" />
      <FloatingBrushStroke className="top-20 right-1/3 w-28 h-7 bg-blush/60 float-medium" />

      {/* Text content - centered on top */}
      <div className="relative z-10 text-center mt-24 md:mt-32 mb-8 px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-foreground animate-fade-in-up leading-none tracking-tight">
          Varsha
        </h1>
        <p className="text-lg md:text-2xl font-body font-light text-muted-foreground mt-3 animate-fade-in-up-delay-1">
          Fashion Designer Portfolio
        </p>
        <a
          href="#collections"
          className="inline-block mt-6 px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-full 
            hover:bg-mustard hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl 
            animate-fade-in-up-delay-2"
        >
          View Collections
        </a>
      </div>

      {/* Hero image - full width, merges with background */}
      <div className="relative z-[2] w-full mt-auto animate-fade-in-up-delay-1">
        {/* Top fade gradient to merge image into background */}
        <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-ivory/90 via-ivory/40 to-transparent z-10 pointer-events-none" />
        {/* Side fade gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-ivory/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-ivory/80 to-transparent z-10 pointer-events-none" />
        <img
          src={heroImage}
          alt="Fashion design studio workspace with sketches, fabrics, paintbrushes and flowers - acrylic painting style"
          className="w-full h-[50vh] md:h-[60vh] object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
