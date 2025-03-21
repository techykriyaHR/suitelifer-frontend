import React, { useState } from "react";
import MobileNav from "../../components/home/MobileNav";
import TabletNav from "../../components/home/TabletNav";
import DesktopNav from "../../components/home/DesktopNav";
import BackButton from "../../components/BackButton";
import FileUploadIcon from "../../assets/icons/file-upload";
import { useParams } from "react-router-dom";
import BackToTop from "../../components/BackToTop";
import { toSlug, unSlug } from "../../utils/slugUrl";
import axios from "axios";

const ApplicationForm = () => {
  window.scroll(0, 0);

  const { id, jobPosition } = useParams();
  const [position, setPosition] = useState(jobPosition);
  const [applicationDetails, setApplicationDetails] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    email_1: "",
    mobile_number_1: "",
    discovered_at: "",
    applied_source: "Suitelife",
    referrer_name: "",
    position_id: id,
    created_by: import.meta.env.VITE_GUEST_USER,
    updated_by: import.meta.env.VITE_GUEST_USER,
  });

  const handleApplicationDetailsChange = (e) => {
    setApplicationDetails((ad) => ({ ...ad, [e.target.name]: e.target.value }));
    console.log(applicationDetails);
  };

  const [showReferralInput, setShowReferralInput] = useState(false);

  const [file, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedFile((f) => selectedFile);
    console.log(selectedFile);
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    try {
      console.log(import.meta.env.VITE_ATS_API_BASE_URL);

      const formData = new FormData();
      formData.append("file", file);

      const upload_response = await axios.post(
        `${import.meta.env.VITE_ATS_API_BASE_URL}/upload/cv`,
        formData
      );
      console.log(upload_response.data.fileUrl);
      setApplicationDetails((ad) => ({
        ...ad,
        cv_link: upload_response.data.fileUrl,
      }));
      console.log(applicationDetails);

      const response = await axios.post(`${import.meta.env.VITE_ATS_API_BASE_URL}/applicants/add`, {
        applicant: JSON.stringify(applicationDetails),
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      className="gap-4 h-dvh"
      style={{ maxWidth: "1800px", margin: "0 auto" }}
    >
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
      {/* <div  className="-z-50 absolute w-[90%] transform translate-y-5 -translate-x-10 lg:-translate-x-20 xl:-translate-x-50 opacity-10 text-9xl font-avenir-black text-primary"
         >APPLICATION FORM</div> */}
      {/* BLOGS HERO */}
      <section className="pt-[10%] xl:pt-[8%]">
        <main className="px-[5%]">
          <div className="md:px-5 lg:px-20 xl:px-50">
            {" "}
            <BackButton
              type={unSlug(position) + " Details"}
              backPath={`/careers/${toSlug(position)}`}
              jobId={id}
            />
            <div className="py-5"></div>
            <form
              onSubmit={handleSubmitApplication}
              className="space-y-4 text-sm p-6 md:p-12 lg:p-15 shadow-sm border-primary border-1  rounded-lg bg-white"
            >
              <p className="!text-lg lg:!text-2xl font-avenir-black mb-10">
                Job Application Form
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-avenir-black">
                    First Name<span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={applicationDetails.first_name}
                    onChange={handleApplicationDetailsChange}
                    required
                    className="w-full p-3 border-none rounded-md bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-avenir-black">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    name="middle_name"
                    value={applicationDetails.middle_name}
                    onChange={handleApplicationDetailsChange}
                    className="w-full p-3 border-none rounded-md bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-avenir-black">
                    Last Name<span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={applicationDetails.last_name}
                    onChange={handleApplicationDetailsChange}
                    required
                    className="w-full p-3 border-none rounded-md bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-5">
                <div>
                  <label className="block text-gray-700 font-avenir-black">
                    Birthdate<span className="text-primary">*</span>
                  </label>
                  <input
                    type="date"
                    name="birth_date"
                    value={applicationDetails.birth_date}
                    onChange={handleApplicationDetailsChange}
                    required
                    className="text-primary w-full p-3 border-none rounded-md bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-gray-700 font-avenir-black">
                    Sex<span className="text-primary">*</span>
                  </label>
                  <div className="flex gap-4 mt-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleApplicationDetailsChange}
                        required
                        className="text-primary focus:ring-primary"
                      />
                      <span className="ml-2 text-gray-700">Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleApplicationDetailsChange}
                        required
                        className="text-primary focus:ring-primary"
                      />
                      <span className="ml-2 text-gray-700">Female</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-5">
                <div>
                  <label className="block text-gray-700 font-avenir-black">
                    Email Address<span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email_1"
                    value={applicationDetails.email_1}
                    onChange={handleApplicationDetailsChange}
                    required
                    className="w-full p-3 border-none rounded-md bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="relative">
                  {" "}
                  <label className="block text-gray-700 font-avenir-black">
                    Phone Number<span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile_number_1"
                    value={applicationDetails.mobile_number_1}
                    onChange={handleApplicationDetailsChange}
                    required
                    maxLength="9"
                    pattern="[0-9]{9}"
                    placeholder="Enter 9-digit number"
                    className="w-full p-3 pl-14 border-none rounded-md  text-gray-700   bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="absolute left-3 top-[65%]   -translate-y-1/2  text-gray-700  flex items-center  space-x-1 font-avenir-black">
                    <span>🇵🇭&nbsp;</span>
                    <span>09</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 mt-10">
                <label className="block text-gray-700 font-avenir-black">
                  How did you discover Fullsuite?
                  <span className="text-primary">*</span>
                </label>
                <div className="flex flex-col gap-3 mt-3">
                  {[
                    "Through Referral",
                    "Website",
                    "Social Media",
                    "Podcast",
                    "Career Fair (Startup Caravan, University Visit, etc.)",
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="discovered_at"
                        value={option}
                        required
                        className="text-primary focus:ring-primary"
                        onChange={(e) => {
                          setShowReferralInput(option === "Through Referral");
                          handleApplicationDetailsChange(e);
                        }}
                      />
                      <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>

                {showReferralInput && (
                  <div className="mt-3">
                    <label className="block text-gray-700 font-avenir-black">
                      Who referred you?<span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="referrer_name"
                      required={showReferralInput}
                      className="w-full p-3 border-none rounded-md bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                )}
              </div>
              {/* <div className="md:col-span-2">
                <label className="block text-gray-700 font-avenir-black">
                  What are you applying for?
                  <span className="text-primary">*</span>
                </label>
                <select
                  name="applicationType"
                  required
                  defaultValue=""
                  className="w-full p-3 border-none rounded-md bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="job">Job Position</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-avenir-black">
                    Rate the shift you most prefer:
                    <span className="text-primary">*</span>
                  </label>
                  <select
                    name="applicationType"
                    defaultValue=""
                    required
                    className="w-full p-3 border-none rounded-md bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="day-shift">
                      Day Shift (7:00 AM to 4:00 PM)
                    </option>
                    <option value="mid-shift">
                      Mid Shift (2:00 AM to 11:00 PM)
                    </option>
                    <option value="night-shift">
                      Night Shift (9:00 AM to 6:00 PM)
                    </option>
                  </select>{" "}
                </div>
                <div>
                  <label className="block text-gray-700 font-avenir-black">
                    Rate the shift you prefer second:
                    <span className="text-primary">*</span>
                  </label>
                  <select
                    name="applicationType"
                    defaultValue=""
                    required
                    className="w-full p-3 border-none rounded-md bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="day-shift">
                      Day Shift (7:00 AM to 4:00 PM)
                    </option>
                    <option value="mid-shift">
                      Mid Shift (2:00 AM to 11:00 PM)
                    </option>
                    <option value="night-shift">
                      Night Shift (9:00 AM to 6:00 PM)
                    </option>
                  </select>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-avenir-black">
                  If you are not a resident of Baguio City and its nearby areas,
                  are you willing to shoulder your own living expenses should
                  you be hired for a job or an internship?
                  <span className="text-primary">*</span>
                </label>
                <div className="flex gap-4 mt-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="residency"
                      value="yes"
                      required
                      className="text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="residency"
                      value="no"
                      required
                      className="text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-700">No</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-avenir-black">
                  What are the requirements you already posses? Just choose
                  whichever you may already have.
                  <span className="text-primary">*</span>
                </label>
                <div className="flex flex-col gap-3 mt-3">
                  {[
                    "  Birth Certificate",
                    "  PhilHealth ID",
                    "  PAGIBIG ID",
                    "  SSS",
                    "  Barangay Clearance",
                    "  Police Clearance",
                    "  NBI Clearance",
                    "TIN",
                    "RTC Clearance",
                    "2 Government ID's",
                    "Academic Record",
                    "Certificate of Clearance",
                    "Form 2316",
                  ].map((requirement) => (
                    <label key={requirement} className="flex items-center">
                      <input
                        type="checkbox"
                        name="requirements"
                        value={requirement}
                        required
                        className="text-primary focus:ring-primary"
                      />
                      <span className="ml-2 text-gray-700">{requirement}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-avenir-black">
                    When are you available for a face-to-face interview?
                    (Primary Option) <span className="text-primary">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    required
                    className="w-full p-3 border-none rounded-md mt-3 bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-avenir-black">
                    When are you available for a face-to-face interview?
                    (Secondary Option) <span className="text-primary">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    required
                    className="w-full p-3 border-none mt-3 rounded-md bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-avenir-black">
                  If hired, when can you start?
                  <span className="text-primary">*</span>
                </label>
                <div className="flex flex-col gap-3 mt-3">
                  {[
                    "  Within the week",
                    "Atleast one week from job offer",
                    "  Atleast one month from job offer",
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="whenStart"
                        value={option}
                        required
                        className="text-primary focus:ring-primary"
                      />
                      <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div> */}
              <div className="mt-10">
                <label className="block text-gray-700 font-avenir-black mb-3">
                  Upload your Curriculum Vitae here:{" "}
                  <span className="text-primary">*</span>
                </label>

                {/* Drag and Drop Container */}
                <label
                  htmlFor="fileUpload"
                  className={`flex flex-col items-center justify-center p-10 border border-primary border-dashed rounded-lg cursor-pointer text-primary hover:bg-primary/10`}
                  // onDragOver={handleDragOver}
                  // onDragLeave={handleDragLeave}
                  // onDrop={handleDrop}
                >
                  <FileUploadIcon size={50} />
                  <span className="text-center mt-5">
                    {/* {isDragging
                      ? "Drop your file here"
                      : "Click to upload or drag and drop here"} */}
                    Click here to upload your CV or drag and drop it here
                  </span>
                </label>

                {/* Hidden File Input */}
                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />

                {/* Show Selected File */}
                {file && (
                  <p className="mt-3 text-gray-700">
                    Selected file: {file.name}
                  </p>
                )}
              </div>
              <div className="py-2"></div>
              <button
                type="submit"
                className="w-full font-avenir-black bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition"
              >
                SUBMIT APPLICATION
              </button>
              <button
                type="button"
                className="w-full   text-primary py-3 rounded-md hover:bg-primary/10 transition"
              >
                CANCEL
              </button>{" "}
            </form>
          </div>
        </main>
      </section>

      <div className="h-30"></div>
      <BackToTop />
    </section>
  );
};

export default ApplicationForm;
