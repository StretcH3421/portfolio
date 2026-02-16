import { useState } from "react";
import { useEffect } from "react";
import "./index.css";
import "tailwindcss";

function App() {
  const [id, setId] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    setIsScrolled(e.currentTarget.scrollTop > 100);
  };

  const projects = [
    {
      id: 1,
      projectName: "GAMELIST",
      projectDescription:
        "GameList is a modern web application inspired by platforms like MyAnimeList, but focused on video games. The app fetches real time data directly from my own database made in Supabase and allows users to browse, search, and explore detailed information about thousands of games.The project was built using React with Vite for fast performance and a smooth development workflow. Styling is done with Tailwind CSS, enhanced by custom CSS variables to create a consistent cyberpunk inspired design system. The application focuses on clean UI, responsive layout, and efficient API data handling.",
      projectLink: "https://github.com/StretcH3421/game-list",
    },
    {
      id: 2,
      projectName: "KDA/CAlC",
      projectDescription:
        "Game Stats Calculator is a command-line application written in C that analyzes player performance based on match statistics. The program accepts arguments such as kills, deaths, assists, and match duration, along with optional inputs like headshots, teamkills, and MVP status.It calculates advanced metrics including K/D, KDA, kills per minute (KPM), assists per minute (APM), and an overall performance score using a custom formula. Based on the final score, the player is assigned a rank ranging from “Noob” to “Godlike.” The project demonstrates strong understanding of C fundamentals, including command-line argument parsing, conditional logic, numeric calculations, input validation, and structured program design.",
      projectLink: "https://github.com/StretcH3421/kda-calculator-c",
    },
    {
      id: 3,
      projectName: "LIBRARY MANAGER",
      projectDescription:
        "Library Manager is a command-line application written in C that allows users to manage a personal reading journal. The program enables adding new books with details such as title, author, genre, start and end dates (ISO format), rating, and notes. All records are stored in a local text file and loaded dynamically into memory when the program runs.In addition to adding books, the application supports listing and filtering entries by genre, reading status (currently reading or completed), and minimum rating. The project demonstrates practical use of C structures, dynamic memory allocation with realloc, file handling, string parsing, command-line argument processing, and input validation.",
      projectLink: "https://github.com/StretcH3421/library-manager-c",
    },
    {
      id: 4,
      projectName: "TODOLIST",
      projectDescription:
        "To-Do List is a simple web application built to practice fundamental JavaScript concepts, especially DOM manipulation. The app allows users to add, mark as completed, and remove tasks dynamically without reloading the page.",
      projectLink: "https://github.com/StretcH3421?tab=repositories",
    },
  ];
  return (
    <div
      className="xl:snap-y xl:snap-mandatory xl:scroll-auto scroll-smooth overflow-y-auto h-screen"
      onScroll={handleScroll}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#111111"
        className={`xl:size-20 sm:size-15 size-10 fixed bottom-20 right-15 z-10 transition-transform duration-300 ${isScrolled ? "rotate-180" : ""}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
      <section className="snap-start overflow-hidden relative w-full min-h-screen flex flex-col px-2.5 bg-linear-to-b from-[#FAF9F6] from-60% to-[#f0ede6]">
        <div className="absolute inset-y-0 left-10 xl:left-20 2xl:left-32 flex items-center">
          <div
            className=" hidden sm:block whitespace-nowrap opacity-100 text-[#111111] text-[5.5em] md:text-[6rem] lg:text-[6.2rem] "
            style={{ writingMode: "vertical-rl", transform: "scale(-1, -1)" }}
          >
            Lubomir Chynoradsky
          </div>
        </div>
        <div className="absolute inset-y-0 right-2 xl:right-5 flex items-center">
          <div
            className="hidden sm:block whitespace-nowrap font-black text-[#BFA181] text-[1.2rem] md:text-[1.4rem] xl:text-[1.6rem] "
            style={{ writingMode: "vertical-rl", transform: "scale(-1, -1)" }}
          >
            SINCE 2005
          </div>
        </div>

        <div className="flex">
          <div className=" mt-10 md:w-360 sm:ml-60 lg:mx-auto lg:translate-x-55 sm:mt-24">
            <h1 className="sm:text-left text-center text-[2rem] leading-tight sm:text-[4rem] md:text-[4.5rem] lg:text-[5.2rem] xl:text-[6rem] 2xl:text-[6.4rem] text-[#111111] xl:leading-26">
              CS Student Focused on Software & Web Development
            </h1>
          </div>
        </div>
        <div className="flex">
          <div className="2xl:w-585 2xl:ml-auto mt-15 sm:mt-35 2xl:mt-30 relative 2xl:shrink-0 flex flex-col lg:flex-row sm:gap-5 2xl:gap-0 xl:gap-30 gap-10 2xl:mr-60 xl:mr-20 leading-tight ">
            <div className=" text-[#555555] flex-1 xl:flex-1/6 2xl:flex-1/5 [@media(min-width:1745px)]:flex-1 mt-7 2xl:px-20 [@media(min-width:1745px)]:px-10">
              <p className=" text-[1.2rem] text-left sm:text-right lg:text-left sm:text-[1.8rem] lg:text-[1.5rem] xl:text-[1.6rem] opacity-80 px-20 xl:pl-60 2xl:pl-70 2xl:pr-55 sm:pl-45 sm:pr-30 lg:mb-10 lg:pr-20 2xl:mb-26 leading-7  [@media(min-width:1745px)]:pl-23 [@media(min-width:1745px)]:pr-40">
                Bratislava based. Creating small projects such as{" "}
                <span className="text-[#BFA181]">webs</span> and simple book
                libraries and calculators. Eager to learn
              </p>
              <p className="hidden lg:block 2xl:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] opacity-60 leading-7 text-right lg:pl-40 xl:mt-40 2xl:mt-0 xl:pl-100 2xl:pl-100 mb-26 [@media(min-width:1745px)]:pl-80 [@media(min-width:1745px)]:pr-0 [@media(min-width:1745px)]:mt-35">
                Bratislava based. Creating small projects such as webs and
                simple book libraries and calculators. Eager to learn
              </p>
              <p className="hidden lg:block 2xl:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] opacity-60 leading-7 text-left lg:pl-40 xl:pl-50 xl:pr-30 2xl:pr-55 xl:mb-0 mb-26 [@media(min-width:1745px)]:pl-0 [@media(min-width:1745px)]:pr-40 [@media(min-width:1745px)]:mt-30">
                Bratislava based. Creating small projects such as webs and
                simple book libraries and calculators. Eager to learn
              </p>
              <p className="hidden lg:block xl:text-[2rem] lg:text-[1.6rem] opacity-70 leading-8 text-right xl:pl-70 xl:mt-45 2xl:mt-30 lg:pl-40 2xl:pl-100 [@media(min-width:1745px)]:pl-50">
                Bratislava based. Creating small projects such as webs and
                simple book libraries and calculators. Eager to{" "}
                <span className="text-[#BFA181]">learn</span>
              </p>
            </div>
            <div className=" max-w-310 text-[#333333] xl:text-[#111111] text-[1.5rem] sm:text-[2rem] md:text-[2.2rem] xl:text-[2.4rem] flex-1 [@media(min-width:1745px)]:flex-1/3 [@media(min-width:1745px)]:pl-90 m-10 mx-20 lg:mt-15 sm:mt-30 2xl:m-0 2xl:mt-15 sm:pl-55 xl:pl-0 xl:mx-5 lg:pl-0 2xl:pl-20 sm:leading-10">
              <p className="xl:text-right text-left">
                I’m a computer science student interested in software and web
                development. I enjoy building small projects that help me better
                understand programming concepts and improve my skills. I have
                experience designing websites in{" "}
                <span className="text-[#BFA181]">Figma</span> and then bringing
                them to life using <span className="text-[#BFA181]">React</span>{" "}
                and <span className="text-[#BFA181]">Tailwind</span> CSS. In my
                free time, I also work on small{" "}
                <span className="text-[#BFA181]">C projects</span> to gain a
                deeper understanding of how programming works at a lower level.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="snap-start overflow-hidden relative w-full min-h-screen flex flex-col px-2.5 bg-linear-to-b from-[#FAF9F6] from-60% to-[#f0ede6]">
        <div className="absolute inset-y-0 left-5 flex items-center">
          <div
            className="hidden xl:block whitespace-nowrap font-black text-[#BFA181] text-[1.6rem]"
            style={{ writingMode: "vertical-rl", transform: "scale(1, 1)" }}
          >
            SINCE 2005
          </div>
        </div>
        <div className="w-full flex flex-row justify-between mt-12 px-10 xl:px-25">
          <div className="text-[#111111] text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">
            PROJECTS
          </div>

          <svg
            width="29"
            height="31"
            viewBox="0 0 29 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() =>
              window.open("https://github.com/StretcH3421", "_blank")
            }
          >
            <path
              d="M10.5836 25.2857C3.91691 27.2857 3.91691 21.9524 1.25024 21.2857M19.9169 29.2857V24.1257C19.9669 23.4899 19.881 22.8508 19.6649 22.2508C19.4488 21.6508 19.1075 21.1036 18.6636 20.6457C22.8502 20.1791 27.2502 18.5924 27.2502 11.3124C27.2499 9.45083 26.5338 7.66066 25.2502 6.31239C25.8581 4.68373 25.8151 2.88352 25.1302 1.28572C25.1302 1.28572 23.5569 0.819057 19.9169 3.25906C16.8609 2.43082 13.6396 2.43082 10.5836 3.25906C6.94358 0.819057 5.37024 1.28572 5.37024 1.28572C4.68541 2.88352 4.64244 4.68373 5.25024 6.31239C3.95708 7.67066 3.24027 9.47701 3.25024 11.3524C3.25024 18.5791 7.65024 20.1657 11.8369 20.6857C11.3982 21.139 11.0599 21.6796 10.844 22.2723C10.628 22.865 10.5393 23.4965 10.5836 24.1257V29.2857"
              stroke="#1E1E1E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col sm:flex-row w-full mx-auto justify-center items-center sm:flex-1 mb-30">
          <div className="project-names text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-[#555555] flex flex-1 flex-col gap-3 xl:gap-8 text-center mt-25 mb-25 xl:mt-0 xl:mb-0 md:pl-5 xl:pl-15 ">
            {projects.map((project) => (
              <h2
                onClick={() => setId(project.id)}
                key={project.id}
                className={
                  project.id === id
                    ? "text-[#111111] scale-115"
                    : "hover:text-[#111111] hover:scale-115 transition-all duration-200 ease-in-out"
                }
              >
                {project.projectName}
              </h2>
            ))}
          </div>
          <div className="project-content text-[1.3rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2rem] text-[#333333] flex flex-1 xl:pr-50 tracking-[0.05em] px-15 xl:px-0 leading-8 xl:leading-12">
            {projects
              .filter((project) => project.id == id)
              .map((project) => (
                <p key={project.id}>
                  {project.projectDescription}
                  <a
                    className="text-[#BFA181] hover:text-[#A17D55] hover:cursor-[url(assets/fonts/images/circle.png)_16_16,auto] underline px-4"
                    href={project.projectLink}
                    target="_blank"
                  >
                    Learn more
                  </a>
                </p>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
