import { useState } from "react";
import "./Projects.css";
import Project from "../Components/Project/Project";

function Projects() {
  const [X, setX] = useState(0);
  const Z = 3;

  const getDots = (Rows) => {
    const content = [];
    for (let i = 0; i < Rows; i++) {
      content.push(
        <div key={i}
          className="Dots"
          style={{
            backgroundColor: X === i ? "var(--primary)" : "var(--secondary)",
          }}
        />
      );
    }
    return content;
  };

  return (
    <div className="Projects" id="ProjectID">
      <div className="ProjectsContent">
        <p className="Title ProTitle">Projects</p>
        <div className="ProjectsDiv">
          <div className="ProjectsContainer">
            <svg
              viewBox="0 0 19 32"
              className="Arrow"
              onClick={() => SlideLeft()}
            >
              <path d="M17.7678 0.898859C18.7441 1.87517 18.7441 3.45808 17.7678 4.43439L6.20222 16L17.7678 27.5655C18.7441 28.5418 18.7441 30.1247 17.7678 31.1011C16.7915 32.0774 15.2086 32.0774 14.2323 31.1011L0.89892 17.7677C-0.0773907 16.7914 -0.0773907 15.2085 0.89892 14.2322L14.2323 0.898859C15.2086 -0.0774517 16.7915 -0.0774517 17.7678 0.898859Z" />
            </svg>
            <div className="Slider">
              <div
                className="SliderDiv"
                style={{
                  transform:
                    "translateX(calc(" + X + "* -100% - (10px *" + X + ")))",
                }}
              >
                <Project
                  Title="Netflix Clone"
                  Link="https://github.com/Sanjeevan2412"
                  LinkText="Netlfix_Clone"
                  Img1="/assets/P1-1.png"
                  Img2="/assets/P1-2.png"
                  Desc={["React", "Typescript", "Vite", "Responsive Design"]}
                  Logo="Git"
                />
                <Project
                  Title="TaskPhase"
                  Link="https://github.com/Sanjeevan2412/TaskPhase"
                  LinkText="TaskPhase_Website"
                  Img1="/assets/P2-1.png"
                  Img2="/assets/P2-2.png"
                  Desc={["Html", "CSS", "Responsive Design"]}
                  Logo="Git"
                />
                <Project
                  Title="TaskPhase App"
                  Link="https://www.figma.com/file/bQaVN11b5CqVlx045GDHe6/TaskPhase-2.0-(Light)?type=design&node-id=0%3A1&mode=design&t=OzNSrRJwVZ3sZEFk-1"
                  LinkText="TaskPhase_Prototype"
                  Img1="/assets/P3-1.png"
                  Img2="/assets/P3-2.png"
                  Desc={["Figma", "Prototpye", "High Fidelity"]}
                  Logo="Figma"
                />
              </div>
            </div>
            <svg
              viewBox="0 0 19 32"
              className="Arrow"
              onClick={() => SlideRight()}
            >
              <path d="M1.23223 0.898981C2.20854 -0.0773296 3.79146 -0.0773296 4.76777 0.898981L18.1011 14.2323C19.0774 15.2086 19.0774 16.7915 18.1011 17.7678L4.76777 31.1012C3.79146 32.0775 2.20854 32.0775 1.23223 31.1012C0.255922 30.1249 0.255922 28.542 1.23223 27.5656L12.7978 16.0001L1.23223 4.43451C0.255922 3.4582 0.255922 1.87529 1.23223 0.898981Z" />
            </svg>
          </div>
          <div className="DotDiv">{getDots(Z)}</div>
        </div>
      </div>
    </div>
  );

  function SlideLeft() {
    if (X > 0) {
      setX(X - 1);
    } else {
      setX(Z - 1);
    }
  }

  function SlideRight() {
    if (X < Z - 1) {
      setX(X + 1);
    } else {
      setX(0);
    }
  }
}

export default Projects;
