import { MainLayout } from "@/components/Layout";
import { ReactElement } from "react";
import Image from "next/image";

const PostPage = () => {
  return (
    <section className="max-w-5xl">
      <h1 className="mb-5 text-4xl font-bold text-gray-900">truffles</h1>
      <div className="flex gap-8 mb-5">
        <Image
          src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
          height={500}
          width={600}
          layout="intrinsic"
          className="border border-gray-300 rounded-lg shadow-sm"
        />
        <div className="self-start flex-1 p-5 bg-white border-2 border-gray-300 rounded-md shadow-sm">
          <h2 className="font-semibold">Dane</h2>
          <span className="text-sm text-gray-500">123-456-7890</span>
        </div>
      </div>
      <div className="p-5 space-y-6 bg-white border-2 border-gray-300 rounded-md shadow-sm">
        <div>
          <h2 className="mb-1 text-xl font-bold text-gray-900">Description</h2>
          <p className="text-gray-500">
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
        </div>
        <div>
          <h2 className="mb-1 text-xl font-bold text-gray-900">
            Last known location
          </h2>
          <p className="text-gray-500">Jane & Wilson</p>
        </div>
        <div>
          <h2 className="mb-1 text-xl font-bold text-gray-900">Reward</h2>
          <p className="text-gray-500">$300</p>
        </div>
      </div>
    </section>
  );
};

export default PostPage;

PostPage.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
