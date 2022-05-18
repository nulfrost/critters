import { MainLayout } from "@/components/Layout";
import type { Post } from "@/features/posts";
import { Posts } from "@/features/posts/components/Posts";
import type { ReactElement } from "react";

const posts = Array.from({ length: 20 }, (post: Post) => ({
  id: 1,
  name: "truffles",
  description:
    "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
  images: [
    "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg",
  ],
  pet_status: "FOUND",
  location: JSON.stringify({
    city: "Toronto",
    intersection: "Jane & Wilson",
    lat: "43.7208856",
    lng: "-79.510727",
  }),
  posted_by: "Dane",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}));

const Home = () => {
  return (
    <>
      <h1 className="mb-5 text-3xl font-bold">Listings</h1>
      <Posts posts={posts} />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
