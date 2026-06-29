import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReadingProgress } from "@/components/reading-progress";
import { getPost, posts } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "글을 찾을 수 없음 | Signal Foundry",
    };
  }

  return {
    title: `${post.title} | Signal Foundry`,
    description: post.dek,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const index = posts.findIndex((item) => item.slug === post.slug);
  const nextPost = posts[(index + 1) % posts.length];
  const previousPost = posts[(index - 1 + posts.length) % posts.length];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--ink)] text-stone-100">
      <ReadingProgress />
      <div className="grain" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_8%,rgba(125,211,252,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(251,113,133,0.12),transparent_30%)]" />

      <nav className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link className="rounded-full border border-stone-100/15 bg-stone-950/55 px-4 py-2 text-sm font-bold text-stone-100 backdrop-blur-xl transition hover:border-stone-100/35" href="/">
          홈으로
        </Link>
        <span className="hidden font-mono text-sm text-stone-400 sm:inline">{post.category} / {post.readTime}</span>
      </nav>

      <article className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <header className="grid min-h-[calc(100dvh-5rem)] items-end gap-10 pb-16 pt-8 lg:grid-cols-[1fr_0.78fr] lg:pb-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-200/35 bg-stone-950/55 px-4 py-2 text-sm text-stone-300 backdrop-blur-xl">
              {post.date} / {post.temperature}
            </p>
            <h1 className="max-w-6xl text-balance text-[clamp(3.2rem,8vw,8rem)] font-black leading-[0.9] tracking-[-0.08em] text-stone-50">
              {post.title}
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-stone-300 sm:text-xl">{post.intro}</p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-stone-100/15 bg-stone-950/60 p-4 shadow-2xl shadow-cyan-950/25 backdrop-blur-xl">
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center opacity-65 saturate-[0.9]"
              style={{ backgroundImage: `url(https://picsum.photos/seed/${post.imageSeed}/1200/1400)` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,15,0.05),rgba(7,10,15,0.84))]" />
            <div className="relative flex min-h-[420px] flex-col justify-between rounded-[1.45rem] border border-stone-100/10 p-6">
              <div className="flex flex-wrap gap-2">
                {post.fragments.map((fragment) => (
                  <span key={fragment} className="rounded-full border border-stone-100/15 bg-stone-950/60 px-3 py-1.5 font-mono text-xs text-stone-200">
                    {fragment}
                  </span>
                ))}
              </div>
              <p className="max-w-sm text-pretty text-sm leading-6 text-stone-200">{post.dek}</p>
            </div>
          </div>
        </header>

        <div className="prose-lab mx-auto max-w-6xl">
          {post.body.map((section) => (
            <section className="section-row" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.copy}</p>
            </section>
          ))}
        </div>

        <footer className="mx-auto mt-12 grid max-w-6xl gap-4 border-t border-stone-100/15 pt-8 sm:grid-cols-2">
          <Link className="rounded-[1.5rem] border border-stone-100/15 bg-stone-950/55 p-6 transition hover:-translate-y-1 hover:border-stone-100/35" href={`/posts/${previousPost.slug}`}>
            <span className="font-mono text-xs text-stone-500">이전 글</span>
            <strong className="mt-3 block text-2xl font-black tracking-[-0.04em] text-stone-50">{previousPost.title}</strong>
          </Link>
          <Link className="rounded-[1.5rem] border border-stone-100/15 bg-stone-950/55 p-6 text-right transition hover:-translate-y-1 hover:border-stone-100/35" href={`/posts/${nextPost.slug}`}>
            <span className="font-mono text-xs text-stone-500">다음 글</span>
            <strong className="mt-3 block text-2xl font-black tracking-[-0.04em] text-stone-50">{nextPost.title}</strong>
          </Link>
        </footer>
      </article>
    </main>
  );
}
