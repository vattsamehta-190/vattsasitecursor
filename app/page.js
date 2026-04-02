"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Podcast,
  Instagram,
  Linkedin,
  Sparkles,
  BookOpen,
  Play,
} from "lucide-react";

const Button = React.forwardRef(function Button(
  { className = "", variant = "default", asChild = false, children, ...props },
  ref
) {
  const Comp = asChild ? "div" : "button";
  const baseStyle =
    "inline-flex items-center justify-center rounded-full text-sm font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default:
      "bg-[#E87A5D] text-white shadow hover:bg-[#D56A4D] hover:-translate-y-0.5",
    outline:
      "border-2 border-[#1E3A44] bg-transparent text-[#1E3A44] shadow-sm hover:bg-[#1E3A44] hover:text-white",
    ghost: "hover:bg-[#F3EFE7] text-[#1E3A44]",
    secondary:
      "bg-[#1E3A44] text-white hover:bg-[#142A32] shadow-md hover:-translate-y-0.5",
    white:
      "bg-white text-[#1E3A44] hover:bg-gray-100 shadow-md hover:-translate-y-0.5",
  };
  return (
    <Comp
      ref={ref}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
});

const Card = React.forwardRef(function Card(
  { className = "", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={`rounded-3xl border-0 shadow-sm overflow-hidden ${className}`}
      {...props}
    />
  );
});

const CardContent = React.forwardRef(function CardContent(
  { className = "", ...props },
  ref
) {
  return (
    <div ref={ref} className={`p-8 ${className}`} {...props} />
  );
});

const SITE = {
  name: "Vattsa",
  tagline: "Consultant • Creator • Podcast Host",
  currentLocation: "Manhattan, New York",
  lastUpdatedISO: "2026-02-24T12:00:00Z",
  email: "VattsaMehta@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/thevattsanator/?hl=en",
    linkedin: "https://www.linkedin.com/in/vattsa-mehta-676620113/",
    notionJournalNav:
      "https://www.notion.so/Life-Updates-282f015c3eff80d8afb4deca50207656",
    notionJournalLatest:
      "https://www.notion.so/April-1-2026-336f015c3eff8038b917f9421d97bc0a",
  },
  ggr: {
    spotify: "https://open.spotify.com/show/6NZO8HHBoBON5xIXZs9xMm",
    apple: "https://podcasts.apple.com/us/podcast/gals-getting-rich/id1629224294",
  },
  stats: {
    physical: "8,250",
    social: "6",
    mental: "88",
  },
  consuming: [
    {
      type: "Reading",
      title: "We Are All Guilty",
      author: "Karin Slaughter",
      isPodcast: false,
      url: "https://www.goodreads.com/search?q=We+Are+All+Guilty+Karin+Slaughter",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop",
    },
    {
      type: "Reading",
      title: "They Can't Kill Us Until They Kill Us",
      author: "Hanif Abdurraqib",
      isPodcast: false,
      url: "https://www.goodreads.com/book/show/33947154-they-can-t-kill-us-until-they-kill-us?ref=nav_sb_ss_1_17",
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop",
    },
    {
      type: "Listening to",
      title: "Freakonomics Radio",
      author: "Stephen J. Dubner",
      isPodcast: true,
      url: "https://freakonomics.com/series/freakonomics-radio/",
      image:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=400&auto=format&fit=crop",
    },
  ],
  stack: ["Notion", "Claude", "Gemini", "DJI Osmo 2"],
};

function prettyAgo(iso) {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 60) return `${mins} minute${mins !== 1 ? "s" : ""} ago`;
  const h = Math.floor(mins / 60);
  if (h < 24) return `${h} hour${h !== 1 ? "s" : ""} ago`;
  const d = Math.floor(h / 24);
  return `${d} day${d !== 1 ? "s" : ""} ago`;
}

function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A44] mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-[#5A6D74] max-w-2xl">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </section>
  );
}

export default function Page() {
  const lastUpdatedText = useMemo(() => prettyAgo(SITE.lastUpdatedISO), []);

  return (
    <div className="min-h-screen bg-[#FFFBF4] text-[#1E3A44] antialiased selection:bg-[#E87A5D] selection:text-white font-sans">
      <header className="absolute top-0 w-full z-40 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between border-b border-[#E8E1D5]">
          <a
            href="#home"
            className="font-serif font-bold text-3xl tracking-tight text-[#1E3A44] hover:text-[#E87A5D] transition-colors"
          >
            {SITE.name}.
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold tracking-widest uppercase text-[#5A6D74]">
            <a
              href="#podcast"
              className="hover:text-[#E87A5D] transition-colors"
            >
              Podcast
            </a>
            <a href="#stats" className="hover:text-[#E87A5D] transition-colors">
              Stats
            </a>
            <a
              href="#consuming"
              className="hover:text-[#E87A5D] transition-colors"
            >
              Consuming
            </a>
            <a
              href={SITE.socials.notionJournalNav}
              target="_blank"
              rel="noreferrer"
              className="text-[#1E3A44] border-b-2 border-[#1E3A44] pb-1 hover:text-[#E87A5D] hover:border-[#E87A5D] transition-colors"
            >
              The Journal
            </a>
          </nav>
        </div>
      </header>

      <main
        id="home"
        className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2EBE0] rounded-full text-xs font-bold tracking-widest text-[#8A7963] uppercase mb-8">
                <MapPin size={14} /> Building in {SITE.currentLocation}
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-[#1E3A44] mb-6">
                Consultant, creator, and{" "}
                <span className="text-[#E87A5D] italic">builder.</span>
              </h1>
              <p className="text-xl text-[#5A6D74] leading-relaxed mb-10 max-w-lg">
                I live by the values of exploration, iteration, and connection. I
                love building decks that persuade, products that ship, and content
                that helps people level up.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="px-8 py-6 text-base">
                  <a
                    href={SITE.socials.notionJournalLatest}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read the Latest Journal
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="px-8 py-6 text-base bg-white"
                >
                  <a href={`mailto:${SITE.email}`}>Get in Touch</a>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] w-full hidden md:block"
          >
            <div className="absolute inset-0 bg-[#DCE4D8] rounded-t-full rounded-b-[4rem] shadow-xl transform rotate-3" />
            <div className="absolute inset-4 bg-[#F8E2E0] rounded-t-full rounded-b-[3rem] overflow-hidden flex items-center justify-center border-4 border-white transform -rotate-2 transition-transform hover:rotate-0 duration-500">
              <span className="font-serif text-[#C49B97] text-2xl rotate-[-90deg] tracking-widest">
                PORTRAIT
              </span>
            </div>
            <div className="absolute -top-6 -right-6 text-[#E87A5D]">
              <Sparkles size={48} strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>
      </main>

      <section id="podcast" className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1E3A44] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#274A57] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 text-[#E87A5D] font-bold tracking-widest uppercase text-xs mb-6">
                  <Podcast size={18} /> <span>The Podcast</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                  Gals Getting Rich
                </h2>
                <p className="text-lg text-[#A9B8BD] mb-8 leading-relaxed">
                  Candid, upbeat conversations about money, careers, side hustles,
                  and leveling up — served with humor and practical takeaways.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="white" asChild className="px-8 py-5">
                    <a
                      href={SITE.ggr.spotify}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Play size={18} fill="currentColor" /> Listen on Spotify
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white text-white hover:bg-white hover:text-[#1E3A44] px-8 py-5"
                  >
                    <a href={SITE.ggr.apple} target="_blank" rel="noreferrer">
                      Apple Podcasts
                    </a>
                  </Button>
                </div>
              </div>

              <div className="hidden md:flex justify-center">
                <div className="w-64 h-64 bg-[#E87A5D] rounded-2xl shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500 border-8 border-white/10 flex items-center justify-center p-6 text-center">
                  <span className="font-serif text-3xl font-bold leading-tight">
                    GALS
                    <br />
                    GETTING
                    <br />
                    RICH.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section
        id="stats"
        title="The Quantified Self"
        subtitle={`A look at the numbers. Last updated ${lastUpdatedText}.`}
      >
        <div className="grid sm:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#DCE4D8] text-[#1E3A44] h-full">
              <CardContent className="flex flex-col justify-between h-full">
                <span className="text-xs font-bold tracking-widest uppercase opacity-70 mb-8 block">
                  Physical Health
                </span>
                <div>
                  <div className="text-6xl font-serif mb-2">
                    {SITE.stats.physical}
                  </div>
                  <p className="text-sm font-medium opacity-80">
                    Steps in the past 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-[#F8E2E0] text-[#1E3A44] h-full">
              <CardContent className="flex flex-col justify-between h-full">
                <span className="text-xs font-bold tracking-widest uppercase opacity-70 mb-8 block">
                  Social Health
                </span>
                <div>
                  <div className="text-6xl font-serif mb-2">
                    {SITE.stats.social}
                  </div>
                  <p className="text-sm font-medium opacity-80">
                    Unique places visited today
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-[#F2EBE0] text-[#1E3A44] h-full">
              <CardContent className="flex flex-col justify-between h-full">
                <span className="text-xs font-bold tracking-widest uppercase opacity-70 mb-8 block">
                  Mental Health
                </span>
                <div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-6xl font-serif">
                      {SITE.stats.mental}
                    </span>
                    <span className="text-2xl font-serif opacity-50">/100</span>
                  </div>
                  <p className="text-sm font-medium opacity-80">
                    Overall score for the day
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section
        id="consuming"
        title="The Bookshelf"
        subtitle="Good inputs lead to good outputs. Here is what is currently feeding my brain."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {SITE.consuming.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <a
                href={item.url || "#"}
                target="_blank"
                rel="noreferrer"
                className="block group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E8E1D5] group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="h-48 bg-[#F3EFE7] relative overflow-hidden flex items-center justify-center p-4">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <BookOpen size={40} className="text-[#1E3A44] opacity-20" />
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1E3A44] z-10">
                      {item.type}
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h4 className="font-serif text-xl text-[#1E3A44] mb-2 leading-snug group-hover:text-[#E87A5D] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-sm text-[#5A6D74] font-medium block">
                      by {item.author}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="bg-[#1E3A44] text-white py-24 mt-20 border-t-8 border-[#E87A5D]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif mb-6">The Tool Stack</h2>
            <p className="text-[#A9B8BD] mb-8">
              The software and hardware I rely on daily to get things done,
              organize my life, and create content.
            </p>
            <div className="flex flex-wrap gap-3">
              {SITE.stack.map((tool, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 bg-white/10 rounded-full border border-white/20 text-sm font-medium tracking-wide"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-6">Let&apos;s Connect</h2>
            <p className="text-[#A9B8BD] mb-8">
              Want to collaborate or swap ideas? I&apos;m prioritizing community
              and connection right now, so I&apos;m just a quick reply away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="white" asChild className="px-8 py-6">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2"
                >
                  <Mail size={18} /> Email Me
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6"
              >
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram size={18} /> Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#A9B8BD]">
          <div>© {new Date().getFullYear()} Vattsa Mehta. Built with intent.</div>
          <div className="flex gap-6">
            <a
              href={SITE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
