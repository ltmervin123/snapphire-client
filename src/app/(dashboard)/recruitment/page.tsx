import React from "react";

type Stage = "Resume Review" | "Technical Interview" | "Culture Fit" | "Offer";

interface JobApplication {
  id: string;
  candidateName: string;
  jobTitle: string;
  stage: Stage;
  appliedDate: string;
  avatarPlaceholder: string;
}

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

export default function RecruitmentPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto w-full h-full flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Recruitment Board
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Track applications across hiring stages.
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max h-full items-start">
          {STAGES.map((stage) => {
            const appsFound = mockApplications.filter(
              (app) => app.stage === stage,
            );
            return (
              <div
                key={stage}
                className="w-80 flex-shrink-0 flex flex-col bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 p-4 h-full min-h-[500px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                    {stage}
                  </h3>
                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
                    {appsFound.length}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {appsFound.map((app) => (
                    <div
                      key={app.id}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 cursor-grab hover:ring-2 hover:ring-blue-500/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold mb-3 flex-shrink-0">
                          {app.avatarPlaceholder}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white truncate">
                            {app.candidateName}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {app.jobTitle}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{app.id}</span>
                        <span>
                          {new Date(app.appliedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}

                  {appsFound.length === 0 && (
                    <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center text-gray-400 dark:text-gray-500 text-sm">
                      No candidates in this stage
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
