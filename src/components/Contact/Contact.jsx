import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <p id="textss" style={{ fontSize: '15px' }}>prdora97@gmail.com</p>
      </div>
      <ul className={styles.links}>

        <li className={styles.link}>
          
          <a href="mailto:prdora97@gmail.com" target="_blank"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
        </li>

        <li className={styles.link}>
         
          <a href="https://www.linkedin.com/in/priyanka-rani-dora/" target="_blank">
            <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          </a>
        </li>


        <li className={styles.link}>
         
          <a href="https://github.com/priyankadora20" target="_blank"> <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
        </li>

          <li className={styles.link}>
         
          <a href="https://www.instagram.com/doodlerdora" target="_blank"> <img src={getImageUrl("contact/instagramIcon.png")} alt="instagram icon" /></a>
        </li>
      </ul>
    </footer>
  );
};
