"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { newsArticles } from "./data/news";

const featuredStories = newsArticles.slice(0, 3).map((article) => ({
  title: article.title,
  summary: article.excerpt,
  tag: article.category,
  time: article.date,
  slug: article.slug,
}));

const latestNews = newsArticles.map((article) => ({
  ...article,
  href: `/articles/${article.slug}`,
}));

const categories = [
  {
    id: "liverpool",
    title: "Liverpool",
    summary: "Latest matchday reports, tactical insight, and club updates from Anfield.",
  },
  {
    id: "transfers",
    title: "Transfers",
    summary: "Breaking market news, rumored signings, and the biggest stories around Europe.",
  },
  {
    id: "world-cup",
    title: "World Cup",
    summary: "Competition previews, star players, and tournament momentum from every corner of the globe.",
  },
  {
    id: "legends",
    title: "Legends",
    summary: "Memorable careers, historic performances, and exclusive voices from football’s greats.",
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
];

export default function Home() {
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStory((current) => (current + 1) % featuredStories.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentStory = featuredStories[activeStory];

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-red-800/80 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="text-3xl font-black tracking-[0.2em] text-red-600">
            MLFF
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 md:flex">
            <a href="#top" className="transition hover:text-red-500">
              Home
            </a>
            <a href="#liverpool" className="transition hover:text-red-500">
              Liverpool
            </a>
            <a href="#transfers" className="transition hover:text-red-500">
              Transfers
            </a>
            <a href="#world-cup" className="transition hover:text-red-500">
              World Cup
            </a>
            <a href="#legends" className="transition hover:text-red-500">
              Legends
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-red-950/70 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 p-6 shadow-2xl shadow-red-950/20 md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.25),_transparent_45%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-red-700/60 bg-red-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                Breaking News
              </div>
              <h2 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                {currentStory.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
                {currentStory.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#latest"
                  className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Read the full report
                </a>
                <a
                  href="#transfers"
                  className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-red-600 hover:text-red-400"
                >
                  Explore transfers
                </a>
              </div>
              <div className="mt-8 flex gap-2">
                {featuredStories.map((story, index) => (
                  <button
                    key={story.title}
                    type="button"
                    onClick={() => setActiveStory(index)}
                    aria-label={`Show ${story.tag} story`}
                    className={`h-2.5 rounded-full transition ${
                      index === activeStory ? "w-10 bg-red-600" : "w-2.5 bg-zinc-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {featuredStories.map((story, index) => (
                <button
                  key={story.title}
                  type="button"
                  onClick={() => setActiveStory(index)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    index === activeStory
                      ? "border-red-700 bg-zinc-900"
                      : "border-zinc-800 bg-zinc-900/80 hover:border-red-700 hover:bg-zinc-900"
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-zinc-500">
                    <span>{story.tag}</span>
                    <span>{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{story.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{story.summary}</p>
                  <p className="mt-3 text-sm text-red-400">{story.time}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="latest" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Latest News</p>
            <h2 className="text-3xl font-black text-white sm:text-4xl">Fresh updates from the pitch</h2>
          </div>
          <a href="#top" className="text-sm font-semibold text-zinc-300 transition hover:text-red-400">
            Back to top
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {latestNews.map((item) => (
            <Link key={item.slug} href={item.href} className="group block">
              <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-red-600/70">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">{item.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{item.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Explore by category</p>
          <h2 className="text-3xl font-black text-white sm:text-4xl">Your next read, tailored to the game</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.id}
              id={category.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 transition hover:border-red-700 hover:bg-zinc-900"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">{category.title}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{category.title} Focus</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{category.summary}</p>
              <a href="#latest" className="mt-5 inline-flex text-sm font-semibold text-red-400 transition hover:text-red-300">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-2xl font-black tracking-[0.25em] text-red-600">MLFF</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-zinc-400">
              The professional home for Liverpool football coverage, insights, and fan-first stories.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-zinc-300">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-800 px-4 py-2 transition hover:border-red-600 hover:text-red-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}