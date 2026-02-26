import heroImage from "@/assets/hero-illustration.png";

const FlowerPetal = ({ className, delay, size = 20 }: { className?: string; delay: string; size?: number }) => (
  <svg
    className={`absolute opacity-40 flower-fall pointer-events-none ${className}`}
    style={{ animationDelay: delay }}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 2C12 2 14 6 14 8C14 10 12 12 12 12C12 12 10 10 10 8C10 6 12 2 12 2Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M12 12C12 12 16 10 18 10C20 10 22 12 22 12C22 12 20 14 18 14C16 14 12 12 12 12Z"
      fill="currentColor"
      opacity="0.5"
    />
    <path
      d="M12 12C12 12 14 16 14 18C14 20 12 22 12 22C12 22 10 20 10 18C10 16 12 12 12 12Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M12 12C12 12 8 10 6 10C4 10 2 12 2 12C2 12 4 14 6 14C8 14 12 12 12 12Z"
      fill="currentColor"
      opacity="0.5"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8" />
  </svg>
);

const HeroSection = () => {
  const petals = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 17 + 5) % 100}%`,
    delay: `${(i * 0.7) % 6}s`,
    size: 14 + (i % 4) * 6,
    color: ["text-blush", "text-peach", "text-sage", "text-mustard/60"][i % 4],
  }));

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden canvas-texture cursor-paintbrush">
      {/* Hero image as full background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fashion design studio workspace with sketches, fabrics, paintbrushes and flowers - acrylic painting style"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Soft overlay so text is readable */}
        <div className="absolute inset-0 bg-peach/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-peach/60 via-ivory/30 to-ivory/80" />
      </div>

      {/* Flower petal shower */}
      {petals.map((p, i) => (
        <div key={i} style={{ left: p.left }} className="absolute">
          <FlowerPetal
            className={p.color}
            delay={p.delay}
            size={p.size}
          />
        </div>
      ))}

      {/* Text content */}
      <div className="relative z-10 text-center px-6">
        <div className="inline-block px-8 py-4 rounded-3xl bg-peach/40 backdrop-blur-sm">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-foreground animate-fade-in-up leading-none tracking-tight">
            Varsha
          </h1>
        </div>
        <p className="text-lg md:text-2xl font-body font-light text-muted-foreground mt-4 animate-fade-in-up-delay-1 drop-shadow-sm">
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
