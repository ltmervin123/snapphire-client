import React from "react";
import StageColumns from "./StageColumns";
import useRecruitment from "@/hooks/recruitment/useRecruitment";

export default function RecruitmentClient() {
  const { mockApplications, STAGES } = useRecruitment();
  return (
    <>
      <StageColumns mockApplications={mockApplications} STAGES={STAGES} />
    </>
  );
}
