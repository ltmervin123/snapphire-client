export type Stage =
  | "Resume Review"
  | "Technical Interview"
  | "Culture Fit"
  | "Offer";

export interface JobApplication {
  id: string;
  candidateName: string;
  jobTitle: string;
  stage: Stage;
  appliedDate: string;
  avatarPlaceholder: string;
}
export default function useRecruitment() {
  const mockApplications: JobApplication[] = [
    {
      id: "APP-101",
      candidateName: "Alice Johnson",
      jobTitle: "Frontend Engineer",
      stage: "Technical Interview",
      appliedDate: "2026-05-01",
      avatarPlaceholder: "AJ",
    },
    {
      id: "APP-102",
      candidateName: "Bob Smith",
      jobTitle: "Backend Developer",
      stage: "Resume Review",
      appliedDate: "2026-05-03",
      avatarPlaceholder: "BS",
    },
    {
      id: "APP-103",
      candidateName: "Charlie Davis",
      jobTitle: "Product Manager",
      stage: "Culture Fit",
      appliedDate: "2026-05-05",
      avatarPlaceholder: "CD",
    },
    {
      id: "APP-104",
      candidateName: "Diana Prince",
      jobTitle: "Frontend Engineer",
      stage: "Offer",
      appliedDate: "2026-04-20",
      avatarPlaceholder: "DP",
    },
    {
      id: "APP-105",
      candidateName: "Evan Wright",
      jobTitle: "Data Scientist",
      stage: "Resume Review",
      appliedDate: "2026-04-28",
      avatarPlaceholder: "EW",
    },
    {
      id: "APP-106",
      candidateName: "Fiona Gallagher",
      jobTitle: "UX Designer",
      stage: "Technical Interview",
      appliedDate: "2026-05-02",
      avatarPlaceholder: "FG",
    },
  ];

  const STAGES: Stage[] = [
    "Resume Review",
    "Technical Interview",
    "Culture Fit",
    "Offer",
  ];
  return {
    mockApplications,
    STAGES,
  };
}
