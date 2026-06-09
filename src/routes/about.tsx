import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Target, Users, Globe } from "lucide-react";
import seedling from "@/assets/seedling.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Green Earth Foundation" },
      { name: "description", content: "Our mission, our team, and the story of how Green Earth grew from a local tree-planting collective into a global conservation movement." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">About us</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground leading-tight">Rooted in community. Reaching across the world.</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              What began in 2008 as ten neighbors planting saplings on a degraded hillside has grown into a global network of scientists, educators, and volunteers restoring ecosystems on every continent.
            </p>
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
            <img src={seedling} alt="Seedling" width={1280} height={896} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="size-14 rounded-2xl gradient-leaf grid place-items-center mb-6">
              <Target className="size-7 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-semibold text-foreground">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To restore the planet's ecosystems and empower communities to become lifelong stewards of the environment through hands-on conservation, scientific research, and education.
            </p>
          </div>
          <div>
            <div className="size-14 rounded-2xl gradient-leaf grid place-items-center mb-6">
              <Globe className="size-7 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-semibold text-foreground">Our Vision</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A world where every community has the knowledge, tools, and resources to live in balance with nature — where forests thrive, oceans are clean, and the next generation inherits a flourishing planet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
          {[
            { icon: Leaf, title: "Ecological integrity", desc: "Science-led restoration that prioritizes native species and biodiversity." },
            { icon: Users, title: "Community first", desc: "Local leaders shape every project. We are partners, never outsiders." },
            { icon: Globe, title: "Radical transparency", desc: "Every dollar traced, every metric published, every report public." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon className="size-8 mb-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-primary-foreground/80 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Leadership team</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">A small team of ecologists, educators, and operators committed to long-term impact.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Aisha Mwangi", role: "Executive Director" },
            { name: "Lukas Schmidt", role: "Chief Scientist" },
            { name: "Priya Iyer", role: "Head of Programs" },
            { name: "Marco Rossi", role: "Head of Operations" },
          ].map((p) => (
            <div key={p.name} className="text-center">
              <div className="aspect-square rounded-3xl gradient-leaf grid place-items-center mb-4">
                <span className="font-display text-5xl text-primary-foreground">{p.name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <div className="font-semibold text-foreground">{p.name}</div>
              <div className="text-sm text-muted-foreground">{p.role}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
