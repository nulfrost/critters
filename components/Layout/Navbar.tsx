import Link from "next/link";
import { useUser } from "@supabase/supabase-auth-helpers/react";

export const Navbar = () => {
  const { user } = useUser();

  return (
    <header className="bg-white py-5 mb-10 drop-shadow-sm px-2 xl:px-0">
      <nav className="max-w-7xl mx-auto flex">
        <h1>critters</h1>
        <ul className="flex ml-auto gap-7">
          {user ? (
            <>
              <li>
                <Link href="/">
                  <a className="text-gray-500 hover:text-indigo-700 duration-150">
                    Listings
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/account">
                  <a className="text-gray-500 hover:text-indigo-700 duration-150">
                    Account
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/api/auth/logout">
                  <a className="text-gray-500 hover:text-indigo-700 duration-150">
                    Sign out
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signin">
                  <a className="text-gray-500 hover:text-indigo-700 duration-150">
                    Sign in
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a className="bg-indigo-800 text-white py-3 px-4 rounded-md font-bold hover:bg-indigo-600 duration-150">
                    Sign up
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
