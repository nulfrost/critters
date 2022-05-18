import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="px-2 py-10 mx-auto max-w-7xl xl:px-0">{children}</main>
  );
};
