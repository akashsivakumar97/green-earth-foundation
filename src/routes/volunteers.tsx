import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Trees, Droplets, GraduationCap } from "lucide-react";
import volunteers from "@/assets/volunteers.jpg";

export const Route = createFileRoute("/volunteers")({
  head: () => ({
    meta: [
      { title: "Volunteer — Green Earth Foundation" },
      { name: "description", content: "Join 45,000+ volunteers protecting our planet. Sign up for tree planting, ocean cleanups, and education programs near you." },
    ],
  }),
  component: Volunteers,
});

function Volunteers() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Get involved</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground">Volunteer with us</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">Bring your hands, your time, or your skills. Every weekend, somewhere in the world, our volunteers are making a measurable difference.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Trees, title: "Field volunteer", desc: "Plant trees, clean shorelines, restore habitats." },
            { icon: GraduationCap, title: "Educator", desc: "Lead workshops and outdoor classroom sessions." },
            { icon: Droplets, title: "Skills-based", desc: "Lend your design, legal, or technical expertise." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-7 rounded-3xl bg-card border border-border shadow-card">
              <div className="size-12 rounded-2xl gradient-leaf grid place-items-center mb-4">
                <Icon className="size-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-3xl overflow-hidden">
            <img src={volunteers} alt="Volunteers planting trees" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-card">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <CheckCircle2 className="size-14 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground">You're in!</h3>
                <p className="mt-3 text-muted-foreground max-w-sm">Thanks for signing up. We'll email you within 48 hours with opportunities near you.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-semibold text-foreground">Sign up to volunteer</h2>
                <p className="mt-2 text-sm text-muted-foreground">Tell us a bit about yourself.</p>
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="First name" name="first" required />
                    <Field label="Last name" name="last" required />
                  </div>
                  <Field label="Email" name="email" type="email" required />
                  <Field label="City / Region" name="city" required />
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Area of interest</label>
                    <select required className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-ring/30 outline-none transition">
                      <option value="">Choose one…</option>
                      <option>Tree planting</option>
                      <option>Ocean cleanup</option>
                      <option>Education programs</option>
                      <option>Skills-based volunteering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Why do you want to volunteer?</label>
                    <textarea rows={3} maxLength={500} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-ring/30 outline-none transition resize-none" />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl gradient-leaf text-primary-foreground font-semibold shadow-soft hover:opacity-90 transition">
                    Submit application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={120}
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-ring/30 outline-none transition"
      />
    </div>
  );
}
