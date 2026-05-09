export default function Features() {
  const features = [
    {
      title: "AI Candidate Matching",
      description:
        "AI-powered resume parsing and candidate-job matching system with match scores.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Semantic Search Engine",
      description:
        "Vector embeddings and semantic similarity to find the perfect candidates beyond simple keyword matching.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: "RAG-Powered HR Knowledge Base",
      description:
        "AI employee assistant that retrieves company policies and answers HR questions using Retrieval-Augmented Generation.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.254 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Analytics & Insights",
      description:
        "Recruitment analytics dashboards visualizing the hiring funnel and AI usage insights.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="bg-white dark:bg-gray-900 py-16 lg:py-24">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Everything you need for an AI-Powered HR Platform
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            SnappHire provides all the right tools to optimize your recruitment
            pipeline and support your employees seamlessly.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="pt-6">
              <div className="flow-root px-6 pb-8 bg-gray-50 border border-gray-100 dark:border-gray-800 dark:bg-gray-800/50 rounded-2xl h-full transition-transform hover:-translate-y-1 duration-300">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl shadow-sm border border-blue-200 dark:border-blue-800">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
