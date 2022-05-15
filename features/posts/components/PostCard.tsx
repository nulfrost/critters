import Image from "next/image";
import type { Post } from "../types";
import { formatDate } from "@/utils/format-date";
import clsx from "clsx";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="border border-gray-300 rounded-md overflow-hidden bg-white shadow-sm">
      <Image
        src={post.images[0] as string}
        height={300}
        width={400}
        layout="responsive"
      />
      <div className="px-5 py-4">
        <div className="flex items-baseline mb-2">
          <h2 className="font-bold text-2xl text-gray-900">{post.name}</h2>
          <span
            className={clsx(
              "inline-block ml-auto text-xs font-bold  px-2 py-1 rounded",
              post.pet_status === "LOST"
                ? "text-indigo-800 bg-indigo-200"
                : "text-green-800 bg-green-200"
            )}
          >
            {post.pet_status}
          </span>
        </div>
        <section className="mb-6">
          <p className="text-gray-500 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
            {post.description}
          </p>
        </section>
        <footer className="flex text-gray-500 text-xs justify-between">
          <p>{JSON.parse(post.location).city}</p>
          <p>
            {" "}
            Posted <time>{formatDate(new Date(post.created_at))}</time> ago
          </p>
        </footer>
      </div>
    </article>
  );
};
