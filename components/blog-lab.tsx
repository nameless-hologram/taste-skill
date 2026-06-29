"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useMemo, useState, type PointerEvent } from "react";
import { categories, type BlogPost } from "@/lib/posts";

const accentStyles: Record<string, { text: string; border: string; wash: string; button: string }> = {
  cyan: {
    text: "text-cyan-200",
    border: "border-cyan-200/40",
    wash: "from-cyan-300/25 via-slate-400/10 to-transparent",
    button: "bg-cyan-200 text-slate-950 hover:bg-cyan-100",
  },
  rose: {
    text: "text-rose-200",
    border: "border-rose-200/40",
    wash: "from-rose-300/25 via-zinc-300/10 to-transparent",
    button: "bg-rose-200 text-slate-950 hover:bg-rose-100",
  },
  amber: {
    text: "text-amber-200",
    border: "border-amber-200/40",
    wash: "from-amber-300/25 via-stone-300/10 to-transparent",
    button: "bg-amber-200 text-slate-950 hover:bg-amber-100",
  },
  violet: {
    text: "text-violet-200",
    border: "border-violet-200/40",
    wash: "from-violet-300/25 via-indigo-300/10 to-transparent",
    button: "bg-violet-200 text-slate-950 hover:bg-violet-100",
  },
  lime: {
    text: "text-lime-200",
    border: "border-lime-200/40",
    wash: "from-lime-300/25 via-emerald-300/10 to-transparent",
    button: "bg-lime-200 text-slate-950 hover:bg-lime-100",
  },
  orange: {
    text: "text-orange-200",
    border: "border-orange-200/40",
    wash: "from-orange-300/25 via-red-300/10 to-transparent",
    button: "bg-orange-200 text-slate-950 hover:bg-orange-100",
  },
};

type BlogLabProps = {
  posts: BlogPost[];
};

export function BlogLab({ posts }: BlogLabProps) {
  const [active, setActive] = useState<(typeof categories)[number]>("전체");
  const [hoveredSlug, setHoveredSlug] = useState(posts[0]?.slug ?? "");
  const reducedMotion = useReducedMotion();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 120, damping: 26, mass: 0.3 });
  const smoothY = useSpring(cursorY, { stiffness: 120, damping: 26, mass: 0.3 });
  const spotlightX = useTransform(smoothX, (value) => value - 180);
  const spotlightY = useTransform(smoothY, (value) => value - 180);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.35 });

  const filteredPosts = useMemo(() => {
    if (active === "전체") return posts;
    return posts.filter((post) => post.category === active);
  }, [active, posts]);

  const hoveredPost = posts.find((post) => post.slug === hoveredSlug) ?? posts[0];
  const featured = posts[0];
  const activeAccent = accentStyles[hoveredPost?.accent ?? "cyan"] ?? accentStyles.cyan;

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reducedMotion) return;
    cursorX.set(event.clientX);
    cursorY.set(event.clientY);
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--ink)] text-stone-100" onPointerMove={handlePointerMove}>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[360px] w-[360px] rounded-full bg-cyan-200/10 blur-3xl mix-blend-screen md:block"
        style={{ x: spotlightX, y: spotlightY, opacity: reducedMotion ? 0 : 1 }}
      />

      <motion.div
        aria-hidden="true"
        className="fixed right-5 top-5 z-40 hidden h-32 w-px origin-top rounded-full bg-stone-200/80 md:block"
        style={{ scaleY: progress }}
      />

      <div className="grain" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(87,220,255,0.16),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(255,112,163,0.12),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_38%)]" />

      <nav className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group inline-flex items-center gap-3 rounded-full border border-stone-100/12 bg-stone-950/45 px-3 py-2 text-sm font-medium text-stone-100 backdrop-blur-xl transition hover:border-stone-100/30">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-stone-100 text-sm text-stone-950 transition group-hover:rotate-12">SF</span>
          <span>Signal Foundry</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
          <a className="transition hover:text-stone-50" href="#feed">글</a>
          <a className="transition hover:text-stone-50" href="#notes">노트</a>
          <a className="transition hover:text-stone-50" href="#letter">레터</a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-[calc(100dvh-5rem)] max-w-7xl items-center gap-10 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div className="max-w-5xl">
          <motion.p
            className={`mb-7 inline-flex rounded-full border ${activeAccent.border} bg-stone-950/60 px-4 py-2 text-sm text-stone-300 backdrop-blur-xl`}
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            프론트엔드 실험 노트
          </motion.p>
          <motion.h1
            className="max-w-6xl text-balance text-[clamp(3.4rem,9vw,8.8rem)] font-black leading-[0.88] tracking-[-0.08em] text-stone-50"
            initial={reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Blog as a playable surface
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-stone-300 sm:text-xl"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            글을 읽는 곳이 아니라 만지는 곳. 스크롤, 빛, 카드의 압력으로 프론트엔드 글을 조금 더 위험하게 전시한다.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a className={`rounded-full px-6 py-3 text-sm font-bold transition active:translate-y-px ${activeAccent.button}`} href="#feed">
              글 훑기
            </a>
            <Link className="rounded-full border border-stone-100/18 px-6 py-3 text-sm font-bold text-stone-100 transition hover:border-stone-100/45 hover:bg-stone-100/8 active:translate-y-px" href={`/posts/${featured.slug}`}>
              대표 글 읽기
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-stone-100/12 bg-stone-950/55 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96, rotate: -1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${activeAccent.wash}`} />
          <div className="relative h-full overflow-hidden rounded-[1.45rem] border border-stone-100/10 bg-stone-950">
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center opacity-50 saturate-[0.85] transition duration-700"
              style={{ backgroundImage: `url(https://picsum.photos/seed/${hoveredPost.imageSeed}/1200/1500)` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,12,0.08),rgba(6,8,12,0.82))]" />
            <div className="relative flex h-full min-h-[520px] flex-col justify-between p-6 sm:p-8">
              <div className="flex justify-between gap-5 text-sm text-stone-200/85">
                <span>{hoveredPost.category}</span>
                <span>{hoveredPost.readTime}</span>
              </div>
              <div>
                <p className={`mb-4 font-mono text-sm ${activeAccent.text}`}>{hoveredPost.temperature}</p>
                <h2 className="text-balance text-4xl font-black leading-[0.96] tracking-[-0.06em] text-stone-50 sm:text-6xl">
                  {hoveredPost.title}
                </h2>
                <p className="mt-5 max-w-md text-pretty text-sm leading-6 text-stone-200/85 sm:text-base">{hoveredPost.dek}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="feed" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 max-w-xl text-sm leading-6 text-stone-400">필터를 바꾸면 무대 조명이 바뀐다. 단순 목록 말고, 글을 만지는 판으로 만들었다.</p>
            <h2 className="text-balance text-5xl font-black leading-none tracking-[-0.06em] text-stone-50 sm:text-7xl">Choose your rabbit hole</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition active:translate-y-px ${
                  active === category
                    ? "border-stone-100 bg-stone-100 text-stone-950"
                    : "border-stone-100/14 bg-stone-950/40 text-stone-300 hover:border-stone-100/35 hover:text-stone-50"
                }`}
                type="button"
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <ArticleCard key={post.slug} post={post} index={index} onHover={setHoveredSlug} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section id="notes" className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[2rem] border border-stone-100/12 bg-stone-100 p-7 text-stone-950">
            <p className="font-mono text-sm text-stone-500">reading track</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl">Three tiny rules for lively articles</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["첫 화면은 짧게", "제목, 한 문장, 하나의 행동만 남긴다."],
              ["움직임은 이유 있게", "피드백, 우선순위, 장면 전환 중 하나에만 쓴다."],
              ["카드는 물체처럼", "hover, focus, active가 서로 다른 압력을 가져야 한다."],
            ].map(([title, copy]) => (
              <div key={title} className="group rounded-[1.5rem] border border-stone-100/12 bg-stone-950/45 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-stone-100/35">
                <h3 className="text-2xl font-black tracking-[-0.04em] text-stone-50">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-stone-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="letter" className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8 sm:pb-32">
        <div className="relative overflow-hidden rounded-[2rem] border border-stone-100/12 bg-stone-950/70 p-8 backdrop-blur-xl sm:p-12">
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-cyan-200/15 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] text-stone-50 sm:text-7xl">A blog that refuses to sit still</h2>
              <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-stone-300">이 프로토타입은 콘텐츠가 늘어도 무대감이 유지되게 설계했다. 다음 단계는 MDX 연결, 검색, 태그별 micro-scene이다.</p>
            </div>
            <form className="rounded-[1.5rem] border border-stone-100/12 bg-stone-100/7 p-4" action="#letter">
              <label className="block text-sm font-semibold text-stone-200" htmlFor="email">새 글 알림</label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input className="min-h-12 flex-1 rounded-full border border-stone-100/14 bg-stone-950 px-4 text-sm text-stone-50 outline-none transition placeholder:text-stone-500 focus:border-cyan-200" id="email" name="email" placeholder="front@lab.dev" type="email" />
                <button className="min-h-12 rounded-full bg-stone-100 px-5 text-sm font-black text-stone-950 transition hover:bg-cyan-100 active:translate-y-px" type="submit">받기</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

type ArticleCardProps = {
  post: BlogPost;
  index: number;
  onHover: (slug: string) => void;
};

function ArticleCard({ post, index, onHover }: ArticleCardProps) {
  const reducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 160, damping: 22, mass: 0.35 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 160, damping: 22, mass: 0.35 });
  const accent = accentStyles[post.accent] ?? accentStyles.cyan;
  const spanClass = index === 0 ? "md:col-span-4 md:min-h-[460px]" : index === 1 ? "md:col-span-2 md:min-h-[460px]" : "md:col-span-3 md:min-h-[360px]";

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -8);
    rotateY.set(x * 8);
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      layout
      className={`article-card group relative overflow-hidden rounded-[2rem] border ${accent.border} bg-stone-950/55 p-4 backdrop-blur-xl ${spanClass}`}
      initial={reducedMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.98 }}
      transition={{ duration: 0.5, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
      onPointerEnter={() => onHover(post.slug)}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformPerspective: 900 }}
    >
      <Link className="flex h-full min-h-[330px] flex-col justify-between rounded-[1.45rem] outline-none focus-visible:ring-2 focus-visible:ring-stone-100" href={`/posts/${post.slug}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${accent.wash} opacity-80 transition duration-500 group-hover:opacity-100`} />
        <div
          className="absolute inset-x-4 top-4 h-40 rounded-[1.2rem] bg-cover bg-center opacity-45 grayscale transition duration-700 group-hover:scale-[1.03] group-hover:opacity-75 group-hover:grayscale-0"
          style={{ backgroundImage: `url(https://picsum.photos/seed/${post.imageSeed}/1000/640)` }}
        />
        <div className="relative flex items-center justify-between gap-4 text-sm text-stone-300">
          <span>{post.category}</span>
          <span>{post.date}</span>
        </div>
        <div className="relative mt-44">
          <h3 className="text-balance text-4xl font-black leading-[0.96] tracking-[-0.06em] text-stone-50 transition duration-500 group-hover:-translate-y-1 sm:text-5xl">{post.title}</h3>
          <p className="mt-5 max-w-xl text-pretty text-sm leading-6 text-stone-300">{post.dek}</p>
        </div>
        <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {post.fragments.map((fragment) => (
              <span key={fragment} className="rounded-full border border-stone-100/12 bg-stone-950/55 px-3 py-1.5 font-mono text-xs text-stone-300">
                {fragment}
              </span>
            ))}
          </div>
          <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-black text-stone-950 transition group-hover:bg-cyan-100">읽기</span>
        </div>
      </Link>
    </motion.article>
  );
}
