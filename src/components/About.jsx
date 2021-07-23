import React from "react"
import Fade from "react-reveal/Fade"
import styles from "../styles/About.module.css";
import aboutImage2 from "../images/aboutImage2.jpg";

const About = () => {
  return (
    <div className={styles.secion} id="about">
      <div className={styles.container}>
        <div className={styles.aboutsection}>
          <div className={styles.content}>
            <Fade bottom cascade>
              <h1>About Me</h1>
              <br />
            </Fade>
            <p>
                Aspiring web developer with robust component based developing skills. Collaborative, team player who is proficient in working with teams and building interactive web applications. Strongly interested in obtaining a developer position to work on enhancing product experience.
            </p>
          </div>
          <div style={{border: "0px solid red"}} className={styles.imagewrapper}>
            <img style={{maxWidth: "60%", borderRadius: "50%"}} src={aboutImage2} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About