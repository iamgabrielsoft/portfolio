import { DiAndroid, DiTerminal, DiJavascript, DiReact, DiNodejs, DiMysql} from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "web",
    Component: DiJavascript,
    title: "Web",
    Description: () => <>I work on Open Source Project and web Project using Javascript</>,
  },
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => <>Currently working with React in the Web. </>,
  },
  {
    slug: "typescript",
    Component: SiJava,
    title: "Typesript",
    Description: () => <>I can code using Typescript but mainly i use it for Large Scale Project.</>,
  },
  {
    slug: "mysql",
    Component: DiMysql,
    title: "Querying",
    Description: () => <>I have written bunch of SQL Queries to retrive data from the database</>,
  },
  {
    slug: "nodejs",
    Component: DiNodejs,
    title: "Nodejs",
    Description: () => <>I use Nodejs for Backend Services.</>,
  },

  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
