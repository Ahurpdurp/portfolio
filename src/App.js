import "./index.css";

import Typography from "typography";
import moragaTheme from "typography-theme-moraga";
import { TypographyStyle, GoogleFont } from "react-typography";
import Selfie from "./images/selfie.jpg";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";
import cat3 from "./images/cat3.jpg";
import cat4 from "./images/cat4.jpg";
import cat5 from "./images/cat5.jpg";
import Button from "@mui/material/Button";
import resume from "./images/Paul_Wu_Resume.pdf";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const skills = [
  "Node.js",
  "React",
  "Javascript",
  "Vue",
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
        <div className="header" style={{ textAlign: "center", paddingTop: 40 }}>
          <h1>
            <img src={Selfie} alt="Selfie" className="selfie" />
            <b>Paul Wu</b>
          </h1>
          <h2>Software Engineer (Currently Open to New Opportunities)</h2>
          <p style={{ fontSize: "1.25em", fontWeight: 300 }}>
            Working remotely from Houston, Texas
          </p>
          <p
            style={{
              width: "80%",
              margin: "auto",
              marginBottom: 30,
              paddingBottom: 30,
            }}
          >
            Hi! 👋 I've been a software engineer since I graduated from Rice
            University in 2017. Since then, I've had the privilege of working at
            multiple companies and I've learned a bunch of stuff along the way.
            I'll get straight to the point and list my skills and experience
            below 🙂.
          </p>
        </div>
        <h2>My skills:</h2>
        <div className="skills">
          {skills.map((x) => (
            <SkillBox skill={x} />
          ))}
        </div>
        <div className="experience">
          <p
            style={{
              width: "80%",
              textAlign: "center",
              margin: "auto",
              padding: 30,
            }}
          >
            You can download a PDF of my latest resume{" "}
            <a href={resume} download target="_blank" rel="noreferrer">
              here!
            </a>{" "}
            My number and email are listed on my resume, so I won't post it on
            this page to prevent spammers. Here's my{" "}
            <a
              href="https://www.linkedin.com/in/paul-wu/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            if you want to contact me that way instead.
          </p>
        </div>
        <h2>What do I like to do in my freetime? </h2>
        <ul>
          <li>Code (promise I'm not just saying that)</li>
          <li>Write electronic/videogame music (PM for soundcloud)</li>
          <li>
            Play videgames, mainly League of Legends and any Mario and/or Legend
            of Zelda game
          </li>
          <li>
            Run my side business @{" "}
            <a
              href="https://www.flyingfishweb.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.flyingfishweb.com/
            </a>
          </li>
          <li>Go to the gym so I can justify sitting on a chair all day</li>
        </ul>
        <h2>What are my favorites?</h2>
        <ul>
          <li>
            <b>Favorite movies:</b> The Matrix, The Godfather, Everything
            Everywhere All At Once, Ocean's 11, Inception
          </li>
          <li>
            <b>Favorite food:</b> Sushi
          </li>
          <li>
            <b>Favorite videogame:</b> The Legend of Zelda: The Wind Waker
          </li>
          <li>
            <b>Favorite book:</b> The Hitchhiker's Guide to the Galaxy
          </li>
          <li>
            <b>Favorite TV show:</b> Community, The Office, and Always Sunny
          </li>
          <li>
            <b>Favorite programming language:</b> C# probably. Since it's the
            one I started with
          </li>
        </ul>
        <h2>Bonus pictures of Sophia!</h2>
        <ImageList
          sx={{ width: "85%", margin: "auto", paddingBottom: 10 }}
          cols={5}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: 5 }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: cat1,
  },
  {
    img: cat2,
  },
  {
    img: cat3,
  },
  {
    img: cat4,
  },
  {
    img: cat5,
  },
];

export default App;
