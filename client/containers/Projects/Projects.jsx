import React from 'react'
import styles from './projects.module.css'
import { FaReact, FaDocker } from "react-icons/fa";
import CardComponent from '../../components/card/CardComponent';
import {
  SiRedux,
  SiKubernetes,
  SiTypescript,
  SiJavascript,
  SiApachekafka,
  SiGoland,
  SiNginx,
  SiPostgresql,
  SiSocketdotio,
  SiDigitalocean,
  SiYoutube,
  SiNextdotjs,
  SiCss3
} from 'react-icons/si';

export default function Projects() {
  return (
    <main className={styles['grid']}>
      <CardComponent newStyles={`${styles['card']} ${styles['item1']}`}>
        <h1>Personal Projects</h1>
        <p>Done with love, dedication and</p>
      </CardComponent>
      <CardComponent newStyles={`${styles['card']} ${styles['item2']}`}>
      <div className={styles['card__header-container']}>
          <h1>Path Finder</h1>
          <div />
          <SiYoutube size='2rem' className={styles['card__youtube-log']} />
        </div>
        <p className={styles['card__text-p']}>
          A full-stack web app with the primary focus on improving university
          experiences for new and existing university students. Implemented
          within microservices approach and transactional outbox pattern
        </p>
        <div className={styles['container__tech-stack']}>
          <h3>Tech stack</h3>
          <div className={styles['tech-stack']}>
            <SiTypescript size='2rem' />
            <SiNextdotjs size='2rem' />
            <SiCss3 size='2rem' />
            <SiRedux size='2rem' />
          </div>
        </div>
      </CardComponent>
      <CardComponent newStyles={`${styles['card']} ${styles['item3']}`}>
        <div className={styles['card__header-container']}>
          <h1>Unifyi</h1>
          <div />
          <SiYoutube size='2rem' className={styles['card__youtube-log']} />
        </div>
        <p className={styles['card__text-p']}>
          A full-stack web app with the primary focus on improving university
          experiences for new and existing university students. Implemented
          within microservices approach and transactional outbox pattern
        </p>
        <div className={styles['container__tech-stack']}>
          <h3>Frontend stack</h3>
          <div className={styles['tech-stack']}>
            <SiJavascript size='2rem' />
            <SiTypescript size='2rem' />
            <FaReact size='2rem' />
            <SiRedux size='2rem' />
            <FaReact size='2rem' />
            <SiRedux size='2rem' />
          </div>
        </div>
        <div className={styles['container__tech-stack']}>
          <h3>Backend stack</h3>
          <div className={styles['tech-stack']}>
            <SiGoland size='2rem' />
            <SiPostgresql size='2rem' />
            <SiNginx size='2rem' />
            <SiSocketdotio size='2rem' />
            <SiApachekafka size='2rem' />
          </div>
        </div>
        <div className={styles['container__tech-stack']}>
          <h3>DevOps Stack</h3>
          <div className={styles['tech-stack']}>
            <FaDocker size='2rem' />
            <SiKubernetes size='2rem' />
            <SiDigitalocean size='2rem' />
          </div>
        </div>
      </CardComponent>
      <CardComponent newStyles={`${styles['card']} ${styles['item4']}`}>
        <h2>because interactions make it more fun</h2>
      </CardComponent>
      <CardComponent newStyles={`${styles['card']} ${styles['item5']}`}></CardComponent>
    </main>
  );
}