"use client";
import useCandidate from "@/hooks/candidates/useCandidate";
import { AddCandidateModal } from "@/components/candidates/AddCandidateModal";
import AIResumeSearchSection from "./AIResumeSearchSection";
import CandidateTable from "./CandidateTable";

export default function CandidatesClient() {
  const {
    isModalOpen,
    setIsModalOpen,
    searchQuery,
    setSearchQuery,
    isSearching,
    handleSearch,
    filteredCandidates,
  } = useCandidate();
  return (
    <>
      <AIResumeSearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearching={isSearching}
        handleSearch={handleSearch}
        setIsModalOpen={setIsModalOpen}
      />
      <CandidateTable filteredCandidates={filteredCandidates} />
      <AddCandidateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
