import "../assets/styles/About.css";
import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaInfinity,
  FaGamepad,
  FaCloud,
} from "react-icons/fa";

export default function About() {
  const skillCategories = [
    {
      id: "development",
      title: "Development",
      icon: FaCode,
      skills: [
        "EF Core",
        "MVC Razor",
        "jQuery",
        "Web API",
        ".NET Core",
        ".NET Framework",
        "C#",
        "React",
        "JavaScript",
        "TypeScript",
        "Xamarin Forms",
        "REST APIs",
        "Minimal APIs",
        "WCF",
        "LINQ",
        "Lambda",
        "Git",
        "Unit Testing",
        "NUnit",
        "TDD",
        "Clean Architecture",
        "Dependency Injection (DI)",
        "SOLID Principles",
        "MVC",
        "MVVM",
        "Singleton",
        "Microservices",
        "Cross-Platform",
      ],
    },
    {
      id: "database",
      title: "Database & Storage",
      icon: FaDatabase,
      skills: [
        "Dapper",
        "Database Design",
        "SQL Server",
        "T-SQL",
        "Stored Procedures",
        "Triggers",
        "Functions",
        "Query Optimization",
        "Redis",
      ],
    },
    {
      id: "devops",
      title: "DevOps, Cloud & Others",
      icon: FaCloud,
      skills: [
        "Power BI",
        "SCRUM",
        "Azure DevOps",
        "GitHub",
        "CI/CD",
        "Docker",
        "Microsoft Dynamics CRM",
      ],
    },
  ];

  return (
    <div className="about">
      <h2 className="about_title">Here's a bit more about what I do</h2>
      <p className="about-description">
        FullStack Web and Mobile Developer from Costa Rica. Adept at develop
        flexible web and mobile applications, optimizing database performance,
        and collaborating with cross-functional teams to deliver high-quality
        solutions.
      </p>
      <p className="about-description">
        I specialize in building high-performance, scalable applications that
        are not only functional and user-friendly but also visually engaging. I
        apply a personalized approach to every project, delivering solutions
        that are both aesthetically refined and intuitively.
      </p>

      <h3 className="section-title">Things I Do</h3>
      <div className="services">
        <div className="service-card">
          <FaCode className="service-icon" />
          <div>
            <h4>Back-End Development</h4>
            <p>
              Building modern, high-performance backend solutions with clean,
              scalable architecture and professional-grade code quality using C#
              and .NET Core.
            </p>
          </div>
        </div>
        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <div>
            <h4>Mobile Apps</h4>
            <p>
              Professional development of applications for iOS and Android using
              .NET MAUI.
            </p>
          </div>
        </div>
        <div className="service-card">
          <FaCode className="service-icon" />
          <div>
            <h4>Front-End Development</h4>
            <p>
              Crafting modern, high-quality user interfaces with a professional
              touch, using React and the latest front-end technologies.
            </p>
          </div>
        </div>
        <div className="service-card">
          <FaDatabase className="service-icon" />
          <div>
            <h4>SQL Database Developer & Administrador</h4>
            <p>
              Designing and managing modern, high-performance SQL databases with
              professional-level precision, reliability, and data integrity.
            </p>
          </div>
        </div>
        <div className="service-card">
          <FaInfinity className="service-icon" />
          <div>
            <h4>Azure DevOps</h4>
            <p>
              Experience implementing robust CI/CD pipelines to automate
              deployments, enhance efficiency, and minimize release errors.
            </p>
          </div>
        </div>
        <div className="service-card">
          <FaGamepad className="service-icon" />
          <div>
            <h4>Gamming Aficionado</h4>
            <p>
              Passionate gamer who spends most of their playtime on the PS5,
              always chasing the next great adventure.
            </p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="about_skills">
        <h3 className="about_skills-title">Some of my skills</h3>
        <div className="about_skills-categories">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`about_skill-category about_skill-category--${category.id}`}
              >
                <div className="about_category-header">
                  <Icon className="about_category-icon" />
                  <h4 className="about_category-title">{category.title}</h4>
                </div>
                <div className="about_category-scroll">
                  <div className="about_category-grid">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="about_skill-card">
                        <h5 className="about_skill-name">{skill}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
