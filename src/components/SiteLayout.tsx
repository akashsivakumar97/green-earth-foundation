import { Link, Outlet } from "@tanstack/react-router";
import { Leaf, Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/volunteers", label: "Volunteers" },
  { to: "/events", label: "Events" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="size-9 rounded-full gradient-leaf grid place-items-center shadow-soft">
              <Leaf className="size-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">Green Earth</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full gradient-leaf text-primary-foreground text-sm font-semibold shadow-soft hover:opacity-90 transition"
            >
              Donate
            </Link>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-4 py-3 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md"
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 text-center px-5 py-2.5 rounded-full gradient-leaf text-primary-foreground text-sm font-semibold">
                Donate
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-primary text-primary-foreground mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-9 rounded-full bg-primary-foreground/15 grid place-items-center">
                <Leaf className="size-5" />
              </div>
              <span className="font-display text-xl font-semibold">Green Earth Foundation</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Protecting our planet through community-led reforestation, ocean cleanup, and environmental education since 2008.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="size-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 grid place-items-center transition">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-base">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {nav.slice(1).map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-primary-foreground">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-base">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>123 Forest Lane</li>
              <li>Portland, OR 97201</li>
              <li>hello@greenearth.org</li>
              <li>+1 (555) 010-2030</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
            <p>© {new Date().getFullYear()} Green Earth Foundation. All rights reserved.</p>
            <p>A registered 501(c)(3) nonprofit organization.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
