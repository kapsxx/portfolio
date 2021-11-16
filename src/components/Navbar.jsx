import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styles from "../styles/Navbar.module.css";
import resume from "../files/resume.pdf";

const Navbar = () => {
  return (
    <div className={styles.section} style={{boxSizing: "border-box"}}>
      <div className={styles.container}>
        <div className={styles.navbarwrapper}>
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className={styles.name}
            tabIndex={0}
          >
            {/* Portfolio. */}
          </div>
          <div className={styles.linkswrapper}>
            <button onClick={() => scrollTo("#projects")}>Projects</button>
            <button onClick={() => scrollTo("#blogs")}>Blogs</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
            <button style={{border: "2px solid #ff7a7a", borderRadius: "8px", marginLeft: "5px"}}> <a href={resume} download="Kapil_Pant_Resume">Resume</a> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar