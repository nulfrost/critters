import { MainLayout } from "@/components/Layout";
import Link from "next/link";
import { FormEvent, ReactElement } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { SocialButton } from "@/components/Elements";
import supabase from "@/lib/supbase";
import toast from "react-hot-toast";

const Signin = () => {
  return (
    <section className="mt-32">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-4xl font-bold">Sign in to your account</h1>
        <p>
          No account?{" "}
          <Link href="/signup">
            <a className="text-indigo-800 hover:underline hover:text-indigo-600">
              Sign up here
            </a>
          </Link>
        </p>
      </div>
      <div className="max-w-sm px-5 py-5 mx-auto bg-white rounded-md shadow-md">
        <form
          onSubmit={async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            let { error } = await supabase.auth.signIn({
              // @ts-ignore
              email: event.target.elements.email.value,
            });
            if (error) {
              toast.error(error.message, {
                position: "top-center",
                duration: 4000,
                ariaProps: {
                  role: "alert",
                  "aria-live": "assertive",
                },
              });
              return;
            }
            toast.success(
              "Magic link sent to your email! Use the link to sign in. (Could be in your spam folder too!)",
              {
                position: "top-center",
                duration: 4000,
                ariaProps: {
                  role: "alert",
                  "aria-live": "assertive",
                },
              }
            );
          }}
        >
          <label
            htmlFor="email"
            className="block text-xs font-bold text-gray-500 uppercase"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            className="block w-full mt-1 mb-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="w-full py-2 text-white duration-150 bg-indigo-800 rounded-md hover:bg-indigo-600 focus:outline focus-visible:outline-4 focus-visible:outline-offset-2"
          >
            Sign in
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
            onLogin={async () => {
              try {
                await supabase.auth.signIn({
                  provider: "google",
                });
              } catch (error) {
                console.error(error);
              }
            }}
          />
          <SocialButton
            icon={<FaFacebook className="text-white" />}
            label="Sign up with Facebook"
            classNames="bg-blue-600"
            onLogin={async () => {
              try {
                await supabase.auth.signIn({
                  provider: "facebook",
                });
              } catch (error) {
                console.error(error);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

Signin.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Signin;
