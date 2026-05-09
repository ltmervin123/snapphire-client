import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 flex flex-col gap-4">
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            SnappHire an AI-Powered HR & Recruitment
          </h1>
          <p className="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            Modernize recruitment workflows and employee support systems using
            Artificial Intelligence, Retrieval-Augmented Generation (RAG), and
            intelligent automation.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition-colors"
            >
              Get started
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div className="w-full h-80 bg-gray-50 border border-gray-100 dark:border-gray-800 dark:bg-gray-800/50 rounded-2xl flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full translate-x-1/4 translate-y-1/4 w-full h-full"></div>
            <span className="text-gray-400 dark:text-gray-500 font-medium z-10">
              Intelligent Dashboard
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
