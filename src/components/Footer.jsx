import React from "react"
import Fade from "react-reveal/Fade"
import githubIcon from "../images/github.svg";
import linkedin3 from "../images/linkedin3.png";
import medium2 from "../images/medium2.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {

const mysocial = [
    { 
        img: githubIcon,
        url: "https://github.com/kapsxx"
    },
    { 
      img: linkedin3,
      url: "https://uk.linkedin.com/in/kapsxx"
    },
    { 
      img: medium2,
      url: "https://kapilpant.medium.com/"
    }
]

  return (
    <div className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.footercontainer}>
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>Let's create your next experience together</h2>
          </Fade>
          <a className={styles.emaillink} href={`mailto:kapil110198@gmail.com`}>
            kapil110198@gmail.com
          </a>
          <div className={styles.socialicons}>
            {mysocial.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer