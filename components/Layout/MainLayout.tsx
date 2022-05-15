import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <main className="max-w-7xl mx-auto">{children}</main>;
};
