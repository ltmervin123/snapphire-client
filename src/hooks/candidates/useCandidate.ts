import React, { useState } from "react";

export interface Candidate {
  id: string;
  name: string;
  role: string;
  matchScore: number;
  status: string;
  location: string;
  appliedDate: string;
}

export default function useCandidate() {
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

  return {
    isModalOpen,
    setIsModalOpen,
    searchQuery,
    setSearchQuery,
    isSearching,
    handleSearch,
    filteredCandidates,
  };
}
