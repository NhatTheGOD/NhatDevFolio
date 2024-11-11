export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'FPTickets',
    desc: "Welcome to FPTickets, the ultimate online platform for movie lovers! Our website offers a seamless experience where users can create accounts, purchase tickets, and explore detailed movie information, including trailers, cast, and showtimes. Earn loyalty points with each ticket purchase and enjoy exclusive rewards through our membership program. For added convenience, choose from a variety of food combos to enhance your movie experience. Administrators have full control to add new movie listings, update schedules, and introduce exciting food combos. Enjoy a personalized, rewarding movie experience with us!",
    subdesc:
      '',
    href: 'https://github.com/NhatTheGOD/FPTICKETSMAIN2.0',
    texture: '/textures/project/FPTICKETS.mov',
    logo: '/assets/d.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'MUI',
        path: '/assets/MUI.png',
      },
    ],
  },
  {
    title: 'FPT Doc',
    desc: 'The Doctor and Patient Management website offers an efficient system for hospitals or clinics, enabling smooth interaction between doctors and patients. Patients can create accounts, search for doctors, book appointments, view doctor profiles, make payments, and track medical history. Doctors can manage their schedules, accept or decline appointments, set consultation times, and update patient information. Admins can manage users, schedules, and services while generating reports. This system streamlines the appointment process, saving time and enhancing healthcare service quality.',
    subdesc: "",
    href: 'https://github.com/kuro2307/SDN302_G6_FA24',
    texture: '/textures/project/FPTDOC.mov',
    logo: '/assets/FPTDOC.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Nodejs',
        path: 'assets/nodejs.jpg',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'ExpressJs',
        path: '/assets/express.png',
      },
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'FPT Software',
    pos: 'Intern Frontend Developer',
    duration: '2024',
    title: "Working at FPT Software allowed me to learn a lot and participate in the large-scale project, fptsoftware.com.",
    icon: '/assets/FSOFT.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'FPT University',
    pos: 'Sofware Engineer Major',
    duration: '2020 - now',
    title: "I switched to the field I love and have continued pursuing my passion as a programmer to this day.",
    icon: '/assets/FPTU.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'FPT University',
    pos: 'English Language Major',
    duration: '2019 - 2020',
    title: "With an English language major, I was able to learn many things, but it wasn’t my true passion, so I decided to stop.",
    icon: '/assets/FPTU.png',
    animation: 'salute',
  },
];
