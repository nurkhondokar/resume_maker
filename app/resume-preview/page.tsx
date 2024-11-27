import React from "react";

const ResumePreview: React.FC = () => {
  return (
    <div
      className="p-4 bg-slate-300 text-black rounded space-y-2"
      style={{
        width: "210mm", // A4 width
        height: "297mm", // A4 height
        overflow: "hidden", // Prevent overflow
        margin: "0 auto", // Center it horizontally
      }}
    >
      {/* Basic Information */}
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-center">Md.Noora Alam Siddik</h1>

        <img
          src="/"
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full border"
        />
      </div>
      <p className="text-lg text-center">Frontend Web Developer</p>

      <hr />

      <div className="flex min-h-screen">
        <div className="w-px bg-gray-400"></div>
        <div className="w-3/5 text-align-justify hyphens-auto px-2">
          {/* 60% left side */}
          {/* Resume Objective */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Resume Objective</h2>
            <p>
              To build up my career in the field of challenging post in any
              organization where there is immense scope to work and prove one's
              expertise.
            </p>
          </div>
          {/* Experience */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Experience</h2>
            <hr />
            <ul className="list-disc pl-4">
              <li>
                E-commerce and Drop-shipping: Experience with product research,
                listing, and data entry (April 8, 2021 – July 31, 2022).
              </li>
              <li>
                Web Design and Development: Worked on Frontend projects using
                React.js and Next.js (Sep 1, 2022 – June 10, 2023).
              </li>
            </ul>
          </div>

          {/* Personal Details */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Personal Details</h2>
            <p>Father's Name: Md. Reduan Rahman</p>
            <p>Mother's Name: Mst. Nurzulian</p>
            <p>Date of Birth: 18th May 1999</p>
            <p>Gender: Male</p>
            <p>Marital Status: Single</p>
            <p>Nationality: Bangladeshi</p>
          </div>

          {/* Language Proficiency */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Language Proficiency</h2>
            <p>Bengali and English (Can Read, Write and Speak)</p>
          </div>

          {/* Hobbies and Interest */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold"> Hobbies and Interest</h2>
            <p>
              Internet Browsing, Traveling, Playing Cricket, Football, and
              watching television
            </p>
          </div>

          {/*Declaration */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Declaration</h2>
            <p>
              {" "}
              do hereby declare and certify that all the information stated
              above in these curriculum vitae is true and complete to the best
              of my knowledge and belief
            </p>
          </div>
        </div>

        <div className="w-px bg-gray-400"></div>

        <div className="w-2/5 text-align-justify hyphens-auto px-2">
          {/* 40% right side */}
          {/* Contact */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p>Phone: 01759175821</p>
            <p>Email: nkclick@gmail.com</p>
            <p>LinkedIn: nkclick.linkdinprofile</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Skills</h2>
            <p>
              Problem Solving, <br />
              Frontend Web Developer, <br />
              React.js, Next.js, Tailwind CSS, <br />
              Bootstrap, Django, Git, GitHub, <br />
              Microsoft Office, Adobe Photoshop, <br />
              Adobe Illustrator
            </p>
          </div>

          {/*Industrial Attachment */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Industrial Attachment</h2>
            <p>
              Company name: Bdtask Ltd.
              <br />
              Address: Khilkhet, Dhaka-1229 <br />
              Duration: 3 Months <br />
              Course: Responsive Web Design
              <br />
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Education</h2>
            <ul className="list-disc pl-4">
              <li>
                Diploma-In-Engineering
                <br />
                Chapainawabgonj Polytechnic Institute
                <br />
                Technology: Computer
                <br />
                Passing year: 2021 CGPA: 3.43 (out of 4)
              </li>
              <li>
                Secondary School Certificate
                <br />
                Raninagar Pailot High School
                <br />
                Trade/Group: Vocational
                <br />
                Passing year: 2017
                <br />
                G.P.A: 4.79 (out of 5)
              </li>
            </ul>
          </div>

          {/* Signature */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Signature</h2>
            <img src="/" alt="Signature" className="w-20 h-8 border" />
          </div>
        </div>

        <div className="w-px bg-gray-400"></div>
      </div>
      <hr />
    </div>
  );
};

export default ResumePreview;
