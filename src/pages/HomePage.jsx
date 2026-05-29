import React from 'react';
import HeroSection from './sections/HeroSection.jsx';
import SolutionsSection from './sections/SolutionsSection.jsx';
import CloudBankingSection from './sections/CloudBankingSection.jsx';
import DigitalBankingSection from './sections/DigitalBankingSection.jsx';
import AmlBankingSection from './sections/AmlBankingSection.jsx';
import NewSection from './sections/NewSection.jsx';
import FintechSection from './sections/FintechSection.jsx';
import CaseStudiesSection from './sections/CaseStudiesSection.jsx';
import PaperlessSection from './sections/PaperlessSection.jsx';
import Footer from '../components/layout/Footer.jsx';

/**
 * HomePage — assembles all page sections in order.
 *
 * Adding a new section = import it here and drop it in the <main>.
 * No other file needs to change.
 */
const HomePage = () => (
  <main>
    <HeroSection />
    <SolutionsSection />
    <CloudBankingSection />
    <DigitalBankingSection />
    <AmlBankingSection />
    <NewSection />
    <FintechSection />
    <CaseStudiesSection />
    <PaperlessSection />
    <Footer />
  </main>
);

export default HomePage;
