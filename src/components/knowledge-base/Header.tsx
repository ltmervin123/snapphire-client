export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Knowledge Base
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage documents that feed the AI assistant.
        </p>
      </div>
    </div>
  );
}
