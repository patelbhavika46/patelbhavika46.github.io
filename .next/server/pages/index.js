"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./portfolio.ts + 1 modules
var portfolio = __webpack_require__(805);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/SEO.tsx




function SEO() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: portfolio/* seoData.author */.hD.author
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: portfolio/* seoData.keywords.join */.hD.keywords.join(", ")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "Index"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "./favicon.png"
            })
        ]
    });
}
// SEO.prototype = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     keywords: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };
/* harmony default export */ const components_SEO = (SEO);

;// CONCATENATED MODULE: ./pages/index.tsx


const Navigation = dynamic_default()(()=>__webpack_require__.e(/* import() */ 581).then(__webpack_require__.bind(__webpack_require__, 581)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/Navigation"
        ]
    }
});
const Greetings = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(471)]).then(__webpack_require__.bind(__webpack_require__, 471)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Greetings"
        ]
    }
});
const Skills = dynamic_default()(()=>__webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(__webpack_require__, 7)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Skills"
        ]
    }
});
const Proficiency = dynamic_default()(()=>__webpack_require__.e(/* import() */ 440).then(__webpack_require__.bind(__webpack_require__, 440)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Proficiency"
        ]
    }
});
const Education = dynamic_default()(()=>__webpack_require__.e(/* import() */ 380).then(__webpack_require__.bind(__webpack_require__, 380)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Education"
        ]
    }
});
const Experience = dynamic_default()(()=>__webpack_require__.e(/* import() */ 949).then(__webpack_require__.bind(__webpack_require__, 949)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Experience"
        ]
    }
});
const Projects = dynamic_default()(()=>__webpack_require__.e(/* import() */ 668).then(__webpack_require__.bind(__webpack_require__, 668)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Projects"
        ]
    }
});
const Feedbacks = dynamic_default()(()=>__webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(__webpack_require__, 85)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Feedbacks"
        ]
    }
});
const GithubProfileCard = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 77)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/GithubProfileCard"
        ]
    }
});


// Disable SSR for Lottie component
const Lottie = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "react-lottie"
        ]
    },
    ssr: false
});
function Home({ githubProfileData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_SEO, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Greetings, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Proficiency, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Education, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Feedbacks, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Projects, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(GithubProfileCard, {
                ...githubProfileData
            })
        ]
    });
}
// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };
async function getStaticProps() {
    const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then((res)=>res.json());
    return {
        props: {
            githubProfileData
        }
    };
}


/***/ }),

/***/ 805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bv": () => (/* binding */ SkillBars),
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "KK": () => (/* binding */ feedbacks),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "q": () => (/* binding */ projects),
  "hD": () => (/* binding */ seoData),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: contact

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.ts

const greetings = {
    name: "Bhavika Patel",
    title: "Hi all, I'm Bhavika",
    description: "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with PHP, Symfony, Laravel, Yii, Javascript, React.js and Typescript. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
    resumeLink: "#"
};
const openSource = {
    githubUserName: "patelbhavika46"
};
const contact = {};
const socialLinks = {
    email: "mailto:bhavika.patel3005@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhavika30",
    github: "https://github.com/patelbhavika46"
};
const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: "/lottie/skills/fullstack.json",
            skills: [
                external_react_easy_emoji_default()("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js and Vue.js"),
                external_react_easy_emoji_default()("⚡ Building scalable application using Symfony and Laravel"),
                external_react_easy_emoji_default()("⚡ Building RESTful APIs in Symfony & Laravel REST Framework")
            ],
            softwareSkills: [
                {
                    skillName: "PHP",
                    iconifyTag: "logos:php"
                },
                // {
                //   skillName: "Typescript",
                //   iconifyTag: "vscode-icons:file-type-django",
                // },
                {
                    skillName: "JavaScript",
                    iconifyTag: "logos:javascript"
                },
                {
                    skillName: "Reactjs",
                    iconifyTag: "vscode-icons:file-type-reactjs"
                },
                // {
                //   skillName: "Vuejs",
                //   iconifyTag: "vscode-icons:file-type-light-vue",
                // },
                {
                    skillName: "AWS",
                    iconifyTag: "logos:aws"
                },
                {
                    skillName: "Mysql",
                    iconifyTag: "logos:mysql-icon"
                },
                {
                    skillName: "Github",
                    iconifyTag: "akar-icons:github-fill"
                },
                {
                    skillName: "Docker",
                    iconifyTag: "logos:docker-icon"
                }
            ]
        }
    ]
};
const SkillBars = [
    {
        Stack: "Frontend / Design",
        progressPercentage: "85"
    },
    {
        Stack: "Backend",
        progressPercentage: "90"
    },
    {
        Stack: "Programming",
        progressPercentage: "95"
    }
];
const educationInfo = [
    {
        schoolName: "Gujarat Technological university",
        subHeader: "Bachelor of Computer Engineering",
        duration: "July 2009 - May 2013",
        desc: "",
        grade: "",
        descBullets: []
    }
];
const experience = [
    {
        role: "Senior Software Developer",
        company: "Ecosmob Technologies Pvt Ltd.",
        companyLogo: "/img/icons/common/ecosmob_logo.jpg",
        date: "July 2013 - Sept 2018",
        desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation."
    },
    {
        role: "Full Stack Developer",
        company: "Halight Inc.",
        companyLogo: "/img/icons/common/halight_logo.jpg",
        date: "Nov 2018 - April 2024",
        desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface."
    }
];
const projects = [
    {
        name: "Call Center",
        desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer."
    },
    {
        name: "Cosmo PBX",
        desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions."
    },
    {
        name: "MultiSend",
        desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need."
    },
    {
        name: "RetailSwitch",
        desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence."
    },
    {
        name: "Event Management System",
        desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence."
    },
    {
        name: "Learning Management System",
        desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence."
    }
];
const feedbacks = [
    {
        name: "Akshay Shah",
        role: "Sr. Software Developer at Ecosmob Technologies Pvt Ltd.",
        feedback: "Bhavika stands out as an exceptional leader in the technical realm. Her ability to lead and train teams is remarkable, showcasing not just her knowledge but also her commitment to collective growth. Bhavika possesses a rare talent for resolving complex issues with ease and efficiency. Her skills extend beyond technical expertise, as she masterfully manages the delicate balance between client needs, company goals, and team dynamics. She is one of the few who skillfully navigates challenges with a solution-oriented approach. Bhavika is truly a valuable asset in any technical environment."
    },
    {
        name: "Dhruten Dhanani",
        role: "Sr. Software Developer at Ecosmob Technologies Pvt Ltd.",
        feedback: "Bhavika is extraordinary mixture of talent and responsibility with having highly effective and efficient work ethics. I had seen her smooth transition from Trainee Engineer to Sr. Developer in our organization while working with her since last 5 years. It was always pleasure to work with her whether it be in same or project or in different ones, she is always ready help and solved numerous crucial issues on the floor. Apart from development she is flawless in managing big projects and sub-ordinates simultaneously. Moreover many of the clients had admired her for to the mark quality and in-time deliverance. Most prominent aspect of her is to deal with stressed situations in almost unmoved behaviour, she act very responsibly all the time. Everyone wanted to work with her in the company premises as she believes in continuous learning and improvement. Whoever had worked with her is having better career growth throughout her presence. Any employer can be fully dependent on her about given work and forget the rest, she will deliver for sure. She is kind of rare personality that's why any company would want her in their work force."
    },
    {
        name: "Foram Parikh",
        role: "Team Lead at Ecosmob Technologies Pvt Ltd.",
        feedback: "She sounds very good technically. She is always ready to adapt new technology and very determined to work. She is always ready to support other in a team.she works with dedicaton and quality.very good team member and problem solver.Goes extra mile whenever needed in any project.she have good leadership qualities.I highly recommend her and best wishes for the future!"
    },
    {
        name: "Jankit Shah",
        role: "Sr Project Manager at Ecosmob Technologies Pvt Ltd.",
        feedback: "Bhavika is having god gift to learn new technologies faster and good analysis, research skills. These helps her to meet all project's requirement and achieve results. She is very calm, solution oriented and self motivated. Quality is always one of the best. She has worked with me for almost a year and I am always happy with her project's outcome. Best of luck and keep up good work always !!"
    },
    {
        name: "Jay Raval",
        role: "Sr Software Developer at Ecosmob Technologies Pvt Ltd.",
        feedback: "Working with Bhavika, I found her a very good skilled IT professional. She has very sound knowledge of current web development technologies and language. She is a very good and quick learner. Has an attitude of never give up. She is a very good team member and a kind leader. Her analytical skill gives advantage over different client communication and requirement analysis.She worked on several VoIP Projects as well. She is good at all latest web development technologies and various frameworks. A good human being and a skilled professional."
    },
    {
        name: "Alap Shah",
        role: "Team Lead at Ecosmob Technologies Pvt Ltd.",
        feedback: "She is a smart professional, very focus, target oriented person and quick learner in any technology domain. She's a true asset for any organization as she can able to manage projects by single handed like a wonder woman with a WIN WIN attitude.I wish her all the good lucks in her current and future endeavors."
    },
    {
        name: "Ghanshyam Katriya",
        role: "Sr Software Developer at Ecosmob Technologies Pvt Ltd.",
        feedback: "It was a pleasure of working with Bhavika for more than 2 years. During this time, we worked together on multiple projects based on PHP technology (Yii Framework). She is a person with a strong ownership for results all the time. She is creative, energetic, solutions oriented and highly motivated with great communication skills. She is an asset to any company that she’s with."
    },
    {
        name: "Twisha Mankad",
        role: "Sr Software Developer at Ecosmob Technologies Pvt Ltd.",
        feedback: "Bhavika is a detail-oriented and competent developer. She meets challenges head on and completes even the toughest of tasks in a timely manner. Not only are her skills valuable to any team she is also a nice and warm person to have around. She is helpful and always eager to learn more. I truly believe Bhavika would be a great addition to any team. "
    }
];
// See object prototype on /types/section.ts page
const seoData = {
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
        "Bhavika Patel Portfolio"
    ]
};


/***/ }),

/***/ 895:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(174)));
module.exports = __webpack_exports__;

})();