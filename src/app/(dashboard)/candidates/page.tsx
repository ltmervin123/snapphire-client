"use client";

import React, { useState } from "react";
import { AddCandidateModal } from "@/components/candidates/AddCandidateModal";

interface Candidate {
  id: string;
  name: string;
  role: string;
  matchScore: number;
  status: string;
  location: string;
  appliedDate: string;
}

const mockCandidates: Candidate[] = [
  {
    id: "CAND-001",
    name: "Alice Johnson",
    role: "Frontend Engineer",
    matchScore: 95,
    status: "In Review",
    location: "Remote (US)",
    appliedDate: "2026-05-01",
  },
  {
    id: "CAND-002",
    name: "Bob Smith",
    role: "Backend Developer",
    matchScore: 88,
    status: "Interviewing",
    location: "New York, NY",
    appliedDate: "2026-05-03",
  },
  {
    id: "CAND-003",
    name: "Charlie Davis",
    role: "Product Manager",
    matchScore: 76,
    status: "Screening",
    location: "San Francisco, CA",
    appliedDate: "2026-05-05",
  },
  {
    id: "CAND-004",
    name: "Diana Prince",
    role: "Frontend Engineer",
    matchScore: 92,
    status: "Offer Extended",
    location: "Remote (UK)",
    appliedDate: "2026-04-20",
  },
  {
    id: "CAND-005",
    name: "Evan Wright",
    role: "Data Scientist",
    matchScore: 65,
    status: "Rejected",
    location: "Austin, TX",
    appliedDate: "2026-04-28",
  },
];

export default function CandidatesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredCandidates, setFilteredCandidates] =
    useState<Candidate[]>(mockCandidates);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setFilteredCandidates(mockCandidates);
      return;
    }

    setIsSearching(true);

    // Simulate AI search delay
    setTimeout(() => {
      const lowerQuery = searchQuery.toLowerCase();
      const results = mockCandidates.filter(
        (candidate) =>
          candidate.name.toLowerCase().includes(lowerQuery) ||
          candidate.role.toLowerCase().includes(lowerQuery) ||
          candidate.location.toLowerCase().includes(lowerQuery) ||
          candidate.status.toLowerCase().includes(lowerQuery),
      );
      setFilteredCandidates(results);
      setIsSearching(false);
    }, 600);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Candidates
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Review and manage applicants with AI-powered match scores.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          Add Candidate
        </button>
      </div>

      {/* AI Resume Search Section */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-3"
        >
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
            className="flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
          >
            {isSearching ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
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
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700">
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

      <AddCandidateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
