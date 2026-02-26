import heroVideoDesktop from "@/assets/hero-illustration.mp4";
import heroVideoMobile from "@/assets/hero-illustration1.mp4";

const FloatingShape = ({ className, delay }: { className?: string; delay: string }) => (
  <div
    className={`absolute opacity-20 float-slow ${className}`}
    style={{ animationDelay: delay }}
  >
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.1" />
    </svg>
  </div>
);

const MehendiPattern = ({ position }: { position: string }) => (
  <svg
    className={`absolute ${position} opacity-10 pointer-events-none`}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
  >
    <path
      d="M10 10 Q30 20 50 10 T90 10 M10 20 Q40 30 70 20 T90 20 M10 30 Q50 40 90 30"
      stroke="currentColor"
      strokeWidth="0.5"
    />
    <path
      d="M10 40 Q30 50 50 40 T90 40 M10 50 Q40 60 70 50 T90 50"
      stroke="currentColor"
      strokeWidth="0.5"
    />
  </svg>
);

const HeroSection = () => {
  const shapes = Array.from({ length: 12 }, (_, i) => ({
    left: `${(i * 8 + 10) % 90}%`,
    top: `${(i * 12 + 20) % 70}%`,
    delay: `${(i * 0.5) % 4}s`,
    color: ["text-blush", "text-peach", "text-sage", "text-mustard/40"][i % 4],
  }));

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden canvas-texture cursor-paintbrush">
      {/* Mehendi patterns in corners */}
      <MehendiPattern position="top-4 left-4" />
      <MehendiPattern position="top-4 right-4" />
      <MehendiPattern position="bottom-4 left-4" />
      <MehendiPattern position="bottom-4 right-4" />

      {/* Floating pastel shapes */}
      {shapes.map((s, i) => (
        <div key={i} style={{ left: s.left, top: s.top }} className="absolute">
          <FloatingShape className={s.color} delay={s.delay} />
        </div>
      ))}

      {/* Hero illustration background video */}
      <div className="absolute inset-0 z-0">
        {/* Mobile / tablet video */}
        <video
          src={heroVideoMobile}
          className="block md:hidden w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Desktop video */}
        <video
          src={heroVideoDesktop}
          className="hidden md:block w-full h-full object-contain object-center"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ivory/80 via-peach/30 to-blush/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/60 to-transparent" />
      </div>

      {/* Text content - centered over illustration */}
      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground animate-fade-in-up leading-tight">
          <span className="block">Varsha K</span>
          <span className="block font-body tracking-[0.2em] text-lg md:text-2xl mt-2">
            ATELIER
          </span>
        </h1>
        <div className="mt-4 inline-block px-6 py-3 rounded-2xl bg-background/50 backdrop-blur-md animate-fade-in-up-delay-1">
          <p className="text-xl md:text-3xl font-body font-light text-foreground">
            Fashion Designer Portfolio
          </p>
        </div>
        <a
          href="#collections"
          className="inline-block mt-8 px-10 py-4 bg-sage text-foreground font-body font-semibold rounded-full
            hover:bg-mustard/80 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl
            animate-fade-in-up-delay-2"
        >
          View Collections
        </a>
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
