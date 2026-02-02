import { useState } from "react";
import "./work.css";

import homePage from "./assets/homePage.png";
import media from "./assets/media.png";
import SearchPage from "./assets/searchResultPage.png";
import projectVideo from "./assets/video1.mp4";

function Work() {
  const [active, setActive] = useState(null);

  const items = [
    {
      id: "project1",
      title: "Classic Windows / Mini Search Engine",
      desc: `Classic Windows is a lightweight mini-search engine developed as a team project. I handled the full front-end: Home Page in HTML/CSS, Media Page in HTML/CSS/JS, and Search Results Page UI. My teammate integrated Python for backend search logic.`,
      content: (
        <>
        <video
          src={projectVideo}
          autoPlay
          loop
          muted
          playsInline
          className="proj-media"
        />
        <div className="fun">hi</div>
        <div className="sub-sections">
      <div className="sub-card">
        <h3>Home Page</h3>
         <img src={homePage} className="proj-media" alt="Home Page" />
        <p>The Home Page features a clean layout with a styled search bar and visually striking header. Built entirely using HTML and CSS, it defines the theme and user experience of the project.
    </p>  
      </div>

      <div className="sub-card">
        <h3>Media Page</h3>
        <img src={media} className="proj-media" alt="Media Page" />
        <p>Some description here…</p>
      </div>
      <div>
        <h3>SearchPage</h3>
        <img src={SearchPage} className="proj-media" alt="Search Page" />
        <p>Some description here…</p>
      </div>
    </div>
</>
      ),
    },
    {
      id: "project2",
      title: "project2",
      desc: 'ssd',
        content:<p>hi</p>,
    },
    {
      id: "project3",
      title: "project3",
      desc: `This Media Page includes a custom circular audio player with neon effects and a scrollable playlist. Built using HTML, CSS, and JavaScript for full interactivity.`,
      content: <p>hello</p>,
    },
    {
      id: "project4",
      title: "project4",
      desc: `The Search Results Page blends my front-end design with Python backend logic. Clean UI cards display processed results, optimized for readability and speed.`,
      content:<p>world</p>,
    },
  ];

  function handleClick(id) {
    setActive(active === id ? null : id);
  }

  return (
    <div className="work-wrapper">
      <h1 className="portfolio-title">My Projects</h1>

      <div className="work-container">
        {items.map((item) => (
          <div
            key={item.id}
            className={`title-block ${
              active === item.id
                ? "active-title"
                : active
                ? "hidden-title"
                : "default-title"
            }`}
            onClick={() => handleClick(item.id)}
          >
            <h2>{item.title}</h2>

            {active === item.id && (
              <div className="content-block fade-slide-in">
                <p>{item.desc}</p>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
