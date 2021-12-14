import logo from "./logo.svg";
import "./App.css";

import Typography from "typography";
import moragaTheme from "typography-theme-moraga";
import { TypographyStyle, GoogleFont } from "react-typography";
import Selfie from "./images/selfie.jpg";
import Button from "@mui/material/Button";
import resume from "./images/Paul_Wu_Resume.pdf";

const skills = [
  "Node.js",
  "React",
  "Javascript",
  "HTML, CSS, jQuery",
  "C# / .NET / .NET Core",
  "Python / Django",
  "SQL",
  "Rust (learning)",
];

const SkillBox = ({ skill }) => (
  <div>
    <Button className="skill-component" disableRipple={true} variant="outlined">
      {skill}
    </Button>
  </div>
);

function App() {
  // moragaTheme.bodyColor = darkTheme ? "rgb(226, 226, 226)" : "black";
  // moragaTheme.headerColor = darkTheme ? "rgb(226, 226, 226)" : "black";
  const typography = new Typography(moragaTheme);
  typography.injectStyles();
  return (
    <div>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <div className="portfolio">
        <div className="header">
          <h1>
            <img src={Selfie} alt="Selfie" className="selfie" />
            <b>Paul Wu</b>
          </h1>
          <h2>Softare Engineer, Currently at Mediafly</h2>
          <p>
            Hi! 👋 I've been a software engineer since I graudated from Rice
            University in 2017. Since then, I've had the privilege of working at
            multiple companies and I've learned a bunch of stuff along the way.
            I'll get straight to the point and list my skills and experience
            below 🙂.
          </p>
        </div>
        <div className="skills">
          <h2>My skills:</h2>
          {skills.map((x) => (
            <SkillBox skill={x} />
          ))}
        </div>
        <div className="experience">
          <h2>My Experience:</h2>
          <p>
            You can download a PDF version{" "}
            <a href={resume} download target="_blank">
              here
            </a>
          </p>
          {skills.map((x) => (
            <SkillBox skill={x} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
