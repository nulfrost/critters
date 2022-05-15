import type { Post } from "../types";
import { PostCard } from "./PostCard";

// map over posts here

export const PostsList = ({ posts }: { posts: Post[] }) => {
  const pets = posts.map((post) => <PostCard post={post} />);

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {pets}
    </section>
  );
};
