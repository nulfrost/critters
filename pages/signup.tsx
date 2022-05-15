import { MainLayout } from "@/components/Layout";
import clsx from "clsx";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

type SocialButtonProps = {
  label: string;
  icon: ReactNode;
  onLogin?: () => void;
  classNames?: string;
};

const SocialButton = ({ label, icon, classNames }: SocialButtonProps) => {
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

const Signup = () => {
  return (
    <section className="mt-32">
      <div className="text-center mb-10">
        <h1 className="font-bold text-4xl mb-3">Sign up for an account</h1>
        <p>
          Already have an account?{" "}
          <Link href="/signin">
            <a className="text-indigo-800 hover:underline hover:text-indigo-600">
              Sign in here
            </a>
          </Link>
        </p>
      </div>
      <div className="max-w-sm mx-auto bg-white py-5 px-5 rounded-md shadow-md">
        <form>
          <label
            htmlFor="email"
            className="block text-xs font-bold text-gray-500 uppercase"
          >
            Email address
          </label>
          <input
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-2"
          />
          <button
            type="submit"
            className="bg-indigo-800 text-white w-full py-2 rounded-md hover:bg-indigo-600 duration-150"
          >
            Sign up
          </button>
          <div className="flex my-5 before:content-[''] before:flex-1 before:border before:border-t-gray-300 items-center before:mr-[10px] after:content-[''] after:flex-1 after:border after:border-t-gray-300 after:ml-[10px] text-gray-400">
            <span className="text-xs">or continue with</span>
          </div>
        </form>
        <div className="flex gap-2">
          <SocialButton
            icon={<AiOutlineGoogle className="text-white" />}
            label="Sign up with Google"
            classNames="bg-red-600"
          />
          <SocialButton
            icon={<FaFacebook className="text-white" />}
            label="Sign up with Facebook"
            classNames="bg-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Signup;