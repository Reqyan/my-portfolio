import React from "react";

const articleList = [
  {
    title: "LocalSend : SHAREit tapi Open-Source",
    subtitle: "Aplikasi Sharing File Alternatif dan Open Source",
    date: "Nov 1, 2024",
    link: "https://medium.com/@reqyan.laz/localsend-shareit-tapi-open-source-ac85567dc2f8",
  },
];

const Articles = () => {
  return (
    <div className="m-4 font-poppins items-center">
      <section className="flex flex-col place-items-center justify-start my-0 py-10 text-bold">
        <div className="text-6xl">
          <h1 className="" style={{ fontSize: "64px" }}>
            My <span style={{ color: "#3B6CE9" }}>Articles</span>
          </h1>
        </div>
      </section>
      <div className="flex justify-center">
        <ul className="w-full max-w-2xl">
          {articleList.map((article, index) => (
            <li key={index} className="mb-8 flex items-start">
              <div className="text-4xl font-bold mr-4">{index + 1}</div>
              <div>
                <h2 className="text-3xl font-bold">{article.title}</h2>
                <h3 className="text-2xl mb-2">{article.subtitle}</h3>
                <p className="text-sm text-gray-600 mb-2">{article.date}</p>
                <a
                  href={article.link}
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

export default Articles;
