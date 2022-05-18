import Image from "next/image";
import type { Post } from "../types";
import { formatDate } from "@/utils/format-date";
import clsx from "clsx";
import Link from "next/link";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="relative overflow-hidden bg-white border border-gray-300 rounded-md shadow-sm">
      <Image
        src={post.images[0] as string}
        height={300}
        width={400}
        layout="responsive"
      />
      <span
        className={clsx(
          "inline-block text-xs font-bold  px-2 py-1 rounded absolute top-4 left-4",
          post.pet_status === "LOST"
            ? "text-indigo-800 bg-indigo-200"
            : "text-green-800 bg-green-200"
        )}
      >
        {post.pet_status}
      </span>
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-900">{post.name}</h2>
          <Link href={`/post/${post.id}`}>
            <a className="inline-block text-xs font-bold text-indigo-700 uppercase hover:underline">
              View more &rarr;
            </a>
          </Link>
        </div>
        <section className="mb-6">
          <p className="text-gray-500 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
            {post.description}
          </p>
        </section>
        <footer className="flex justify-between text-xs text-gray-500">
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
