import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Priyanka Rani Dora</h2>
        <p className={styles.description}>
I'm an IT enthusiast and seasoned MERN stack developer, with a flair for creativity and a passion for learning. As an adept illustrator, I merge my technical expertise with artistic vision to craft captivating digital experiences that seamlessly blend form and function.</p>
        <a href="mailto:prdora97@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      

    </section>

    
  );
};
