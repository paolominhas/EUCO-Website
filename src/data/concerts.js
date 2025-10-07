/*

Here is the concert data including upcoming, chamber, and past concerts.
Each concert object includes:
- date: Date of the concert
- time: Time of the concert
- venue: Venue of the concert
- program: List of pieces to be performed
- image: URL to an image representing the concert
- tickets: Boolean indicating if tickets are available (for upcoming concerts)
- description: Brief description of the concert (for past concerts)
- programmeNotes: Detailed programme notes for the concert
- galleryFolder: Folder name for gallery images related to the concert
- videoUrl: Optional URL to a video recording of the concert (for past concerts)

All these components are reccomended to be included when adding items to the data arrays.
Just follow the same syntax rules and the concerts will automatically add to the website accordingly.

Any images should be placed in the src/assets/gallery folder!!!

*/

// Firstly you need a cover photo import up here:
import bruchImage from '../assets/gallery/March25/Bruch.jpg';
import beethoven2Image from '../assets/gallery/March25/Bruch.jpg';
import tchaikovsky5Image from '../assets/gallery/March25/Bruch.jpg';
import brahms1Image from '../assets/gallery/March25/Bruch.jpg';
import haydn88Image from '../assets/gallery/March25/Bruch.jpg';
import mendelssohn4Image from '../assets/gallery/Nov25/mendelssohn4.jpg';
import eroicaImage from '../assets/gallery/March25/Bruch.jpg';
import ravelintroImage from '../assets/gallery/ChamberConcerts/ravelintro.jpeg';
import masterpiecesImage from '../assets/gallery/ChamberConcerts/masterpieces.jpg';

// Just add yours in the exact same format and then below in the data arrays you can use the variable name to set the image for each concert.




const upcomingConcertsData = [
    { 
      title: 'Mendelssohn, Prokofiev & Brahms',
      date: 'November 28, 2025', 
      time: '7:30 PM', 
      venue: 'Reid Concert Hall', 
      program: ["Mendelssohn - Symphony No. 4 \"The Italian\"", "Prokofiev - Symphony No. 1", "Brahms - Schicksalslied (with the Edinburgh University Singers)"], 
      image: mendelssohn4Image, 
      tickets: true,
      programmeNotes: "A passionate evening exploring classical and early 20th-century masterpieces, featuring Mendelssohn's vibrant 'Italian' Symphony, Prokofiev's charming First, and Brahms' profound 'Schicksalslied'.",
      galleryFolder: 'Nov25' // Example: if you have a folder for this concert
    },
    { 
      title: 'Chiristmas Charity Concert',
      date: 'December to be confirmed soon', 
      time: '', 
      venue: '', 
      tickets: false,
      program: ['Christmas Concert (lots of fun music)'],
      image: bruchImage, // Placeholder image
      programmeNotes: "Join us for a festive celebration of seasonal favourites and orchestral delights, perfect for getting into the holiday spirit!",
      galleryFolder: 'Dec25' // Example
    },
];

const chamberConcertsData = [
    { 
      title: 'Chamber Music into the 20th Century',
      date: 'December 15, 2025', 
      time: '7:30 PM', 
      venue: 'Reid Concert Hall', 
      tickets: false,
      program: ['Ravel - Introduction and Allegro for Flute, Clarinet, Harp & Strings', 'Shostakovich - Piano Quintet in G minor Op. 57', 'Ravel - Ma Mere L\'Oye for Piano Duet', 'Mahler - Piano Quartet in A minor'],
      image: ravelintroImage, // Placeholder image
      programmeNotes: "An intimate evening of chamber masterpieces, showcasing the intricate beauty and emotional depth of Ravel, Shostakovich, and Mahler's chamber works.",
      galleryFolder: 'Dec15-2025' // Example
    },
    { 
      title: 'Strings and Friends: Masterpieces of the Chamber Repertoire',
      date: 'May 10, 2025', 
      time: '7:30 PM', 
      venue: 'St Cecilia\'s Hall', 
      tickets: false,
      program: ['Haydn - String Quartet Op. 76 No. 3 "Emperor"', 'Dvořák - Piano Quintet in A major Op. 81', 'Brahms - String Sextet No. 1 in B-flat major Op. 18'],
      image: masterpiecesImage, // Placeholder image
      programmeNotes: "Experience the elegance of Haydn, the romanticism of Dvořák, and the lush harmonies of Brahms in this exquisite chamber concert.",
      galleryFolder: 'May10-2025' // Example
    },
];

const pastConcertsData = [
    { 
        title: 'Mendelssohn & Bruch',
        date: 'March 21, 2025', 
        venue: 'Reid Concert Hall', 
        program: ['Mendelssohn - Symphony No. 3 (Scottish)', 'Bruch - Violin Concerto No. 1'], 
        description: 'A captivating performance featuring Mendelssohn\'s Scottish Symphony and Bruch\'s Violin Concerto.', 
        image: bruchImage, // Corrected path to be absolute from public folder
        programmeNotes: "An evening dedicated to the romantic landscapes of Scotland and the virtuosic Bruch Violin Concerto.",
        galleryFolder: 'March25', // Matches folder name in src/assets/gallery/March25
        videoUrl: 'https://www.youtube.com/watch?v=your-video-id' // Optional
    },
    
    { 
        title: 'Mozart & Beethoven',
        date: 'November 22, 2024', 
        venue: 'Reid Concert Hall', 
        program: ['Mozart - Symphony 31 "Paris"', 'Beethoven - Symphony 2'], 
        description: 'An exciting concert showcasing Mozart\'s "Paris" Symphony and Beethoven\'s Second Symphony.', 
        image: beethoven2Image,
        programmeNotes: "A classical journey featuring the vibrant Parisian spirit of Mozart and the early romantic brilliance of Beethoven.",
        galleryFolder: 'Nov22-2024' // Example: if you have a folder for this concert
    },
    
    { 
        title: 'Tchaikovsky & Rachmaninoff',
        date: 'May 4, 2024', 
        venue: 'St Cecilia\'s Hall', 
        program: ['Tchaikovsky - Symphony No. 5', 'Rachmaninoff - Piano Concerto No. 2'], 
        description: 'A thrilling concert featuring Tchaikovsky\'s Fifth Symphony and Rachmaninoff\'s Piano Concerto No. 2.', 
        image: tchaikovsky5Image,
        programmeNotes: "An unforgettable evening of passionate Russian romanticism with Tchaikovsky's Fifth and Rachmaninoff's iconic Piano Concerto.",
        galleryFolder: 'May04-2024' // Example
    },
    
    { 
        title: 'Brahms & Dvořák',
        date: 'March 2, 2024', 
        venue: 'Reid Concert Hall', 
        program: ['Brahms - Symphony No. 1', 'Dvořák - Cello Concerto'], 
        description: 'A powerful concert featuring Brahms\' Symphony No. 1 and Dvořák\'s Cello Concerto.', 
        image: brahms1Image,
        programmeNotes: "A magnificent programme featuring Brahms' monumental First Symphony and Dvořák's beloved Cello Concerto.",
        galleryFolder: 'Mar02-2024' // Example
    },
    
    { 
        title: 'Haydn & Schumann',
        date: 'November 24, 2023', 
        venue: 'Reid Concert Hall', 
        program: ['Haydn - Symphony No. 88', 'Schumann - Piano Concerto'], 
        description: 'A captivating concert showcasing Haydn\'s Symphony No. 88 and Schumann\'s Piano Concerto.', 
        image: haydn88Image,
        programmeNotes: "A charming blend of classical elegance with Haydn's Symphony No. 88 and the poetic beauty of Schumann's Piano Concerto.",
        galleryFolder: 'Nov24-2023' // Example
    },
    
    { 
        title: 'Mendelssohn & Bruch',
        date: 'May 5, 2023', 
        venue: 'St Cecilia\'s Hall', 
        program: ['Mendelssohn - Symphony No. 4 "Italian"', 'Bruch - Violin Concerto No. 1'], 
        description: 'A delightful concert featuring Mendelssohn\'s "Italian" Symphony and Bruch\'s Violin Concerto No. 1.', 
        image: bruchImage,
        programmeNotes: "A delightful journey through sun-drenched Italian landscapes and a virtuosic violin showcase.",
        galleryFolder: 'May05-2023' // Example
    },
    
    { 
        title: 'Mozart & Beethoven',
        date: 'March 3, 2023', 
        venue: 'Reid Concert Hall', 
        program: ['Mozart - Symphony No. 40', 'Beethoven - Symphony No. 3 "Eroica"'], 
        description: 'An exhilarating concert featuring Mozart\'s Symphony No. 40 and Beethoven\'s "Eroica" Symphony.', 
        image: eroicaImage,
        programmeNotes: "An exhilarating program featuring the intensity of Mozart's 40th and the heroic spirit of Beethoven's 'Eroica' Symphony.",
        galleryFolder: 'Mar03-2023' // Example
    },
];

export { upcomingConcertsData, chamberConcertsData, pastConcertsData };