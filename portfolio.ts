import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Bhavika Patel",
  title: "Hi all, I'm Bhavika",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with PHP, Symfony, Laravel, Yii, Javascript, React.js and Typescript. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "patelbhavika46",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:bhavika.patel3005@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhavika30",
  github: "https://github.com/patelbhavika46",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js and Vue.js"),
        emoji("⚡ Building scalable application using Symfony and Laravel"),
        emoji("⚡ Building RESTful APIs in Symfony & Laravel REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        // {
        //   skillName: "Typescript",
        //   iconifyTag: "vscode-icons:file-type-django",
        // },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        // {
        //   skillName: "Vuejs",
        //   iconifyTag: "vscode-icons:file-type-light-vue",
        // },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Mysql",
          iconifyTag: "logos:mysql-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend / Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Gujarat Technological university",
    subHeader: "Bachelor of Computer Engineering",
    duration: "July 2009 - May 2013",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior Software Developer",
    company: "Ecosmob Technologies Pvt Ltd.",
    companyLogo: "/img/icons/common/ecosmob_logo.jpg",
    date: "July 2013 - Sept 2018",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Full Stack Developer",
    company: "Halight Inc.",
    companyLogo: "/img/icons/common/halight_logo.jpg",
    date: "Nov 2018 - April 2024",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  }
];

export const projects: ProjectType[] = [
  {
    name: "Call Center",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Cosmo PBX",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    // link: "https://gibeo.io/",
  },
  {
    name: "MultiSend",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    // link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "RetailSwitch",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    // link: "https://hooliganculture.com/",
  },
  {
    name: "Event Management System",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    // link: "https://hooliganculture.com/",
  },
  {
    name: "Learning Management System",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    // link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Akshay Shah",
    role: "Sr. Software Developer at Ecosmob Technologies Pvt Ltd.",
    feedback:
      "Bhavika stands out as an exceptional leader in the technical realm. Her ability to lead and train teams is remarkable, showcasing not just her knowledge but also her commitment to collective growth. Bhavika possesses a rare talent for resolving complex issues with ease and efficiency. Her skills extend beyond technical expertise, as she masterfully manages the delicate balance between client needs, company goals, and team dynamics. She is one of the few who skillfully navigates challenges with a solution-oriented approach. Bhavika is truly a valuable asset in any technical environment.",
  },
  {
    name: "Dhruten Dhanani",
    role: "Sr. Software Developer at Ecosmob Technologies Pvt Ltd.",
    feedback:
      "Bhavika is extraordinary mixture of talent and responsibility with having highly effective and efficient work ethics. I had seen her smooth transition from Trainee Engineer to Sr. Developer in our organization while working with her since last 5 years. It was always pleasure to work with her whether it be in same or project or in different ones, she is always ready help and solved numerous crucial issues on the floor. Apart from development she is flawless in managing big projects and sub-ordinates simultaneously. Moreover many of the clients had admired her for to the mark quality and in-time deliverance. Most prominent aspect of her is to deal with stressed situations in almost unmoved behaviour, she act very responsibly all the time. Everyone wanted to work with her in the company premises as she believes in continuous learning and improvement. Whoever had worked with her is having better career growth throughout her presence. Any employer can be fully dependent on her about given work and forget the rest, she will deliver for sure. She is kind of rare personality that's why any company would want her in their work force.",
  },
  {
    name: "Foram Parikh",
    role: "Team Lead at Ecosmob Technologies Pvt Ltd.",
    feedback:
      "She sounds very good technically. She is always ready to adapt new technology and very determined to work. She is always ready to support other in a team.she works with dedicaton and quality.very good team member and problem solver.Goes extra mile whenever needed in any project.she have good leadership qualities.I highly recommend her and best wishes for the future!",
  },
  {
    name: "Jankit Shah",
    role: "Sr Project Manager at Ecosmob Technologies Pvt Ltd.",
    feedback:
      "Bhavika is having god gift to learn new technologies faster and good analysis, research skills. These helps her to meet all project's requirement and achieve results. She is very calm, solution oriented and self motivated. Quality is always one of the best. She has worked with me for almost a year and I am always happy with her project's outcome. Best of luck and keep up good work always !!",
  },
  {
    name: "Jay Raval",
    role: "Sr Software Developer at Ecosmob Technologies Pvt Ltd.",
    feedback:
      "Working with Bhavika, I found her a very good skilled IT professional. She has very sound knowledge of current web development technologies and language. She is a very good and quick learner. Has an attitude of never give up. She is a very good team member and a kind leader. Her analytical skill gives advantage over different client communication and requirement analysis.She worked on several VoIP Projects as well. She is good at all latest web development technologies and various frameworks. A good human being and a skilled professional.",
  },
  {
    name: "Alap Shah",
    role: "Team Lead at Ecosmob Technologies Pvt Ltd.",
    feedback:
      "She is a smart professional, very focus, target oriented person and quick learner in any technology domain. She's a true asset for any organization as she can able to manage projects by single handed like a wonder woman with a WIN WIN attitude.I wish her all the good lucks in her current and future endeavors.",
  },
  {
    name: "Ghanshyam Katriya",
    role: "Sr Software Developer at Ecosmob Technologies Pvt Ltd.",
    feedback:
      "It was a pleasure of working with Bhavika for more than 2 years. During this time, we worked together on multiple projects based on PHP technology (Yii Framework). She is a person with a strong ownership for results all the time. She is creative, energetic, solutions oriented and highly motivated with great communication skills. She is an asset to any company that she’s with.",
  },
  {
    name: "Twisha Mankad",
    role: "Sr Software Developer at Ecosmob Technologies Pvt Ltd.",
    feedback:
      "Bhavika is a detail-oriented and competent developer. She meets challenges head on and completes even the toughest of tasks in a timely manner. Not only are her skills valuable to any team she is also a nice and warm person to have around. She is helpful and always eager to learn more. I truly believe Bhavika would be a great addition to any team. ",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Bhavika Patel",
  description: greetings.description,
  author: "Bhavika Patel",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://patelbhavika46.github.io",
  keywords: [
    "Bhavika",
    "Bhavika Patel",
    // "@patelbhavika46",
    // "patelbhavika46",
    "Portfolio",
    "Bhavika Portfolio ",
    "Bhavika Patel Portfolio",
  ],
};
