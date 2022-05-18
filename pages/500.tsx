import Link from "next/link";

const Custom500 = () => {
  return (
    <section className="mt-32 text-center">
      <p className="mb-2 text-sm font-medium text-indigo-600 uppercase">
        500 error
      </p>
      <h1 className="mb-2 text-5xl font-bold">Server error.</h1>
      <p className="mb-6 text-gray-500">
        There was an error processing the request.
      </p>
      <Link href="/">
        <a className="text-indigo-600 hover:underline">Go back home &rarr;</a>
      </Link>
    </section>
  );
};

export default Custom500;
