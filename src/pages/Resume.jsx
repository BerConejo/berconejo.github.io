import {
  FaCalendar,
  FaMapPin,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import "../assets/styles/Resume.css";

const timelineResume = [
  {
    year: "2021 - Present",
    title: "Software Consultant",
    company: "Crux Consultores",
    icon: FaBriefcase,
    description:
      "Developed and optimized banking systems end-to-end, boosting efficiency and stability through code development, database optimization, and CI/CD automation—resulting in faster performance, reduced errors, and improved maintainability.",
  },
  {
    year: "2018 - 2021",
    title: "Software Developer",
    company: "Softland",
    icon: FaCode,
    description:
      "Led enterprise development projects, enhancing CRM and core systems with .NET and SQL. Improved performance, reporting, and quality through automation and optimization.",
  },
  {
    year: "2016 - 2018",
    title: "Junior Developer",
    company: "Grupo Microsistemas",
    icon: FaCode,
    description:
      "Built and maintained core business systems with .NET and C#, developed cross-platform mobile apps with Xamarin, and improved interoperability using WCF Services.",
  },
];

const timelineEducation = [
  {
    year: "2017 - 2019",
    title: "Bachelor's Degree in Computer Systems Engineering",
    site: "Universidad Tecnológica Costarricense",
    icon: FaGraduationCap,
  },
  {
    year: "2017 - 2018",
    title: "Certificate in Developing Mobile Apps with C#, .NET, and Xamarin",
    site: "Universidad Cenfotec",
    icon: FaGraduationCap,
  },
  {
    year: "2014 - 2015",
    title: "Computer Systems Programming Technician",
    site: "Universidad Latina de Costa Rica",
    icon: FaGraduationCap,
  },
];

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume_container">
        <div className="resume_header">
          <h2 className="resume_title">Resume</h2>
        </div>

        <div className="resume_content">
          {/* Experience Section */}
          <div className="resume_section">
            <div className="resume_section-header">
              <div className="resume_section-icon-container">
                <FaBriefcase className="resume_section-icon" />
              </div>
              <h3 className="resume_section-title">Professional Experience</h3>
            </div>

            <div className="resume_timeline">
              {timelineResume.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="resume_timeline-item">
                    <div className="resume_timeline-marker">
                      <Icon className="resume_timeline-icon" />
                    </div>
                    <div className="resume_timeline-content">
                      <div className="resume_timeline-header">
                        <div className="resume_timeline-year">
                          <FaCalendar className="resume_year-icon" />
                          <span>{item.year}</span>
                        </div>
                        <div className="resume_timeline-location">
                          <FaMapPin className="resume_location-icon" />
                          <span>{item.company}</span>
                        </div>
                      </div>
                      <h4 className="resume_timeline-title">{item.title}</h4>
                      <p className="resume_timeline-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Section */}
          <div className="resume_section">
            <div className="resume_section-header">
              <div className="resume_section-icon-container">
                <FaGraduationCap className="resume_section-icon" />
              </div>
              <h3 className="resume_section-title">Education</h3>
            </div>

            <div className="resume_timeline">
              {timelineEducation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="resume_timeline-item">
                    <div className="resume_timeline-marker">
                      <Icon className="resume_timeline-icon" />
                    </div>
                    <div className="resume_timeline-content">
                      <div className="resume_timeline-header">
                        <div className="resume_timeline-year">
                          <FaCalendar className="resume_year-icon" />
                          <span>{item.year}</span>
                        </div>
                        <div className="resume_timeline-location">
                          <FaMapPin className="resume_location-icon" />
                          <span>{item.site}</span>
                        </div>
                      </div>
                      <h4 className="resume_timeline-title">{item.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
