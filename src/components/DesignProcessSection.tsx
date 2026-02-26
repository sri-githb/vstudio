import { PencilRuler, Palette, Scissors } from "lucide-react";

const DesignProcessSection = () => {
  return (
    <section className="py-16 px-6 bg-ivory/60">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Design Philosophy & Process
        </h2>
        <p className="mt-4 text-muted-foreground font-body max-w-3xl mx-auto">
          Every garment begins with a story. Varsha K blends intuitive sketching, fabric exploration,
          and meticulous tailoring to create pieces that feel timeless, personal, and artful. The goal is
          to celebrate individuality while keeping silhouettes wearable and softly romantic.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-card/60 border border-border/60 p-6 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blush/30 flex items-center justify-center">
              <PencilRuler className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-display text-lg text-foreground">Concept & Sketch</h3>
            <p className="text-sm text-muted-foreground font-body">
              Moodboards, hand sketches, and draped silhouettes shape the first vision of each look.
            </p>
          </div>

          <div className="rounded-2xl bg-card/60 border border-border/60 p-6 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center">
              <Palette className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-display text-lg text-foreground">Fabric & Color Story</h3>
            <p className="text-sm text-muted-foreground font-body">
              Soft pastels, rich textures, and thoughtful surface details are chosen to support the narrative.
            </p>
          </div>

          <div className="rounded-2xl bg-card/60 border border-border/60 p-6 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-sage/40 flex items-center justify-center">
              <Scissors className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-display text-lg text-foreground">Pattern & Finish</h3>
            <p className="text-sm text-muted-foreground font-body">
              Precise pattern cutting, fitting, and finishing bring the final garment to life on the wearer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;

