import React from "react";
const projectList = [
  {
    title: "Work in Progress",
    subtitle: "Lorem ipsum dolor sit amet",
    date: "2023-01-01",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
const Projects = () => {
  return (
    <div className="m-4 font-poppins items-center">
      <section className="flex flex-col place-items-center justify-start my-0 py-10 text-bold">
        <div className="text-6xl">
          <h1 className="" style={{ fontSize: "64px" }}>
            My <span style={{ color: "#3B6CE9" }}>Projects</span>
          </h1>
        </div>
      </section>
      <div className="flex justify-center">
        <ul className="w-full max-w-2xl">
          {projectList.map((project, index) => (
            <li key={index} className="mb-8 flex items-start">
              <div className="text-4xl font-bold mr-4">{index + 1}</div>
              <div>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <h3 className="text-2xl mb-2">{project.subtitle}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.date}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Read More --&gt;
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
