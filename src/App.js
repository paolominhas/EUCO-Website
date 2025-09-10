import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header'; // Assuming you've moved Header to its own file
import Footer from './components/Footer'; // And Footer too
import './App.css';


// Import your new page components
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

// ... import all other pages

// This component ensures the Header and Footer are on every page
const PageLayout = () => (
  <>
    <Header />
    <Outlet /> {/* This is where the specific page component will be rendered */}
    <Footer />
  </>
);

// This helper component ensures you scroll to the top on every page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* The Education Hub has its own unique layout (Header only) */}
          <Route path="/education" element={<EducationLayout />}>
            <Route index element={<EducationHub />} /> {/* The page at /education */}
            <Route path="composers" element={<ComposersPage />} /> {/* The page at /education/composers */}
            <Route path="articles" element={<ArticlesPage />} /> {/* The page at /education/articles */}
            <Route path="programme-notes" element={<ProgrammeNotesPage />} /> {/* The page at /education/programme-notes */}
            <Route path="learn" element={<LearnPage />} /> {/* The page at /education/learn */}
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
          <Route path="/contact-us/faq" element={<FAQ />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/support-us/donate" element={<Donate />} />
          <Route path="/support-us/sponsors" element={<OurPartners />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;