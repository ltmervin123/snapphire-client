import React from "react";
import CandidatesClient, {
  Candidate,
} from "@/components/candidates/CandidatesClient";

export default function CandidatesPage() {
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

  return (
    <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
      <CandidatesClient initialCandidates={mockCandidates} />
    </div>
  );
}
