import { createFileRoute } from "@tanstack/react-router";
import heroForest from "@/assets/hero-forest.jpg";
import oceanCleanup from "@/assets/ocean-cleanup.jpg";
import renewable from "@/assets/renewable.jpg";
import education from "@/assets/education.jpg";
import seedling from "@/assets/seedling.jpg";
import volunteers from "@/assets/volunteers.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Green Earth Foundation" },
      { name: "description", content: "Field notes, research summaries, and stories from the front lines of environmental conservation." },
    ],
  }),
  component: Blog,
});

const posts = [
  { title: "What 10 years of reforestation taught us about resilience", category: "Field Notes", date: "Jun 02, 2026", img: heroForest, excerpt: "A decade of data from the Amazon basin reveals surprising patterns about which species recover fastest and why community-led models outperform top-down approaches.", read: "8 min" },
  { title: "The math behind our $25 = 50 trees promise", category: "Transparency", date: "May 24, 2026", img: seedling, excerpt: "We break down every cost — saplings, transport, labor, monitoring — to show exactly how your donations translate into living forests.", read: "5 min" },
  { title: "How microplastics travel from your sink to the deep ocean", category: "Research", date: "May 12, 2026", img: oceanCleanup, excerpt: "New research from our marine team traces the surprising journey of microplastics through coastal ecosystems.", read: "10 min" },
  { title: "Solar microgrids: lessons from 80 villages", category: "Energy", date: "Apr 28, 2026", img: renewable, excerpt: "What worked, what failed, and what we'd do differently in our largest off-grid energy rollout to date.", read: "7 min" },
  { title: "Why outdoor classrooms outperform indoor science labs", category: "Education", date: "Apr 14, 2026", img: education, excerpt: "Three years of student outcomes data make a compelling case for moving learning back outside.", read: "6 min" },
  { title: "Volunteer voices: a weekend in the mangroves", category: "Stories", date: "Apr 02, 2026", img: volunteers, excerpt: "First-person accounts from our Bangladesh mangrove restoration crew during the spring planting season.", read: "4 min" },
];

function Blog() {
  return (
    <>
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Journal</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground">From the field</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">Research, transparency reports, and stories from the people doing the work.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card flex flex-col">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.img} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-semibold">{post.category}</span>
                  <span className="text-muted-foreground">{post.date} · {post.read}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground leading-snug">{post.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                <a href="#" className="mt-5 text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
