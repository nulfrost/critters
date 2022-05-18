import Link from "next/link";

type Props = {
  links: { label: string; path: string }[];
};

export const Footer = ({ links }: Props) => {
  return (
    <footer className="mt-auto bg-white">
      <div className="flex justify-center py-5 mx-auto max-w-7xl">
        <ul className="flex gap-4">
          {links.map(({ label, path }) => (
            <li key={JSON.stringify({ label, path })}>
              <Link href={path}>
                <a className="text-xs font-bold text-gray-400 uppercase duration-150 hover:text-indigo-500">
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
