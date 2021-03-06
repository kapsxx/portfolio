import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade"
import styles from "../styles/Projects.module.css";

import olx from "../images/olx2.png";
import splitTheBill3 from "../images/splitTheBill3.png";
import rodanandfields from "../images/rodanandfields2.png";
import goibibo from "../images/goibibo.png";
// import project1 from "../images/html-css-javascript-lg.jpg";
// import project2 from "../images/html-css-javascript.jpg";
// import project3 from "../images/javascript-fullstack.jpg";
// import project4 from "../images/mern-stack.jpg";
// import project5 from "../images/react-redux.jpg";
// import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // background: "#233",
    height: "100%"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 30px 0 rgba(0, 0, 0, 0.15)",
    padding: "2%",
    boxSizing: "borderBox"
  },
  cardMedia: {
    objectFit: "contain"
  }
}));

const myprojects = [
  {
    name: "Split The Bill",
    description: `An end-to-end application that focuses on implementing the idea of separating a bill equally among different members of a group.`,
    techStack: "HTML/CSS, JavaScript, React, Context-API, Material UI, Express, MongoDB, Mongoose",
    image: splitTheBill3,
    link: "https://github.com/kapsxx/split_the_bill",
    demo: "https://kapil-pant-split-the-bill.vercel.app/"
  },
  {
    name: "Goibibo Clone",
    description: `Replicated www.goibibo.com along with bus booking feature (only for single route i.e., Mangalore to Bangalore) within 4 days`,
    techStack: "HTML/CSS, JavaScript, React, Redux, Express, MongoDB",
    image: goibibo,
    link: "https://github.com/Dee-Hegde/goibibo_clone",
    demo: "https://goibibo-project-dff906.netlify.app/"
  },
  {
    name: "OLX Clone",
    description: `Replicated www.olx.in along with special features such
    as authentication and chat system within a week`,
    techStack: "HTML/CSS, JavaScript, React, Redux, Firebase, Ant Design",
    image: olx,
    link: "https://github.com/kiranjolisa/team-carbon-olx-clone",
    demo: "https://olx-clone-swart.vercel.app/"
  },
  {
    name: "Rodan+Fields Clone",
    description: `Replicated www.rodanandfields.com using HTML/CSS and tried our level best to make it
    a bit more interactive using DOM manipulations`,
    techStack: "HTML/CSS, JavaScript",
    image: rodanandfields,
    link: "https://github.com/kapsxx/unit-2-project",
    demo: "https://rodan-and-fields.vercel.app/"
  }
];

const Projects = () => {
  const classes = useStyles();
  return (

      <>
<div className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.workwrapper}>
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>
        </div>
      </div>
    </div>
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {myprojects.map((project, i) => (
          <Grid item xs={10} sm={8} md={6} lg={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia className={classes.cardMedia}
                  component="img"
                  alt="Project 1"
                  height="180"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                  <br />
                  <Typography variant="body2" color="textSecondary">
                    <span style={{fontWeight: "900"}}>Tech Stack: </span> {project.techStack}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a style={{textDecoration: "none"}} target="_blank" href={project.link}>See Code</a>
                </Button>
                <Button size="small" color="primary">
                  <a style={{textDecoration: "none"}} target="_blank" href={project.demo}>Live Demo</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Projects;