import React from 'react';
// In a real project, this would be in your App.js or App.jsx file.
// All components are included here for a single-file example.

// Mock Data - In a real application, this would come from a database or CMS.
const membersData = {
    violins: [
        { name: 'Carola Borriero', role: 'Concertmaster', instrument: 'Violin', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=CB' },
        { name: 'Anna Morris', role: 'Principal Second', instrument: 'Violin', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=AM' },
        { name: 'Srishti Ramakrishnan', role: 'Section', instrument: 'Violin', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=SR' },
        { name: 'Marzia Gollini', role: 'Section', instrument: 'Violin', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=MG' },
    ],
    violas: [
        { name: 'Saleem', role: 'Principal', instrument: 'Viola', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=SA' },
        { name: 'Huan Xu', role: 'Section', instrument: 'Viola', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=HX' },
    ],
    cellos: [
        { name: 'Lou Stiles', role: 'Principal', instrument: 'Cello', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=LS' },
        { name: 'Chloe Nguyen', role: 'Section', instrument: 'Cello', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=CN' },
    ],
    basses: [
        { name: 'Liam O\'Connell', role: 'Principal', instrument: 'Double Bass', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=LO' },
    ],
    flutes: [
        { name: 'Paolo Minhas', role: 'Principal', instrument: 'Flute', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=PM' },
        { name: 'Lauren Mooney', role: 'Principal', instrument: 'Flute', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=LM' },
    ],
    oboes: [
        { name: 'Caterina Lue', role: 'Principal', instrument: 'Oboe', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=CL' },
    ],
    clarinets: [
        { name: 'Katie Rawson', role: 'Principal', instrument: 'Double Bass', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=LO' },
    ],
    bassoons: [
        { name: 'Daniel Cook', role: 'Principal', instrument: 'Double Bass', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=DC' },
    ],
    horns: [
        { name: 'Han Khoo', role: 'Principal', instrument: 'Double Bass', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=LO' },
    ],
    percussion: [
        { name: 'Valerie', role: 'Principal', instrument: 'Double Bass', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=VP' },
    ],
    harp: [
        { name: 'The mythical harpist', role: 'Principal', instrument: 'Double Bass', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=LO' },
    ],
};

const repertoireData = [
    { composer: 'Wolfgang Amadeus Mozart', works: ['Symphony No. 29 in A Major, K. 201', 'Eine kleine Nachtmusik, K. 525'] },
    { composer: 'Johann Sebastian Bach', works: ['Brandenburg Concerto No. 3 in G Major, BWV 1048', 'Orchestral Suite No. 2 in B minor, BWV 1067'] },
    { composer: 'Benjamin Britten', works: ['Simple Symphony, Op. 4'] },
    { composer: 'Pyotr Ilyich Tchaikovsky', works: ['Serenade for Strings in C Major, Op. 48'] },
    { composer: 'Edward Elgar', works: ['Serenade for Strings in E minor, Op. 20'] },
];

const upcomingConcertsData = [
    { date: 'October 26, 2025', time: '7:30 PM', venue: 'St. Giles\' Cathedral', program: ['Mozart - Symphony No. 29', 'Britten - Simple Symphony'], tickets: true },
    { date: 'December 14, 2025', time: '4:00 PM', venue: 'The Queen\'s Hall', program: ['Bach - Brandenburg Concerto No. 3', 'Tchaikovsky - Serenade for Strings'], tickets: true },
];

const pastConcertsData = [
    { date: 'May 18, 2025', venue: 'Canongate Kirk', program: ['Elgar - Serenade for Strings', 'Vivaldi - The Four Seasons'] },
    { date: 'March 8, 2025', venue: 'Greyfriars Kirk', program: ['Grieg - Holberg Suite', 'Holst - St. Paul\'s Suite'] },
];

const sponsorsData = [
    { name: 'Harmony Music Foundation', logo: 'https://placehold.co/200x100/333/eab308?text=Harmony' },
    { name: 'The Royal Conservatoire', logo: 'https://placehold.co/200x100/333/eab308?text=Conservatoire' },
    { name: 'City Arts Council', logo: 'https://placehold.co/200x100/333/eab308?text=Arts+Council' },
    { name: 'Classical Notes Magazine', logo: 'https://placehold.co/200x100/333/eab308?text=Classical+Notes' },
];

const collaboratorsData = [
    { name: 'Maestro Alistair Finch', role: 'Guest Conductor', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=AF' },
    { name: 'Clara Beaumont', role: 'Guest Soloist, Piano', img: 'https://placehold.co/400x400/1a1a1a/eab308?text=CB' },
];


// Main Application Component
function App() {
    const [activeSection, setActiveSection] = React.useState('home');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const NavLink = ({ section, children }) => (
        <a
            href={`#${section}`}
            onClick={(e) => {
                e.preventDefault();
                setActiveSection(section);
                setIsMenuOpen(false);
            }}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection === section ? 'bg-amber-500 text-black' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
        >
            {children}
        </a>
    );

    const renderContent = () => {
        switch (activeSection) {
            case 'members': return <MembersSection />;
            case 'repertoire': return <RepertoireSection />;
            case 'concerts': return <ConcertsSection />;
            case 'sponsors': return <SponsorsSection />;
            case 'collaborators': return <CollaboratorsSection />;
            case 'home':
            default:
                return <HomeSection setActiveSection={setActiveSection} />;
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans">
            {/* Header */}
            <header className="bg-black bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-amber-500/10">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-amber-400 cursor-pointer" onClick={() => setActiveSection('home')}>
                            Edinburgh University Chamber Orchestra
                        </div>
                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-2">
                            <NavLink section="home">Home</NavLink>
                            <NavLink section="members">Members</NavLink>
                            <NavLink section="repertoire">Repertoire</NavLink>
                            <NavLink section="concerts">Concerts</NavLink>
                            <NavLink section="sponsors">Sponsors</NavLink>
                            <NavLink section="collaborators">Collaborators</NavLink>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                     {/* Mobile Nav */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 flex flex-col space-y-2">
                            <NavLink section="home">Home</NavLink>
                            <NavLink section="members">Members</NavLink>
                            <NavLink section="repertoire">Repertoire</NavLink>
                            <NavLink section="concerts">Concerts</NavLink>
                            <NavLink section="sponsors">Sponsors</NavLink>
                            <NavLink section="collaborators">Collaborators</NavLink>
                        </div>
                    )}
                </nav>
            </header>

            {/* Main Content */}
            <main>
                {renderContent()}
            </main>

            {/* Footer */}
            <footer className="bg-black mt-16 py-8">
                <div className="container mx-auto px-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Edinburgh University Chamber Orchestra. All Rights Reserved.</p>
                    <p className="text-sm mt-2">A passionate ensemble of student musicians.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                       {/* Add social links here */}
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Section Components
const Section = ({ title, children }) => (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-10">{title}</h2>
            {children}
        </div>
    </div>
);

const HomeSection = ({ setActiveSection }) => (
    <div className="relative h-[calc(100vh-68px)] flex items-center justify-center text-center px-4">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1588500217823-74902c63459c?q=80&w=2070&auto=format&fit=crop')"}}
        ></div>
        <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Experience the <span className="text-amber-400">Passion</span> of Music
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                A dynamic student-led ensemble dedicated to performing chamber music at the highest level.
            </p>
            <button
                onClick={() => setActiveSection('concerts')}
                className="mt-8 px-8 py-3 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transform hover:scale-105 transition-all duration-300"
            >
                View Upcoming Concerts
            </button>
        </div>
    </div>
);

const MembersSection = () => (
    <Section title="Our Musicians">
        {Object.entries(membersData).map(([section, members]) => (
            <div key={section} className="mb-12">
                <h3 className="text-2xl font-semibold capitalize text-center text-white mb-8 border-b-2 border-amber-500/30 pb-2 max-w-md mx-auto">{section}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {members.map(member => (
                        <div key={member.name} className="bg-gray-800 rounded-lg p-4 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                            <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700" />
                            <h4 className="font-bold text-lg text-amber-400">{member.name}</h4>
                            <p className="text-gray-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </Section>
);

const RepertoireSection = () => (
    <Section title="Our Repertoire">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {repertoireData.map(item => (
                <div key={item.composer} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-amber-400 mb-3">{item.composer}</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {item.works.map(work => <li key={work}>{work}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
);

const ConcertsSection = () => (
    <Section title="Concerts">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
                <h3 className="text-2xl font-semibold text-center text-white mb-8">Upcoming</h3>
                <div className="space-y-6">
                    {upcomingConcertsData.map(concert => (
                        <div key={concert.date} className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
                            <p className="font-bold text-lg">{concert.date} - {concert.time}</p>
                            <p className="text-amber-400">{concert.venue}</p>
                            <ul className="list-disc list-inside text-gray-300 mt-2 pl-2">
                                {concert.program.map(p => <li key={p}>{p}</li>)}
                            </ul>
                            {concert.tickets && <button className="mt-4 px-4 py-2 bg-amber-500 text-black font-semibold rounded-md hover:bg-amber-400 transition-colors">Buy Tickets</button>}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-center text-white mb-8">Past Performances</h3>
                 <div className="space-y-6">
                    {pastConcertsData.map(concert => (
                        <div key={concert.date} className="bg-gray-800 p-6 rounded-lg shadow-lg opacity-70">
                            <p className="font-bold text-lg">{concert.date}</p>
                            <p className="text-gray-400">{concert.venue}</p>
                            <p className="text-gray-400 mt-2">{concert.program.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

const SponsorsSection = () => (
    <Section title="Our Sponsors">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-12">
            We are deeply grateful for the generous support of our sponsors, who help make our music possible.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsorsData.map(sponsor => (
                <div key={sponsor.name} className="p-4 bg-gray-800 rounded-lg">
                    <img src={sponsor.logo} alt={sponsor.name} className="h-16 object-contain" />
                </div>
            ))}
        </div>
    </Section>
);

const CollaboratorsSection = () => (
    <Section title="Collaborators & Friends">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-12">
            We are proud to have worked with these incredible musicians and conductors.
        </p>
        <div className="flex justify-center flex-wrap gap-12">
            {collaboratorsData.map(person => (
                <div key={person.name} className="bg-gray-800 rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg w-64">
                    <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700" />
                    <h4 className="font-bold text-xl text-amber-400">{person.name}</h4>
                    <p className="text-gray-400">{person.role}</p>
                </div>
            ))}
        </div>
    </Section>
);

export default App;

