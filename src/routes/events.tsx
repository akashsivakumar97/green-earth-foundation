import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Green Earth Foundation" },
      { name: "description", content: "Join upcoming tree plantings, beach cleanups, fundraisers, and educational workshops near you." },
    ],
  }),
  component: Events,
});

const events = [
  { date: "Jun 22, 2026", time: "8:00 AM", title: "Community Tree Planting Day", location: "Forest Park, Portland OR", desc: "Help us plant 2,000 native saplings along the Willamette restoration corridor.", featured: true },
  { date: "Jul 06, 2026", time: "9:30 AM", title: "Pacific Beach Cleanup", location: "Cannon Beach, OR", desc: "Coastal cleanup with marine biologists. Tools and gloves provided." },
  { date: "Jul 19, 2026", time: "6:00 PM", title: "Annual Green Gala", location: "Riverside Hotel, Portland", desc: "A formal evening celebrating our donors and unveiling 2027 initiatives." },
  { date: "Aug 03, 2026", time: "10:00 AM", title: "Kids in Nature Workshop", location: "Hoyt Arboretum", desc: "Outdoor classroom for ages 6–12. Free with registration." },
  { date: "Aug 15, 2026", time: "7:00 AM", title: "Mt. Hood Conservation Hike", location: "Mt. Hood NF, OR", desc: "Guided trail restoration hike. Moderate difficulty, 8 miles." },
  { date: "Sep 02, 2026", time: "12:00 PM", title: "Sustainability Speaker Series", location: "Online", desc: "Dr. Aisha Mwangi on community-led reforestation in East Africa." },
];

function Events() {
  return (
    <>
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">What's happening</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground">Upcoming events</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">Show up. Pitch in. Meet your local conservation community.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-6">
        {events.map((e) => (
          <article key={e.title} className={`p-6 md:p-8 rounded-3xl border shadow-card grid md:grid-cols-[160px_1fr_auto] gap-6 items-center ${e.featured ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`}>
            <div className={`rounded-2xl p-4 text-center ${e.featured ? "bg-primary-foreground/10" : "bg-secondary"}`}>
              <Calendar className={`size-5 mx-auto mb-2 ${e.featured ? "text-primary-foreground" : "text-primary"}`} />
              <div className={`text-sm font-semibold ${e.featured ? "text-primary-foreground" : "text-foreground"}`}>{e.date}</div>
              <div className={`text-xs mt-1 ${e.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{e.time}</div>
            </div>
            <div>
              <h3 className={`text-2xl font-semibold ${e.featured ? "text-primary-foreground" : "text-foreground"}`}>{e.title}</h3>
              <div className={`mt-2 flex flex-wrap gap-4 text-sm ${e.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                <span className="inline-flex items-center gap-1.5"><MapPin className="size-4" />{e.location}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="size-4" />{e.time}</span>
              </div>
              <p className={`mt-3 leading-relaxed ${e.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{e.desc}</p>
            </div>
            <button className={`px-6 py-3 rounded-full font-semibold transition ${e.featured ? "bg-accent text-accent-foreground hover:opacity-90" : "gradient-leaf text-primary-foreground hover:opacity-90"}`}>
              RSVP
            </button>
          </article>
        ))}
      </section>
    </>
  );
}
