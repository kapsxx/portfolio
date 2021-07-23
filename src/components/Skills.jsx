import React from "react"
import htmlIcon from "../images/html.svg";
import cssIcon from "../images/css.svg"
import reactIcon from "../images/react.svg"
import reduxIcon from "../images/reduxicon.svg"
import jsIcon from "../images/javascript.svg"
import codeIcon from "../images/code.svg"
import expressjsIcon from "../images/expressjs.svg"
import mongodbIcon from "../images/mongodb.svg"
import backendIcon from "../images/backend.svg"
import styles from "../styles/Skills.module.css";

const Skills = () => {

    const myskills = [
        {
          img: htmlIcon,
          para:
            "HTML5",
        },
        {
          img: cssIcon,
          para:
            "CSS3",
        },
        {
          img: jsIcon,
          para:
            "JavaScript",
        },
        {
          img: reactIcon,
          para:
            "React",
        },
        {
          img: reduxIcon,
          para:
            "Redux",
        },
        {
          img: expressjsIcon,
          para:
            "Express",
        },
        {
          img: mongodbIcon,
          para:
            "MongoDb",
        },
        {
          img: backendIcon,
          para:
            "Backend",
        },
        {
            img: codeIcon,
            para:
              "Data Structures & Algorithms",
        }
    ]

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.skillscontainer}>
          <h1>Skills</h1>
          <div className={styles.skillsgrid}>
            {myskills.map((skill, index) => (
              <div className={styles.skill} key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills