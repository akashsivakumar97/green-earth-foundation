import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Heart, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Donate — Green Earth Foundation" },
      { name: "description", content: "Get in touch with Green Earth Foundation or make a tax-deductible donation to support our conservation work." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [amount, setAmount] = useState("$50");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Get in touch</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-foreground">Let's grow something together</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">Donate, partner, or just say hello — we'd love to hear from you.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10">
        {/* Donation */}
        <div className="rounded-3xl gradient-hero p-8 md:p-10 text-primary-foreground shadow-soft">
          <Heart className="size-8 mb-4" />
          <h2 className="text-3xl font-semibold">Make a donation</h2>
          <p className="mt-3 text-primary-foreground/85">Every dollar plants two trees or removes one pound of ocean plastic.</p>

          <div className="mt-8 bg-card text-foreground rounded-2xl p-6 shadow-card">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Choose an amount</p>
            <div className="grid grid-cols-3 gap-2.5">
              {["$25", "$50", "$100", "$250", "$500", "Other"].map((a) => (
                <button key={a} onClick={() => setAmount(a)} className={`py-3 rounded-xl border font-semibold transition ${amount === a ? "border-primary bg-secondary text-primary" : "border-border hover:border-primary text-foreground"}`}>
                  {a}
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-secondary/50">
              <span className="text-sm font-medium text-foreground">Monthly recurring</span>
              <input type="checkbox" className="size-5 accent-primary" />
            </div>
            <button className="w-full mt-4 py-4 rounded-xl gradient-leaf text-primary-foreground font-semibold shadow-soft hover:opacity-90 transition inline-flex items-center justify-center gap-2">
              <Heart className="size-4" /> Donate {amount}
            </button>
            <p className="text-xs text-muted-foreground mt-3 text-center">Secure checkout · Tax-deductible · 501(c)(3)</p>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-card">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <CheckCircle2 className="size-14 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground">Message sent</h3>
              <p className="mt-3 text-muted-foreground max-w-sm">We'll respond within 2 business days.</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-semibold text-foreground">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">Partnerships, press, or general inquiries.</p>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <Field label="Your name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Subject" name="subject" required />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea required rows={5} maxLength={1000} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-ring/30 outline-none transition resize-none" />
                </div>
                <button type="submit" className="w-full py-4 rounded-xl gradient-leaf text-primary-foreground font-semibold shadow-soft hover:opacity-90 transition">
                  Send message
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 grid md:grid-cols-3 gap-6">
        {[
          { icon: Mail, label: "Email", value: "hello@greenearth.org" },
          { icon: Phone, label: "Phone", value: "+1 (555) 010-2030" },
          { icon: MapPin, label: "Office", value: "123 Forest Lane, Portland, OR" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="p-6 rounded-2xl bg-card border border-border flex items-center gap-4">
            <div className="size-12 rounded-xl gradient-leaf grid place-items-center shrink-0">
              <Icon className="size-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
              <div className="font-medium text-foreground">{value}</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <input id={name} name={name} type={type} required={required} maxLength={150}
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-ring/30 outline-none transition" />
    </div>
  );
}
