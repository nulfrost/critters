import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <main className="max-w-7xl mx-auto px-2 xl:px-0">{children}</main>;
};
