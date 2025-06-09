/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bhavika's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Bhavika Patel Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Bhavika Patel",
  logo_name: "BhavikaPatel",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "https://github.com/patelbhavika46",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/patelbhavika46",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bhavika30/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:bhavika.patel3005@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building secure and scalable web applications using Symfony, Laravel, and Yii",
        "⚡ Developing interactive and responsive UIs using Javascript, React with TypeScript",
        "⚡ Designing optimized relational schemas in MySQL, MariaDB, and PostgreSQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "Symfony",
          fontAwesomeClassname: "simple-icons:symfony",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Gujrat Technologies University, Ahmedabad.",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "gtu_logo.png",
      alt_name: "GTU",
      duration: "2009 - 2013",
      descriptions: [],
      website_link: "https://www.gtu.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: " Understanding TypeScript",
      subtitle: "- Maximilian Schwarzmüller",
      logo_path: "ts_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-be7c6e33-a35c-4b56-ad5c-9075beb9d409",
      alt_name: "Udemy",
      color_code: "#60BEDD",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Fullstack Developer & Team Lead. I specialize in PHP (Symfony, Laravel), React, MySQL, REST APIs, and CI/CD workflows. I've led cross-functional teams, delivered high-impact projects, and mentored developers to grow strong technical teams.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Fullstack Developer & Team Lead",
          company: "Halight Inc.",
          company_url: "https://halight.com/",
          logo_path: "halight_logo.jpg",
          duration: "Nov 2018 - Apr 2024",
          location: "Windsor, ON, Canada",
          description:
            "I have extensive experience developing and enhancing Learning Management Systems (LMS) using PHP (Symfony) and modern JavaScript frameworks like React.js and TypeScript. My work involved building scalable, reusable frontend components, backend APIs, cron scripts, and internal admin tools, significantly improving system performance and user experience. I regularly contributed to product planning (Product Version Increments), created technical documentation in Confluence, and ensured clean, maintainable code through thorough code reviews and pull request evaluations.",
          color: "#0879bf",
        },
        {
          title: "Senior Software Developer",
          company: "Ecosmob Technologies Pvt Ltd.",
          company_url: "https://www.ecosmob.com/",
          logo_path: "ecosmob_logo.jpg",
          duration: "Dec 2013 - Sept 2018",
          location: "Ahmedabad, GJ, India",
          description:
            "With a strong foundation in full-stack development, I progressed from a junior developer to a Senior Software Developer in a service-based company, contributing to a wide range of high-impact projects. I led the development of VoIP, SMS, and text-to-speech calling solutions, while also building and maintaining scalable backend systems using PHP frameworks like Laravel, Symfony, Yii, and Phalcon, as well as Golang and WebRTC. My expertise in MySQL and MongoDB allowed me to optimize large-scale databases for performance and efficiency. I played a key role in B2B eCommerce platform development, system integrations, and legacy migrations, while consistently collaborating with cross-functional teams to meet tight deadlines. My work has been enhanced through tools like JIRA and Zoho for agile project management, and I’m experienced in LAMP stack deployment on Linux-based systems.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Trainee Engineer",
          company: "Ecosmob Technologies Pvt Ltd.",
          company_url: "https://www.ecosmob.com/",
          logo_path: "ecosmob_logo.jpg",
          duration: "July 2013 - Nov 2013",
          location: "Ahmedabad, GJ, India",
          description:
            "Worked on many CMS like Wordpress, Joomla, Drupal. and created custom themes and plugins in wordpress.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_bhavika.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
