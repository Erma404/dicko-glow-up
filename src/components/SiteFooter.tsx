import { Link } from "@tanstack/react-router";

import dickoLogo from "@/assets/dicko-logo.png";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Services", to: "/services" },
  { label: "Réalisations", to: "/realisations" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

const zones = [
  "Paris (75)",
  "Hauts-de-Seine (92)",
  "Seine-Saint-Denis (93)",
  "Val-de-Marne (94)",
  "Seine-et-Marne (77)",
  "Yvelines (78)",
  "Essonne (91)",
  "Val-d'Oise (95)",
];

export function SiteFooter() {
  return (
    <footer id="site-footer" className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="band-ink dicko-watermark relative overflow-hidden rounded-[2rem] px-6 pt-16 md:rounded-[2.5rem] md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={dickoLogo}
                  alt="Logo DICKO — plomberie, chauffage et VMC"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <div className="font-display text-2xl font-bold tracking-[0.08em]">DICKO</div>
                  <div className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                    Plomberie • Chauffage • VMC
                  </div>
                </div>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Entreprise spécialisée en travaux d'installation d'eau, gaz, chauffage et
                ventilation pour bâtiments professionnels en Île-de-France.
              </p>
              <address className="mt-5 text-xs tracking-[0.14em] text-muted-foreground uppercase not-italic">
                25 rue Archereau, 75019 Paris
              </address>
            </div>

            <nav aria-label="Navigation du site">
              <h2 className="text-sm font-semibold">Navigation</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm font-semibold">Nos Services</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {[
                  { label: "Plomberie", to: "/services" as const },
                  { label: "Chauffage", to: "/services" as const },
                  { label: "VMC", to: "/services/installation-vmc" as const },
                  { label: "Gaz", to: "/services" as const },
                ].map((s) => (
                  <li key={s.label}>
                    <Link to={s.to} className="transition-colors hover:text-foreground">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold">Zones</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {zones.map((z) => (
                  <li key={z}>{z}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            aria-hidden
            className="mt-12 font-display leading-[0.8] font-bold tracking-[0.06em] text-foreground/12 select-none"
            style={{ fontSize: "clamp(4.5rem, 21vw, 19rem)" }}
          >
            DICKO
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground md:flex-row">
            <span>© {new Date().getFullYear()} DICKO. Tous droits réservés.</span>
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/mentions-legales" className="transition-colors hover:text-foreground">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="transition-colors hover:text-foreground">
                Politique de confidentialité
              </Link>
              <a
                href="https://ernestinematjabo.com/"
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-foreground"
              >
                Réalisé par Ernestine
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
