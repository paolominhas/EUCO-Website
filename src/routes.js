import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import the path data from our new file
import { routePaths } from './route-paths';

// The Page Components
import About from './pages/About';
import Auditions from './pages/Auditions';
import ConcertoCompetition from './pages/ConcertoCompetition';
import Concerts from './pages/Concerts';
import Conductors from './pages/Conductors';
import ContactUs from './pages/ContactUs';
import ContactUsDirectly from './pages/ContactUsDirectly';
import Donate from './pages/Donate';
import EducationHub from './pages/education/EducationHub';
import EducationLayout from './components/EducationLayout';
import Events from './pages/Events';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Opera from './pages/Opera';
import OurPartners from './pages/OurPartners';
import OurStory from './pages/OurStory';
import Outreach from './pages/Outreach';
import Performances from './pages/Performances';
import SupportUs from './pages/SupportUs';
import ComposersPage from './pages/education/ComposersPage';
import ArticlesPage from './pages/education/ArticlesPage';
import LearnPage from './pages/education/LearnPage';
import ProgrammeNotesPage from './pages/education/ProgrammeNotes';
import PageLayout from './components/PageLayout'; // Assuming you have a PageLayout component

const AppRoutes = () => (
  <Routes>
    {/* The Education Hub has its own unique layout (Header only) */}
    <Route path="/education" element={<EducationLayout />}>
      <Route index element={<EducationHub />} />
      <Route path="composers" element={<ComposersPage />} />
      <Route path="articles" element={<ArticlesPage />} />
      <Route path="programme-notes" element={<ProgrammeNotesPage />} />
      <Route path="learn" element={<LearnPage />} />
    </Route>

    {/* All other pages use the main layout with Header and Footer */}
    <Route element={<PageLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/our-story" element={<OurStory />} />
      <Route path="/about/conductors" element={<Conductors />} />
      <Route path="/about/opera" element={<Opera />} />
      <Route path="/about/concerto-competition" element={<ConcertoCompetition />} />
      <Route path="/about/auditions" element={<Auditions />} />
      <Route path="/concerts" element={<Concerts />} />
      <Route path="/concerts/performances" element={<Performances />} />
      <Route path="/concerts/events" element={<Events />} />
      <Route path="/concerts/outreach" element={<Outreach />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/contact-us/faq" element={<FAQ />} />
      <Route path="/contact-us/direct" element={<ContactUsDirectly />} />
      <Route path="/support-us" element={<SupportUs />} />
      <Route path="/support-us/donate" element={<Donate />} />
      <Route path="/support-us/sponsors" element={<OurPartners />} />
    </Route>
  </Routes>
);

// We still export routePaths from here for convenience if other parts of the app use it
export { routePaths };

export default AppRoutes;