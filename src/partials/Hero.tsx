import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';
import React from 'react';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Ryan</GradientText> 👋
        </>
      }
      description={
        <>
          I'm an{' '}
          <a className="text-cyan-400 hover:underline" href="/engineer">
            Engineer
          </a>{' '}
          , a{' '}
          <a className="text-cyan-400 hover:underline" href="/data-scientist">
            Data Scientist
          </a>{' '}
          , and an aspiring good person. 
          
          This is a great place to see what I've been up to and to get in touch with me.
        </>
      }
      avatar={
        <img
          className="w-70 h-80"
          src="/assets/images/peeps-avatar-alpha.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/smileshey">
            <HeroSocial
              src="/assets/images/icons8-github-94.png"
              alt="Github icon"
            />
          </a>
          <a href="https://www.instagram.com/ryansrigamorole/">
            <HeroSocial src="/assets/images/instagram.png" alt="Insta icon" />
          </a>
          <a href="https://www.linkedin.com/in/ryan-virgin-5a7235261/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://docs.google.com/spreadsheets/d/1ut0FfFLS_xxE-d72RXnXxO4WCS_USF856n5LBH8zUGc/edit?usp=sharing">
            <HeroSocial
              src="/assets/images/notebook-dynamic-gradient.png"
              alt="Reading List icon"
            />
          </a>
          <a href="https://www.statshunters.com/share/215e24bf807e">
            <HeroSocial
              src="/assets/images/strava.png"
              alt="Running icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };