import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trees, Droplets, GraduationCap, Heart, Quote, Sparkles } from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";
import volunteers from "@/assets/volunteers.jpg";
import oceanCleanup from "@/assets/ocean-cleanup.jpg";
import renewable from "@/assets/renewable.jpg";
import education from "@/assets/education.jpg";
import seedling from "@/assets/seedling.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Earth Foundation — Protecting Our Planet Together" },
      { name: "description", content: "Join Green Earth Foundation in reforestation, ocean cleanup, and environmental education. Donate or volunteer today." },
    ],
  }),
  component: Home,
});

const metrics = [
  { value: "2.4M", label: "Trees planted" },
  { value: "180", label: "Tons of plastic removed" },
  { value: "45K", label: "Active volunteers" },
  { value: "62", label: "Countries reached" },
];

const projects = [
  { title: "Amazon Reforestation", img: heroForest, tag: "Forests", desc: "Restoring 50,000 hectares of rainforest with indigenous partners." },
  { title: "Pacific Ocean Cleanup", img: oceanCleanup, tag: "Oceans", desc: "Removing plastic waste from coastlines across 12 nations." },
  { title: "Solar for Villages", img: renewable, tag: "Energy", desc: "Bringing clean renewable power to off-grid communities." },
];

const testimonials = [
  { quote: "Volunteering with Green Earth changed how I see my role on this planet. Every weekend I'm out there making a real difference.", name: "Maya Patel", role: "Volunteer, 3 years" },
  { quote: "Their reforestation work in our region brought back wildlife we hadn't seen in decades. Truly transformative.", name: "Dr. Samuel Okafor", role: "Ecologist, Lagos" },
  { quote: "I donate monthly because I trust them. The transparency and impact reports are unmatched in the sector.", name: "Elena Rodríguez", role: "Monthly Donor" },
];

const gallery = [heroForest, volunteers, oceanCleanup, renewable, education, seedling];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroForest} alt="Forest canopy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-44">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/15 backdrop-blur text-primary-foreground text-xs font-medium">
              <Sparkles className="size-3.5" /> Est. 2008 · 501(c)(3)
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-primary-foreground leading-[1.05]">
              A greener planet,<br />grown together.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-xl leading-relaxed">
              We mobilize communities to restore forests, clean oceans, and educate the next generation of environmental stewards.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-soft hover:opacity-90 transition">
                <Heart className="size-4" /> Donate now
              </Link>
              <Link to="/volunteers" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition">
                Become a volunteer <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-card rounded-3xl shadow-soft border border-border grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border overflow-hidden">
          {metrics.map((m) => (
            <div key={m.label} className="p-8 text-center">
              <div className="font-display text-4xl md:text-5xl font-semibold text-primary">{m.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Trees, title: "Reforestation", desc: "Native species, indigenous partnerships, measurable carbon capture." },
            { icon: Droplets, title: "Ocean Cleanup", desc: "Coastal restoration and microplastic removal across continents." },
            { icon: GraduationCap, title: "Education", desc: "Outdoor classrooms and curriculum that shape lifelong stewards." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-soft transition">
              <div className="size-14 rounded-2xl gradient-leaf grid place-items-center mb-6">
                <Icon className="size-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</p>
              <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-foreground">Active projects worldwide</h2>
            </div>
            <Link to="/projects" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              View all <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{p.tag}</span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-[2rem] gradient-hero p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-primary-foreground leading-tight">Your donation plants forests.</h2>
              <p className="mt-4 text-primary-foreground/85 text-lg max-w-md">$25 plants 50 trees. $100 sponsors a school program. 100% transparency.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <p className="text-sm font-semibold text-muted-foreground mb-4">Choose an amount</p>
              <div className="grid grid-cols-3 gap-3">
                {["$25", "$50", "$100", "$250", "$500", "Other"].map((amt) => (
                  <button key={amt} className="py-3 rounded-xl border border-border hover:border-primary hover:bg-secondary font-semibold text-foreground transition">
                    {amt}
                  </button>
                ))}
              </div>
              <button className="w-full mt-4 py-4 rounded-xl gradient-leaf text-primary-foreground font-semibold shadow-soft hover:opacity-90 transition inline-flex items-center justify-center gap-2">
                <Heart className="size-4" /> Donate now
              </button>
              <p className="text-xs text-muted-foreground mt-3 text-center">Secure payments · Tax-deductible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Voices</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-foreground">Stories from our community</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="p-8 rounded-3xl bg-card border border-border shadow-card flex flex-col">
                <Quote className="size-7 text-primary-glow mb-4" />
                <blockquote className="text-foreground leading-relaxed flex-1">"{t.quote}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Gallery</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-foreground">Moments from the field</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}>
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
