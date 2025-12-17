import React from 'react';
import HeroSection from '../sections/HeroSection';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import ContactForm from '../sections/ContactForm';

export default function Home() {
  return (
    <>
      <section id="home"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><ContactForm /></section>
    </>
  );
}