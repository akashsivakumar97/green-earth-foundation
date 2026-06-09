import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";
import oceanCleanup from "@/assets/ocean-cleanup.jpg";
import renewable from "@/assets/renewable.jpg";
import education from "@/assets/education.jpg";
import volunteers from "@/assets/volunteers.jpg";
import seedling from "@/assets/seedling.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Green Earth Foundation" },
      { name: "description", content: "Explore our active conservation projects: reforestation, ocean cleanup, renewable energy, and environmental education across 62 countries." },
    ],
  }),
  component: Projects,
});

const projects = [
  { title: "Amazon Reforestation Initiative", location: "Brazil & Peru", tag: "Forests", img: heroForest, desc: "Restoring 50,000 hectares of rainforest in partnership with 12 indigenous communities. Native species only. Long-term monitoring with satellite verification.", progress: 68 },
  { title: "Pacific Coastline Cleanup", location: "Philippines, Indonesia, Fiji", tag: "Oceans", img: oceanCleanup, desc: "Removing plastic waste from 1,200 km of coastline. Local crews trained and employed. Material recycled into community infrastructure.", progress: 41 },
  { title: "Solar Villages Program", location: "Kenya, Tanzania", tag: "Energy", img: renewable, desc: "Bringing clean off-grid solar to 80 rural villages, replacing kerosene and diesel. Maintenance training for local technicians included.", progress: 55 },
  { title: "Outdoor Classrooms", location: "USA, UK, India", tag: "Education", img: education, desc: "Building outdoor learning spaces and training teachers in nature-based curriculum. 320 schools reached so far.", progress: 72 },
  { title: "Mangrove Restoration", location: "Bangladesh & Vietnam", tag: "Coastlines", img: volunteers, desc: "Planting mangroves to protect coastal villages from rising seas and storm surges while creating fish nurseries.", progress: 33 },
  { title: "Urban Pollinator Corridors", location: "Berlin, Toronto, Melbourne", tag: "Cities", img: seedling, desc: "Native wildflower meadows along city greenways to revive bee, butterfly, and bird populations.", progress: 49 },
];

function Projects() {
  return (
    <>
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our work</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground">Projects in motion</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">Active conservation programs across six continents — each measured, transparent, and community-led.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article key={p.title} className="rounded-3xl overflow-hidden bg-card border border-border shadow-card group">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{p.tag}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3.5" /> {p.location}</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6">
                  <div className="flex justify-between text-xs font-medium text-muted-foreground mb-2">
                    <span>Progress</span><span>{p.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full gradient-leaf" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
