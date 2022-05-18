import Link from "next/link";
import { useUser } from "@supabase/supabase-auth-helpers/react";

export const Navbar = () => {
  const { user } = useUser();

  return (
    <header className="px-2 py-5 bg-white drop-shadow-sm xl:px-0">
      <nav className="flex mx-auto max-w-7xl" aria-label="main site navigation">
        <Link href="/">
          <a
            className="text-xl font-bold"
            aria-label="Navigate back to the main page"
          >
            critters
          </a>
        </Link>
        <ul className="flex ml-auto gap-7">
          {user ? (
            <>
              <li>
                <Link href="/">
                  <a className="text-gray-500 duration-150 hover:text-indigo-700">
                    Listings
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/account">
                  <a className="text-gray-500 duration-150 hover:text-indigo-700">
                    Account
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/api/auth/logout">
                  <a className="text-gray-500 duration-150 hover:text-indigo-700">
                    Sign out
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signin">
                  <a className="text-gray-500 duration-150 hover:text-indigo-700">
                    Sign in
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a className="px-4 py-2 text-white duration-150 bg-indigo-800 rounded-md hover:bg-indigo-600 focus:outline focus-visible:outline-4 focus-visible:outline-offset-2">
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
