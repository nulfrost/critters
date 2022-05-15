import type { Post } from "../types";
import { PostsList } from "./PostList";

export const Posts = ({ posts }: { posts: Post[] }) => {
  return <PostsList posts={posts} />;
};
