export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-xl font-bold text-gray-900 sm:justify-start dark:text-white tracking-tight">
            SnappHire
          </div>
          <p className="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0 dark:text-gray-400">
            &copy; {new Date().getFullYear()} SnappHire Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
