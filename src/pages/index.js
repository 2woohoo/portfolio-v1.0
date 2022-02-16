import React from "react";
import {
  // AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Ellie W Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="about" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        {/* <AboutSection sectionId="about" heading="About Portfolio Minimal" /> */}
        <InterestsSection sectionId="stacks" heading="Stacks" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="contacts" heading="Contact" />
      </Page>
    </>
  );
}
