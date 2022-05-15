import { MainLayout } from "@/components/Layout";
import type { ReactElement } from "react";

const Home = () => {
  return <h1 className="text-5xl font-bold text-gray-900">hello world</h1>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
