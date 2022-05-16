import { MainLayout } from "@/components/Layout";
import Link from "next/link";
import { FormEvent, ReactElement } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { SocialButton } from "@/components/Elements";
import supabase from "@/lib/supbase";
import toast, { Toaster } from "react-hot-toast";

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
              "A link has been sent to your e-mail, please use it to log in to critters!",
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
            type="email"
            autoComplete="email"
            name="email"
            required
            aria-required="true"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-2"
          />
          <button
            type="submit"
            className="bg-indigo-800 text-white w-full py-2 rounded-md hover:bg-indigo-600 duration-150 focus:outline focus-visible:outline-4 focus-visible:outline-offset-2"
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
      <Toaster />
    </section>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Signup;
