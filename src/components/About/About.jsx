import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("skills/sitting.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                <br />
             Hi, I'm a passionate Full Stack Web Developer dedicated to crafting elegant and efficient solutions.Creating frameworks and working with html and javascript. Developing responsive and dynamic website applications and APIS. Collaborated closely with the design team to implement user interface designs that align with
UX/UI principles.</p>
            </div>
          </li>       
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Bachelor of Technology</h3>
              <p>
                <br />
Central institute of plastics engineering
and technology - IPT
              </p>
                <p className={styles.yearss}>2016-2020</p>
            </div>
          </li>
           <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Schooling</h3>
              <p>
                <br />
Kendriya Vidyalaya Sangathan
              </p>
              <p className={styles.yearss}>2003-2015</p>
            </div>
          </li>

        </ul>
      </div>

    
    </section>
  );
};
