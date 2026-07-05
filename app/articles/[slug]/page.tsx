import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "../../data/news";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsArticles.find((entry) => entry.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-red-800/80 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="text-3xl font-black tracking-[0.2em] text-red-600">
            MLFF
          </Link>
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-300 transition hover:text-red-400">
            Back to Home
          </Link>
        </div>
      </header>

      <article className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8 lg:py-16">
        <div className="overflow-hidden rounded-[2rem] border border-red-950/70 bg-zinc-950 shadow-2xl shadow-red-950/20">
          <img src={article.image} alt={article.title} className="h-72 w-full object-cover sm:h-96" />
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-red-700/60 bg-red-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                {article.category}
              </span>
              <span className="text-sm text-zinc-500">{article.date}</span>
            </div>

            <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">{article.excerpt}</p>

            <div className="mt-8 space-y-5 text-base leading-8 text-zinc-300">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex rounded-full border border-red-700/70 bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
