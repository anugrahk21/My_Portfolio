/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/dhilip-antony-4KqcacY-9s8-unsplash.jpg";

const imageAltText = "desktop with laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AI Chat Bot 🤖",
    description:
      "AI chat bot utilizing Gemini API and telegram as front-end. Leveraging the power of generative AI technology, I aim to create a seamless and intuitive conversational experience for users.",
    url: "https://github.com/anugrahk21/Chat_AI",
  },
  {
    title: "Recipe Mate | A new way to make dishes.",
    description:
      "Generate personalized Indian recipes based on specific criteria.",
    url: "https://share.imagica.ai/fot/",
  },
  {
    title: "Grocery Shop Management System",
    description:
      "Python with MySQL programming project on grocery management system which includes 15-20 functions.",
    url: "https://docs.google.com/document/d/1UeKQNlpBMaGtbTxKuU4WyrKOmrVoqDcf/edit?usp=sharing&ouid=103882276256622569103&rtpof=true&sd=true",
  },
  {
    title: "Responsive web design",
    description:
      "A responsive web design project using HTML, CSS, and JavaScript.",
    url: "https://www.freecodecamp.org/certification/fcc9b90f77b-0959-4419-becb-460c2724bf9e/responsive-web-design",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
