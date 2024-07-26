import GlareCard from "../ui/GlareCard";
import imageOne from "../../public/real11.jpg";
import imagetwo from "../../public/real21.jpg";
import imagethree from "../../public/real31.jpg";
import imagefour from "../../public/real41.jpg";
import imagefive from "../../public/real51.jpg";
import "../../css/Team.css";
import Image from "next/image";

export default function TeamGrid() {
  return (
    <div className="d-f">
      <div className="d-f team-inner-cont  w-full">
        <GlareCard className="team-mem flex flex-col px-2 justify-center">
          {/* 1 */}
          <Image
            className="h-2/5 w-full absolute inset-0 bg-contain"
            src={imageOne}
          />
          <p className="pt-4">
            <b> Name: </b> CA Pawan Kumar Mishra (ACA, M.com. (Marketing &
            Finance), B.com.)
          </p>
          <p>
            <b> Designation:</b> Partner
          </p>
          <p>
            <b>Experience:</b> In Practice Since 2021
          </p>
          <p>
            <b> Area of Expertise:</b> Direct Taxation, Indian GAAP & Ind AS
            Consultant, Financial Reporting and Accounting.
          </p>
        </GlareCard>
        <GlareCard className="team-mem flex flex-col px-2 justify-center">
          {/* 2 */}
          <Image
            className="h-2/5 w-full absolute inset-0 bg-contain"
            src={imagetwo}
          />
          <p className="pt-16">
            <b> Name: </b>CA Shishir Kumar Dubey (FCA, DISA, FAFE, FAFP(ICAI),
            Forensic Auditor, CPA, ISA(ICAI), Peer Reviewer)
          </p>
          <p>
            <b> Designation:</b> Managing Partner
          </p>
          <p>
            <b>Experience:</b> In Practice Since 2010
          </p>
          <p className="">
            <b> Area of Expertise:</b>Corporate Assurance and Consulting
            Services, Digital Forensics, Information System Based Audit, Goods &
            Services Tax, Direct Taxation, NGO Consulting, Non-Corporate
            Assurance Services, Compliance Services..
          </p>
        </GlareCard>
        <GlareCard className="team-mem flex flex-col px-2 justify-center">
          {/* 3 */}
          <Image
            className="h-2/5 w-full absolute inset-0 bg-contain"
            src={imagethree}
          />
          <p className="pt-12">
            <b> Name: </b>CA Sanjay Mani Tripathi (ACA, M.com.(Finance), B.com.)
          </p>
          <p>
            <b> Designation:</b> Partner
          </p>
          <p>
            <b>Experience:</b>More than 14 Years of experience in Service
            sector.
          </p>
          <p>
            <b> Area of Expertise:</b>Financial Analysis & Reporting (MIS),
            Taxation & Statutory Compliance, Costing, Budgeting & Variance
            Analysis, Auditing, Capex Accounting, Insurance Working
          </p>
        </GlareCard>
        <GlareCard className="team-mem flex flex-col px-2 justify-center">
          {/* 4 */}
          <Image
            className="h-2/5 w-full absolute inset-0 bg-contain"
            src={imagefour}
          />
          <p className="pt-4">
            <b> Name: </b>CA Puneet Singh (ACA, M.com. (Finance), B.com.)
          </p>
          <p>
            <b> Designation:</b> Partner
          </p>
          <p>
            <b>Experience:</b> In Practice Since 2021
          </p>
          <p>
            <b> Area of Expertise:</b>Goods & Services Tax, Assessment &
            Litigation, NGO Consulting, Accounting & Compliance, Non-Corporate
            Consulting.
          </p>
        </GlareCard>
        <GlareCard className="team-mem flex flex-col px-2 justify-center">
          {/* 5 */}
          <Image
            className="h-2/5 w-full absolute inset-0 bg-contain"
            src={imagefive}
          />
          <p className="pt-12">
            <b> Name: </b>CA Shubham Sureka (ACA, M.com. (Finance), B.com.)
          </p>
          <p>
            <b> Designation:</b> Partner
          </p>
          <p>
            <b>Experience:</b> In Practice Since 2021
          </p>
          <p>
            <b> Area of Expertise:</b>Finance, Audit and Direct Taxation, MIS
            Reporting, Finance management, Statutory Audit, Corporate assurance
            consulting, Compliance of Startup, Non-Corporate Assurance Services,
            Compliance Services.
          </p>
        </GlareCard>
      </div>
    </div>
  );
}
