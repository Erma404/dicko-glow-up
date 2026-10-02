import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import {
  ArrowUpRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos | Dicko BTP – Plombier Chauffagiste Paris Île-de-France" },
      {
        name: "description",
        content:
          "DICKO BTP : entreprise CVC 100% B2B à Paris depuis 15 ans. Découvrez notre équipe, nos valeurs et notre zone d'intervention en Île-de-France.",
      },
      { property: "og:title", content: "À propos | Dicko BTP – Plombier Chauffagiste Paris" },
      {
        property: "og:description",
        content:
          "DICKO, entreprise spécialisée en plomberie, chauffage et VMC pour bâtiments tertiaires, logements collectifs et infrastructures publiques.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/a-propos") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/a-propos") }],
  }),
  component: AProposPage,
});

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "200+", label: "Projets réalisés" },
  { value: "50+", label: "Clients B2B" },
  { value: "8", label: "Départements IDF" },
];

const secteurs = [
  {
    icon: Building2,
    title: "Bâtiments tertiaires",
    desc: "Bureaux, commerces, entrepôts et espaces professionnels",
  },
  {
    icon: Layers,
    title: "Logements collectifs",
    desc: "Résidences, immeubles et copropriétés",
  },
  {
    icon: ShieldCheck,
    title: "Infrastructures publiques",
    desc: "Équipements publics et marchés publics",
  },
];

const valeurs = [
  {
    icon: Wrench,
    title: "Expertise technique",
    desc: "Une équipe qualifiée et formée aux dernières normes du bâtiment.",
  },
  {
    icon: CalendarCheck,
    title: "Respect des délais",
    desc: "Maîtrise du planning chantier et livraison dans les temps.",
  },
  {
    icon: Layers,
    title: "PME réactive",
    desc: "Flexibilité et adaptabilité à vos contraintes de projet.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité certifiée",
    desc: "Respect strict des normes en vigueur et conformité réglementaire.",
  },
];

const engagements = [
  "Intervention sur toute l'Île-de-France (8 départements)",
  "Respect strict des normes en vigueur",
  "Maîtrise des délais chantier",
  "PME réactive et flexible",
];

function AProposPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-ink dicko-watermark relative overflow-hidden rounded-[2rem] px-6 py-20 md:rounded-[2.5rem] md:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <span className="eyebrow">À propos de nous</span>
            <h1 className="mt-6 max-w-4xl text-[2.2rem] leading-[1.02] font-bold tracking-tight sm:text-5xl lg:text-[4rem]">
              DICKO – <span className="text-gold">PLOMBERIE</span> •{" "}
              <span className="text-gold">CHAUFFAGE</span> • <span className="text-gold">VMC</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Votre partenaire technique en installation CVC pour bâtiments professionnels en
              Île-de-France depuis plus de 15 ans.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-gold">
                Nous contacter <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-3 pt-3 md:px-5">
        <div className="band-cream rounded-[2rem] px-6 py-12 md:px-12 lg:py-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((s) => {
              const numeric = s.value.replace(/[^0-9]/g, "");
              const suffix = s.value.replace(/[0-9]/g, "");
              return (
                <div key={s.label} className="px-2 text-center">
                  <div className="font-display text-4xl leading-none font-bold sm:text-5xl lg:text-6xl">
                    {numeric}
                    <span className="text-gold">{suffix}</span>
                  </div>
                  <div className="mt-3 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTRO + ÉQUIPE */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-xl text-3xl leading-tight sm:text-5xl">
              Une équipe <span className="text-gold">à taille humaine</span>
            </h2>
            <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">
              DICKO est une entreprise spécialisée en installation de{" "}
              <strong className="font-semibold text-foreground">plomberie</strong>,{" "}
              <strong className="font-semibold text-foreground">chauffage</strong> et{" "}
              <strong className="font-semibold text-foreground">VMC</strong> pour les bâtiments
              tertiaires, logements collectifs et infrastructures publiques en Île-de-France.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Nous accompagnons entreprises générales, promoteurs immobiliers et collectivités dans
              la réalisation de leurs projets techniques. Notre expertise couvre l'ensemble des
              travaux CVC.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Chez DICKO, nous croyons que la réussite d'un projet repose avant tout sur les hommes
              et les femmes qui le portent. Notre équipe de techniciens qualifiés met son
              savoir-faire au service de vos projets avec passion et professionnalisme.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {engagements.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src={aboutImg}
              alt="Équipe DICKO sur chantier en Île-de-France"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-[420px] w-full rounded-[1.75rem] object-cover lg:h-[600px]"
            />
            <div className="absolute -left-4 bottom-8 rounded-2xl bg-gold px-8 py-6 text-primary-foreground lg:-left-8">
              <div className="font-display text-5xl leading-none font-bold">15+</div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
                Ans d'expérience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTORIELLE */}
      <section className="band-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="text-3xl leading-tight sm:text-5xl">
            Notre <span className="text-gold">expertise</span> sectorielle
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nous intervenons sur différents types de bâtiments professionnels
          </p>
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {secteurs.map((s) => (
              <article
                key={s.title}
                className="rounded-[1.75rem] border border-border bg-card p-8 transition-transform duration-500 hover:-translate-y-1.5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-primary-foreground">
                  <s.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROXIMITÉ */}
      <section className="px-3 py-6 md:px-5">
        <div className="band-ink dicko-watermark overflow-hidden rounded-[2rem] px-6 py-20 md:rounded-[2.5rem] md:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="max-w-xl text-3xl leading-tight sm:text-5xl">
                La <span className="text-gold">proximité</span> avec nos clients
              </h2>
              <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">
                Chez DICKO, nous plaçons la relation client au cœur de notre métier. Notre taille de
                PME nous permet d'être réactifs, disponibles et à l'écoute de vos besoins
                spécifiques. Chaque projet est unique, et nous y accordons la même attention, quelle
                que soit son envergure.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Nous croyons en une collaboration transparente et durable. De la première prise de
                contact à la livraison finale, vous avez un interlocuteur dédié qui connaît votre
                projet dans les moindres détails.
              </p>
              <ul className="mt-10 flex flex-wrap gap-3">
                {["Interlocuteur unique", "Réactivité garantie", "Suivi personnalisé"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-5 py-2 text-xs tracking-[0.12em] uppercase"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-[1.75rem] border border-border p-12">
              <div className="text-center">
                <div className="font-display text-6xl leading-none font-bold lg:text-8xl">
                  100<span className="text-gold">%</span>
                </div>
                <div className="mt-4 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Clients satisfaits
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="text-3xl leading-tight sm:text-5xl">
            Nos <span className="text-gold">valeurs</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Les principes qui guident notre engagement au quotidien
          </p>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valeurs.map((v) => (
              <article key={v.title} className="rounded-[1.75rem] border border-border bg-card p-8">
                <v.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO TEXT */}
      <section className="band-cream relative py-20">
        <div className="mx-auto max-w-[900px] px-5 md:px-10">
          <h2 className="text-2xl sm:text-3xl">Notre expertise technique</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            En tant qu'<strong className="text-foreground">entreprise plomberie Île-de-France</strong>,
            nous maîtrisons les <strong className="text-foreground">réseaux hydrauliques</strong>, les{" "}
            <strong className="text-foreground">colonnes montantes</strong> et les{" "}
            <strong className="text-foreground">réseaux sanitaires</strong>. Notre expertise en{" "}
            <strong className="text-foreground">installation chauffage collectif</strong> couvre la{" "}
            <strong className="text-foreground">chaufferie</strong>, le{" "}
            <strong className="text-foreground">réseau thermique</strong> et la{" "}
            <strong className="text-foreground">distribution chauffage</strong>. Pour la{" "}
            <strong className="text-foreground">ventilation mécanique contrôlée</strong>, nous
            installons des systèmes <strong className="text-foreground">VMC simple flux</strong> et{" "}
            <strong className="text-foreground">double flux</strong>. En matière de{" "}
            <strong className="text-foreground">réseau gaz</strong>, nous assurons la{" "}
            <strong className="text-foreground">mise en conformité</strong> et le respect des{" "}
            <strong className="text-foreground">normes gaz bâtiment</strong>.
          </p>
        </div>
      </section>
    </main>
  );
}
