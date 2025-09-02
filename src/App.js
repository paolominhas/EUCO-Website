
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*
import React, { useState, useEffect, useRef } from 'react';

// --- ICONS (using inline SVGs for portability) ---
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const MusicIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
    </svg>
);

const CalendarIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
        <line x1="16" x2="16" y1="2" y2="6"/>
        <line x1="8" x2="8" y1="2" y2="6"/>
        <line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
);

const UsersIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

// --- MOCK DATA ---
const membersData = {
  "First Violins": ["Eleanor Vance (Concertmaster)", "Leo Goldstein", "Clara Chen", "Samuel Rodriguez"],
  "Second Violins": ["Aisha Khan", "Benjamin Carter", "Sophia Dubois", "Noah Ito"],
  "Violas": ["Isabella Rossi (Principal)", "Henry Wei", "Mia Patel", "Oliver Schmidt"],
  "Cellos": ["Julian Al-Farsi (Principal)", "Grace O'Malley", "Daniel Kim", "Fatima Al-Jamil"],
  "Basses": ["Lucas Johansson (Principal)", "Chloe Garcia"],
};

const repertoireData = {
    "Baroque": [
        { title: "Brandenburg Concerto No. 3 in G Major, BWV 1048", composer: "J.S. Bach" },
        { title: "Concerto Grosso in D major, Op. 6, No. 4", composer: "Arcangelo Corelli" },
    ],
    "Classical": [
        { title: "Eine kleine Nachtmusik, K. 525", composer: "W.A. Mozart" },
        { title: "Symphony No. 45 in F-sharp minor, \"Farewell\"", composer: "Joseph Haydn" },
        { title: "Serenade for Strings in C major, Op. 48", composer: "Pyotr Ilyich Tchaikovsky" }
    ],
    "Romantic": [
        { title: "Adagio for Strings", composer: "Samuel Barber" },
        { title: "Holberg Suite, Op. 40", composer: "Edvard Grieg" },
    ],
    "Contemporary": [
        { title: "Shaker Loops", composer: "John Adams" },
        { title: "Fratres for string orchestra and percussion", composer: "Arvo Pärt" }
    ]
};

const concertsData = {
  upcoming: [
    { date: "October 25, 2025", time: "7:30 PM", venue: "St. Giles' Cathedral, Edinburgh", program: ["Mozart's Eine kleine Nachtmusik", "Grieg's Holberg Suite", "A new commission by a local student composer"], tickets: "available" },
    { date: "December 12, 2025", time: "8:00 PM", venue: "The Queen's Hall, Edinburgh", program: ["Corelli's Christmas Concerto", "Bach's Brandenburg Concerto No. 3", "Holiday Favorites"], tickets: "soon" },
  ],
  past: [
    { date: "May 15, 2025", venue: "Reid Concert Hall", program: ["Haydn's \"Farewell\" Symphony", "Barber's Adagio for Strings"] },
    { date: "March 2, 2025", venue: "Canongate Kirk", program: ["Tchaikovsky's Serenade for Strings"] },
    { date: "January 20, 2025", venue: "St Cecilia's Hall", program: ["An Evening of Baroque Music"] },
  ]
};

const friendsData = [
    { name: "Nicola Benedetti", instrument: "Violin", relationship: "Held a masterclass with our string sections in Spring 2025." },
    { name: "Sheku Kanneh-Mason", instrument: "Cello", relationship: "Performed as a guest soloist during our 2024 season finale." },
    { name: "James MacMillan", instrument: "Composer", relationship: "Mentored our students in a composition workshop." },
];

const sponsorsData = [
  { name: "Creative Scotland", logo: "https://placehold.co/200x100/1a202c/d4af37?text=Creative+Scotland" },
  { name: "The University of Edinburgh", logo: "https://placehold.co/200x100/1a202c/d4af37?text=UoE" },
  { name: "Royal Conservatoire of Scotland", logo: "https://placehold.co/200x100/1a202c/d4af37?text=RCS" },
  { name: "Local Music Shop", logo: "https://placehold.co/200x100/1a202c/d4af37?text=LMS" },
];

// --- Helper Components ---

const Section = ({ id, children, className = '' }) => (
    <section id={id} className={`w-full py-12 md:py-24 lg:py-32 ${className}`}>
        <div className="container px-4 md:px-6 mx-auto">{children}</div>
    </section>
);

const SectionTitle = ({ children }) => (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-golden-glow">{children}</h2>
        </div>
    </div>
);


// --- Page Section Components ---

// --- 3D Scene Component ---
const ThreeDScrollScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!window.THREE) return;
        const THREE = window.THREE;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x020c1b, 1);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);
        
        const violinGroup = new THREE.Group();

        const woodMaterial = new THREE.MeshStandardMaterial({ color: '#6F432A', roughness: 0.6, metalness: 0.3 });
        const darkWoodMaterial = new THREE.MeshStandardMaterial({ color: '#4A2B1A', roughness: 0.5, metalness: 0.1 });
        const blackMaterial = new THREE.MeshStandardMaterial({ color: '#1C1C1C', roughness: 0.4 });
        const stringMaterial = new THREE.MeshStandardMaterial({ color: '#E0E0E0', roughness: 0.2, metalness: 0.8 });

        const upperBody = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.5, 0.3), woodMaterial);
        upperBody.position.y = 1.0;
        const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.0, 0.3), woodMaterial);
        lowerBody.position.y = -1.0;
        const bodyWaist = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.3), woodMaterial);
        violinGroup.add(upperBody, lowerBody, bodyWaist);

        const neck = new THREE.Mesh(new THREE.BoxGeometry(0.4, 2, 0.3), darkWoodMaterial);
        neck.position.set(0, 2.5, 0);
        violinGroup.add(neck);

        const fingerboard = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2, 0.1), blackMaterial);
        fingerboard.position.set(0, 2.5, 0.2);
        violinGroup.add(fingerboard);
        
        const scroll = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.1, 16, 50), darkWoodMaterial);
        scroll.position.set(0, 3.7, 0);
        scroll.rotation.y = Math.PI / 2;
        violinGroup.add(scroll);
        
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 0.1), darkWoodMaterial);
        bridge.position.set(0, -0.2, 0.2);
        violinGroup.add(bridge);

        const tailpiece = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.1), blackMaterial);
        tailpiece.position.set(0, -1.8, 0.2);
        violinGroup.add(tailpiece);

        for (let i = 0; i < 4; i++) {
            const string = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 5.5, 8), stringMaterial);
            string.position.set(-0.15 + i * 0.1, 0.8, 0.25);
            violinGroup.add(string);
        }

        scene.add(violinGroup);
        violinGroup.position.y = -1;
        camera.position.z = 7;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const screenHeight = window.innerHeight > 0 ? window.innerHeight : 720;
            const rotation = (scrollY / screenHeight) * Math.PI * 2;
            violinGroup.rotation.y = rotation;
            violinGroup.rotation.x = rotation * 0.2;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className="absolute top-0 left-0 w-full h-screen" style={{zIndex: 0}} />;
};


const HeroSection = ({ threeReady }) => (
    <div className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden bg-navy-dark">
        {threeReady && <ThreeDScrollScene />}
        <div className="relative z-10 p-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-golden-glow" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                Chamber Orchestra
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                Passionate student musicians dedicated to the art of chamber music.
            </p>
            <a href="#concerts" className="mt-8 inline-block bg-golden-glow text-navy-blue font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105">
                View Upcoming Concerts
            </a>
        </div>
    </div>
);

const MembersSection = () => (
    <Section id="members" className="bg-navy-blue">
        <SectionTitle>Our Musicians</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(membersData).map(([section, names]) => (
                <div key={section} className="bg-navy-light p-6 rounded-lg shadow-lg border border-golden-glow/20 transition-all duration-300 hover:border-golden-glow/50 hover:shadow-golden-glow/10">
                    <h3 className="text-2xl font-semibold text-golden-glow mb-4">{section}</h3>
                    <ul className="space-y-2 text-gray-300">
                        {names.map(name => <li key={name} className="flex items-center"><span className="text-golden-glow mr-2">&#9833;</span>{name}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
);

const RepertoireSection = () => (
    <Section id="repertoire" className="bg-gray-100 dark:bg-navy-dark">
        <SectionTitle>Our Repertoire</SectionTitle>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {Object.entries(repertoireData).map(([era, pieces]) => (
                 <div key={era} className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-lg border border-gray-200 dark:border-golden-glow/20 transition-transform duration-300 hover:scale-105">
                    <h3 className="text-2xl font-semibold text-navy-blue dark:text-golden-glow mb-4 border-b-2 border-golden-glow pb-2">{era}</h3>
                    <ul className="space-y-3">
                        {pieces.map(piece => (
                            <li key={piece.title} className="text-gray-700 dark:text-gray-300">
                                <strong className="block text-navy-dark dark:text-white">{piece.title}</strong>
                                <span className="text-sm italic">{piece.composer}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
);

const ConcertsSection = () => (
  <Section id="concerts" className="bg-navy-blue">
    <SectionTitle>Concerts</SectionTitle>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {//Upcoming Concerts}
      <div>
        <h3 className="text-3xl font-bold text-center text-white mb-8">Upcoming Performances</h3>
        <div className="space-y-8">
          {concertsData.upcoming.map((concert, index) => (
            <div key={index} className="bg-navy-light p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-golden-glow/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-center">
                    <div className="text-3xl font-bold text-golden-glow">{new Date(concert.date).getDate()}</div>
                    <div className="text-sm uppercase text-gray-300">{new Date(concert.date).toLocaleString('default', { month: 'short' })}</div>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-lg text-white">{concert.venue}</p>
                  <p className="text-sm text-gray-400">{concert.time}</p>
                  <p className="mt-3 text-gray-300 text-sm"><strong>Program:</strong> {concert.program.join(', ')}</p>
                </div>
              </div>
               <div className="mt-4 text-right">
                {concert.tickets === 'available' ? (
                  <a href="#" className="bg-golden-glow text-navy-blue font-semibold py-2 px-4 rounded-md hover:bg-white transition-colors duration-300">Buy Tickets</a>
                ) : (
                  <span className="bg-gray-600 text-white font-semibold py-2 px-4 rounded-md cursor-not-allowed">Tickets Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {// Past Concerts}
      <div>
        <h3 className="text-3xl font-bold text-center text-white mb-8">Past Performances</h3>
        <div className="space-y-4">
          {concertsData.past.map((concert, index) => (
            <div key={index} className="bg-navy-light p-4 rounded-lg shadow-md opacity-80 hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold text-white">{concert.date} - <span className="text-gray-300">{concert.venue}</span></p>
              <p className="text-sm text-gray-400 italic">Featuring works like {concert.program.join(' & ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const FriendsSection = () => (
  <Section id="friends" className="bg-gray-100 dark:bg-navy-dark">
    <SectionTitle>Our Friends & Mentors</SectionTitle>
    <div className="max-w-4xl mx-auto space-y-8">
      {friendsData.map((friend, index) => (
        <div key={index} className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-lg flex items-center space-x-6 border-l-4 border-golden-glow">
          <div className="flex-shrink-0 w-16 h-16 bg-golden-glow/20 rounded-full flex items-center justify-center">
             <UsersIcon className="h-8 w-8 text-golden-glow"/>
          </div>
          <div>
            <h4 className="text-xl font-bold text-navy-blue dark:text-white">{friend.name}</h4>
            <p className="text-md text-golden-glow font-semibold">{friend.instrument}</p>
            <p className="mt-1 text-gray-600 dark:text-gray-300">{friend.relationship}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);


const SponsorsSection = () => (
    <Section id="sponsors" className="bg-navy-blue">
        <SectionTitle>Our Sponsors</SectionTitle>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {sponsorsData.map(sponsor => (
                <div key={sponsor.name} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <img src={sponsor.logo} alt={sponsor.name} className="h-12 lg:h-16 rounded-md"/>
                </div>
            ))}
        </div>
    </Section>
);

// --- MAIN APP COMPONENT ---

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [threeReady, setThreeReady] = useState(false);

    const navLinks = ["Home", "Members", "Repertoire", "Concerts", "Friends", "Sponsors"];
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const scriptId = 'three-js-script';
        if(document.getElementById(scriptId)){
            setThreeReady(true);
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.async = true;
        script.onload = () => setThreeReady(true);
        script.onerror = () => console.error('Three.js script failed to load.');
        document.body.appendChild(script);

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        } else if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };


    return (
        <div className="bg-navy-blue font-sans text-gray-300">
            <style>{`
                :root {
                    --navy-blue: #0a192f;
                    --navy-light: #172a45;
                    --navy-dark: #020c1b;
                    --golden-glow: #d4af37;
                }
                .bg-navy-blue { background-color: var(--navy-blue); }
                .bg-navy-light { background-color: var(--navy-light); }
                .bg-navy-dark { background-color: var(--navy-dark); }
                .text-golden-glow { color: var(--golden-glow); }
                .bg-golden-glow { background-color: var(--golden-glow); }
                .border-golden-glow { border-color: var(--golden-glow); }
                .shadow-golden-glow\\/10 { box-shadow: 0 0 15px rgba(212, 175, 55, 0.1); }
                .shadow-golden-glow\\/20 { box-shadow: 0 0 20px rgba(212, 175, 55, 0.2); }

                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
                
                html { scroll-behavior: smooth; }
            `}</style>
            
            {// Header }
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-navy-light shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-20">
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-bold text-golden-glow">
                        Chamber Orchestra
                    </a>
                    <nav className="hidden md:flex space-x-6">
                       {navLinks.map(link => (
                           <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => handleNavClick(e, link.toLowerCase())} className="text-gray-300 hover:text-golden-glow transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-golden-glow">
                               {link}
                           </a>
                       ))}
                    </nav>
                    <button className="md:hidden text-gray-300 hover:text-golden-glow" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <XIcon className="h-6 w-6"/> : <MenuIcon className="h-6 w-6"/>}
                    </button>
                </div>
                {// Mobile Menu }
                {isMenuOpen && (
                    <div className="md:hidden bg-navy-light py-4">
                        <nav className="flex flex-col items-center space-y-4">
                            {navLinks.map(link => (
                               <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => handleNavClick(e, link.toLowerCase())} className="text-gray-300 hover:text-golden-glow transition-colors duration-300 text-lg">
                                   {link}
                               </a>
                           ))}
                        </nav>
                    </div>
                )}
            </header>

            <main>
                <HeroSection threeReady={threeReady}/>
                <div id="home"></div> {// Anchor for Home }
                <MembersSection />
                <RepertoireSection />
                <ConcertsSection />
                <FriendsSection />
                <SponsorsSection />
            </main>

            {// Footer }
            <footer className="bg-navy-dark text-white py-12">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h3 className="text-2xl font-bold text-golden-glow">Chamber Orchestra</h3>
                    <p className="mt-2 text-gray-400">Excellence in student-led chamber music.</p>
                    <div className="mt-4 text-gray-400">
                        <p>Contact us: <a href="mailto:info@chamberorchestra.example" className="hover:text-golden-glow">info@chamberorchestra.example</a></p>
                    </div>
                    <div className="mt-6 flex justify-center space-x-6">
                        {// Add social media links here if available }
                    </div>
                    <p className="mt-8 text-sm text-gray-500">&copy; {new Date().getFullYear()} Chamber Orchestra. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
*/