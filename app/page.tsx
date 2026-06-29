import { BlogLab } from "@/components/blog-lab";
import { posts } from "@/lib/posts";

export default function Home() {
  return <BlogLab posts={posts} />;
}
