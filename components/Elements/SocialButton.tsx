import clsx from "clsx";
import { ReactNode } from "react";

type SocialButtonProps = {
  label: string;
  icon: ReactNode;
  onLogin?: () => void;
  classNames?: string;
};

export const SocialButton = ({
  label,
  icon,
  classNames,
}: SocialButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full py-2 rounded-md flex justify-center text-xl hover:opacity-90 duration-150",
        classNames
      )}
      aria-label={label}
    >
      {icon}
    </button>
  );
};
