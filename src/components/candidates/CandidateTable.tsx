import { Candidate } from "@/hooks/candidates/useCandidate";

interface CandidateTableProps {
  filteredCandidates: Candidate[];
}
export default function CandidateTable({
  filteredCandidates,
}: CandidateTableProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700 mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium">
                Candidate Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Role applied for
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                AI Match Score
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Location
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Status
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-right">
                Applied Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredCandidates.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
                >
                  No candidates found matching your query.
                </td>
              </tr>
            ) : (
              filteredCandidates.map((candidate) => (
                <tr
                  key={candidate.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {candidate.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">
                      {candidate.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {candidate.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 max-w-[100px]">
                        <div
                          className={`h-2.5 rounded-full ${
                            candidate.matchScore >= 90
                              ? "bg-green-500"
                              : candidate.matchScore >= 70
                                ? "bg-blue-500"
                                : "bg-yellow-500"
                          }`}
                          style={{ width: `${candidate.matchScore}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                        {candidate.matchScore}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {candidate.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        candidate.status === "Offer Extended"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : candidate.status === "Rejected"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                            : candidate.status === "Interviewing"
                              ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}
                    >
                      {candidate.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-gray-500 dark:text-gray-400">
                    {new Date(candidate.appliedDate).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
