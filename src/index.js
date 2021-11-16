import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from "./components/Layout.jsx";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Blogs from "./components/Blogs.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Header/>
      <Projects/>
      <Blogs/>
      <About/>
      <Skills/>
      <Footer/>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
