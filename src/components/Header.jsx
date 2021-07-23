import React from "react"
import Fade from "react-reveal/Fade"
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.section} id="home">
      <div className={styles.container}>
        <div className={styles.headerwrapper}>
          <Fade bottom>
            <h2>
              Hi, I'm Kapil
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className={styles.headingwrapper}>
              <h1>Building robust</h1>
              <h1>component-based</h1>
              <h1>web applications</h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>An aspiring full stack web developer who loves to collaborate with people and construct interactive web applications</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                "kapil110198@gmail.com"
              }`}
              className={styles.primarybtn}
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header