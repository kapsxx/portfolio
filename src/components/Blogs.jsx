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

import blog1 from "../images/blog1.jpeg";
import blog2 from "../images/blog2.jpeg";
import blog3 from "../images/blog3.jpeg";
import blog4 from "../images/blog4.jpeg";
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

const myblogs = [
  {
    name: "Never Promise More Than You Can Perform in JavaScript!",
    description: `A small and basic explanation of promise and its states`,
    image: blog1,
    link: "https://kapilpant.medium.com/never-promise-more-than-you-can-perform-in-javascript-39f78a25d65"
  },
  {
    name: "Local Storage isn’t too Local for JavaScript!",
    description: `A clear-cut explanation of local storage along with some examples`,
    image: blog2,
    link: "https://kapilpant.medium.com/local-storage-isnt-too-local-for-javascript-58d32f35bc66"
  },
  {
    name: "Prototypes in JavaScript are Not as Cool as The Ones You See in Auto Expo!",
    description: `A lucid explanation on prototypes along with prototype chain in JavaScript`,
    image: blog3,
    link: "https://kapilpant.medium.com/prototypes-in-javascript-are-not-as-cool-as-the-ones-you-see-in-auto-expo-2bfe8b081a3f"
  },
  {
    name: "Wanna Know How Your First Front-End Project Will Look Like?",
    description: `A brief explanation on how I concocted my first (group) project from rudimentary stage`,
    image: blog4,
    link: "https://kapilpant.medium.com/wanna-know-how-your-first-front-end-project-will-look-like-4ded1396b66c"
  }
];

const Blogs = () => {
  const classes = useStyles();
  return (

      <>
<div className={styles.section} id="blogs">
      <div className={styles.container}>
        <div className={styles.workwrapper}>
          <Fade bottom>
            <h1>Blogs</h1>
          </Fade>
        </div>
      </div>
    </div>
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {myblogs.map((project, i) => (
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
                  {/* <br /> */}
                  {/* <Typography variant="body2" color="textSecondary">
                    <span style={{fontWeight: "900"}}>Tech Stack: </span> {project.techStack}
                  </Typography> */}
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a style={{textDecoration: "none"}} target="_blank" href={project.link}>See More</a>
                </Button>
                {/* <Button size="small" color="primary">
                  Live Demo
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Blogs;