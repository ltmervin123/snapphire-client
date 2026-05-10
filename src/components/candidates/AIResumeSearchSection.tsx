interface AIResumeSearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearching: boolean;
  handleSearch: (e: React.FormEvent) => void;
  setIsModalOpen: (open: boolean) => void;
}
export default function AIResumeSearchSection({
  searchQuery,
  setSearchQuery,
  isSearching,
  handleSearch,
  setIsModalOpen,
}: AIResumeSearchSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 mt-6">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors"
            placeholder="Ask AI to find candidates (e.g. 'Frontend developers in remote US')..."
          />
        </div>
        <button
          type="submit"
          disabled={isSearching}
          className="flex items-center justify-center gap-2 text-gray-700 bg-white border border-gray-500 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-3 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        >
          {isSearching ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-gray-700 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Searching...
            </>
          ) : (
            "Search Resumes"
          )}
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          Add Candidate
        </button>
      </form>
    </div>
  );
}
