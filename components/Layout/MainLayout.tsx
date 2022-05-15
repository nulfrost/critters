import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <main>{children}</main>;
};
