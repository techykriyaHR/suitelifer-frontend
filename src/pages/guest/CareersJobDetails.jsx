import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import config from "../../config.js";
import MobileNav from "../../components/home/MobileNav.jsx";
import TabletNav from "../../components/home/TabletNav.jsx";
import DesktopNav from "../../components/home/DesktopNav.jsx";
import { toSlug } from "../../utils/slugUrl.js";
import BackToTop from "../../components/BackToTop.jsx";

const CareersJobDetails = () => {
  const [jobDetails, setJobDetails] = useState(null);
  const location = useLocation();
  const { jobId } = location.state;

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        console.log("Fetching job details for jobId:", jobId);

        console.log(config.apiBaseUrl);

        const response = await axios.get(
          `${config.apiBaseUrl}/api/get-job-details/${jobId}`
        );
        setJobDetails(response.data.data);

        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, []);

  return (
    <>
      {/* MOBILE NAV */}
      <div className="sm:hidden">
        <MobileNav />
      </div>
      {/* TABLET NAV */}
      <div className="tablet-nav">
        <TabletNav />
      </div>
      {/* DESKTOP NAV */}
      <div className="desktop-nav">
        <DesktopNav />
      </div>
      <div className="px-7 max-w-4xl mx-auto lg:flex lg:flex-col lg:pt-20 lg:h-lvh">
        <a href="/careers" className="text-primary no-underline text-xs">
          ← Back
        </a>
        {jobDetails ? (
          <div className="flex flex-col mt-5">
            <p className="font-avenir-black text-2xl">{jobDetails.jobTitle}</p>
            <p className="text-primary mb-2">
              | {jobDetails.industryName.toUpperCase()}
            </p>
            <p className="font-avenir-black text-primary mb-2">
              {jobDetails.employmentType}, {jobDetails.setupName}
            </p>
            {jobDetails.salaryMin && (
              <p className="text-xs mb-5">
                Expected Salary: <br />
                <span className="font-avenir-black text-xl text-primary">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "PHP",
                    maximumFractionDigits: 0,
                  }).format(jobDetails.salaryMin)}
                  {jobDetails.salaryMax &&
                    " - " +
                      Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "PHP",
                        maximumFractionDigits: 0,
                      }).format(jobDetails.salaryMax)}
                </span>
              </p>
            )}
            <p>{jobDetails.description}</p>
            <br />
            {jobDetails.responsibility && (
              <>
                <p className="text-primary font-avenir-black">
                  Responsibilities:
                </p>
                <ul>
                  {jobDetails.responsibility
                    .split(". ")
                    .map((responsibility, index) => {
                      return (
                        <li key={index}>
                          {responsibility}
                          {index !=
                            jobDetails.responsibility.split(". ").length - 1 &&
                            "."}
                        </li>
                      );
                    })}
                </ul>
                <br />
              </>
            )}
            {jobDetails.requirement && (
              <>
                <p className="text-primary font-avenir-black">Requirements:</p>
                <ul>
                  {jobDetails.requirement &&
                    jobDetails.requirement
                      .split(". ")
                      .map((requirement, index) => {
                        return (
                          <li key={index}>
                            {requirement}
                            {index !=
                              jobDetails.requirement.split(". ").length - 1 &&
                              "."}
                          </li>
                        );
                      })}
                </ul>
                <br />
              </>
            )}
            {jobDetails.preferredQualification && (
              <>
                <p className="text-primary font-avenir-black">
                  Preferred Qualifications:
                </p>
                <ul>
                  {jobDetails.preferredQualification &&
                    jobDetails.preferredQualification
                      .split(". ")
                      .map((preferredQualification, index) => {
                        return (
                          <li key={index}>
                            {preferredQualification}
                            {index !=
                              jobDetails.preferredQualification.split(". ")
                                .length -
                                1 && "."}
                          </li>
                        );
                      })}
                </ul>
                <br />
              </>
            )}
             
             <Link 
  className="1fr flex no-underline" 
  to={`/application-form/${jobId}/${toSlug(jobDetails.jobTitle)}`} 
>
  <button
    className="mx-auto font-avenir-black bg-primary py-2 text-white rounded-2xl min-w-52 mb-10"
    type="button"
  >
    APPLY NOW
  </button>
</Link>


          </div>
        ) : (
          <p>Loading job details...</p>
        )}
      </div>
      <BackToTop/>
    </>
  );
};

export default CareersJobDetails;
