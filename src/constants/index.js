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
            'Working with Kevin was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Kevin’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Kevin. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
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
        title: 'Project Management Dashboard',
        desc:
            'Developed a fullstack project management dashboard with a Next.js frontend and RESTful APIs deployed on AWS. Implemented authentication and role-based access, enabled real-time task tracking and collaboration, and designed a scalable cloud architecture for reliable performance.',
        subdesc:
            'Built a fullstack project management tool using Next.js and REST APIs on AWS. Deployed a secure architecture with Cognito authentication, RDS (PostgreSQL) storage, and cloud hosting to support real-time collaboration, scalability, and high availability.',
        href: 'https://github.com/kevinp927?tab=repositories',

        // If you have a better image later, swap this.
        // Using an existing project image so nothing breaks:
        texture: '/assets/ProjectDashboard.png',
        logo: '/assets/projectmanagement.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight1.png',

        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/react.svg', // placeholder icon (swap if you add nextjs.png later)
            },
            {
                id: 2,
                name: 'AWS (EC2/RDS/Cognito)',
                path: '/assets/react.svg', // placeholder icon (swap if you add aws.png later)
            },
        ],
    },

    // ✅ NEW #2 — StockPro (from resume screenshot)
    {
        title: 'StockPro',
        desc:
            'Engineered a stock trend prediction web app using machine learning and historical market data. Built and evaluated models to improve prediction quality, and developed an interactive React dashboard that visualizes trends and insights in real time.',
        subdesc:
            'Created a full-stack ML-powered stock forecasting app with a Django backend and React frontend. Implemented data preprocessing and feature extraction, integrated real-time financial data APIs, and delivered an interactive UI for trend analysis and predictive insights.',
        href: 'https://github.com/kevinp927?tab=repositories',

        // Reusing an existing image so it works immediately (swap later if you add a stock.png)
        texture: '/assets/StockPro.png',
        logo: '/assets/stock.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',

        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 2,
                name: 'Machine Learning',
                path: '/assets/scikit.png',
            },
            {
                id: 3,
                name: 'React',
                path: '/assets/react.svg',
            },
        ],
    },
    {
        title: 'NFL Match Predictor',
        desc: 'I performed data preprocessing and feature engineering on historical NFL match data using pandas, preparing it for modeling. I developed and trained a RandomForestClassifier with Scikit-learn to predict match outcomes, optimizing parameters for improved accuracy and evaluating performance through accuracy and precision metrics.',
        subdesc:
            'Data preprocessing and feature engineering were conducted on historical NFL match data using pandas to prepare the dataset for modeling. A RandomForestClassifier was developed and trained with Scikit-learn to predict match outcomes, with parameter optimization and evaluation based on accuracy and precision metrics.',
        href: 'https://github.com/kevinp927?tab=repositories',
        // texture: '/textures/project/project1.mp4',
        texture: '/assets/nfl.png',
        logo: '/assets/nfllogo.png',
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
                path: '/assets/python.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/scikit.png',
            },
            // {
            //     id: 3,
            //     name: 'TypeScript',
            //     path: '/assets/typescript.png',
            // },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
    {
        title: 'File-Compressor',
        desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        subdesc:
            'A C++ hashmap data structure was developed with efficient collision handling and memory management to improve performance. Custom hashing and bitstream functions were implemented, and extensive testing validated performance, collision resolution, and memory optimization under various load conditions.',
        href: 'https://github.com/kevinp927?tab=repositories',
        // texture: '/textures/project/project2.mp4',
        texture: '/assets/file.png',
        logo: '/assets/filelogo.png',
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
                path: '/assets/c++.png',
            },
            // {
            //     id: 2,
            //     name: 'TailwindCSS',
            //     path: 'assets/tailwindcss.png',
            // },
            // {
            //     id: 3,
            //     name: 'TypeScript',
            //     path: '/assets/typescript.png',
            // },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
    {
        title: 'Three Card Poker',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
            'Core functionality for a 3-card poker game was implemented using OOP principles, including hand evaluation, betting mechanics, and game flow control for fair gameplay. A responsive user interface was designed with JavaFX, and backend logic was integrated with the frontend, with thorough testing for reliability and responsiveness.',
        href: 'https://github.com/kevinp927?tab=repositories',
        texture: '/assets/poker.png',
        // texture: '/textures/project/project3.mp4',
        logo: '/assets/pokerlogo.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/javaw.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/javafx.png',
            },
            // {
            //     id: 3,
            //     name: 'TypeScript',
            //     path: '/assets/typescript.png',
            // },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
    // {
    //     title: 'Horizon - Online Banking Platform',
    //     desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //     subdesc:
    //         'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //     href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //     texture: '/textures/project/project4.mp4',
    //     logo: '/assets/project-logo4.png',
    //     logoStyle: {
    //         backgroundColor: '#0E1F38',
    //         border: '0.2px solid #0E2D58',
    //         boxShadow: '0px 0px 60px 0px #2F67B64D',
    //     },
    //     spotlight: '/assets/spotlight4.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
    // {
    //     title: 'Imaginify - AI Photo Manipulation App',
    //     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //     subdesc:
    //         'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //     texture: '/textures/project/project5.mp4',
    //     logo: '/assets/project-logo5.png',
    //     logoStyle: {
    //         backgroundColor: '#1C1A43',
    //         border: '0.2px solid #252262',
    //         boxShadow: '0px 0px 60px 0px #635BFF4D',
    //     },
    //     spotlight: '/assets/spotlight5.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.15 : isMobile ? 0.18 : 0.22,
        deskPosition: isMobile ? [0, -1.5, 1.5] : [-1, 1.5, 1.5],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [12, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [11.5, 4, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-16, -10, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Fantasy Trading Room',
        pos: 'App Developer',
        duration: 'Jan 2024 -  Present',
        title: "Developed a mobile application for fftradingroom.com using React Native, featuring real-time sports news updates, comprehensive fantasy draft guides, and a mock draft simulator with real-time data integration to enhance user engagement. Designed an intuitive UI, conducted user testing, and iteratively improved the app for an optimal user experience.",
        icon: '/assets/ftr.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'University of Illinois',
        pos: 'Course Assistant',
        duration: 'Jan 2024 -  May 2024',
        title: "Assisted students in understanding Java programming concepts through homework support, project guidance, and constructive feedback on coding assignments. Facilitated study sessions and group discussions to foster collaboration and enhance student engagement with course content.",
        icon: '/assets/illini.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Illinois Business Consulting',
        pos: 'Senior Consultant - Mass Transit District',
        duration: '2023 - 2024',
        title: "Automated KPI tracking via data analysis, implementing software upgrades to improve reporting and saved 65k annually. Integrated data frameworks for real-time reporting, optimizing MTD's zero-emission and accessibility initiative",
        icon: '/assets/ibc.png',
        animation: 'salute',
    },
];