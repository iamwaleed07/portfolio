import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Waleed",
  lastName: "Ahmad",
  name: `Waleed Ahmad`,
  role: "Software Engineer",
  avatar: "/images/profile.png",
  email: "iamwaleed07@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/iamwaleed07",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/waleedrauf/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/iamwaleed_7/",
    essential: false,
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Helping ideas move from design to production with clean, scalable code.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Waleed</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Waleed, a software engineer focused on building modern web applications with clean, reliable code.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Waleed is a full-stack software engineer who builds modern web applications with a strong focus on clarity, performance, and long-term maintainability. His work involves designing and developing reliable systems, crafting clean user interfaces, and solving complex technical problems with practical, well-structured solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Vaival Technologies",
        timeframe: "2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Designs, develops, and maintains scalable web applications and SaaS platforms, specializing in frontend & backend development, API integrations, cloud solutions (AWS), and workflow automation.
          </>,
          <>
            Focuses on writing clean, maintainable code, optimizing performance, and delivering robust, reliable software solutions.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Blurred Ego",
        timeframe: "2021 - 2023",
        role: "Full-Stack developer",
        achievements: [
          <>
            Deploys full-stack applications on AWS to ensure reliable hosting, scalability, and performance.
          </>,
          <>
            Builds RESTful APIs with Node.js and dynamic, interactive UIs with Next.js for seamless frontend-backend communication and smooth user experiences.
          </>,
        ],
        images: [],
      },
      {
        company: "Blank Slate",
        timeframe: "2019 - 2020",
        role: "Full-Stack developer",
        achievements: [
          <>
            Translated Figma designs into pixel-perfect, responsive web pages using HTML, CSS, React.js, and Next.js.
          </>,
          <>
            Optimized frontend performance by implementing lazy loading, code-splitting, and other best practices for faster user experiences.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Virtual University Of Pakistan",
        description: <>Bachelor of Computer Science.</>,
      },
      {
        name: "Government Graduate College of Science",
        description: <>Intermediate In Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + React.js + Convex.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/project-2.png",
            alt: "Project image",
            width: 14,
            height: 9,
          },
        ],
      },
      {
        title: "React.js",
        description: (
          <>Creating interactive and dynamic frontend experiences with React.js and modern libraries.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/project-3.png",
            alt: "React.js project image",
            width: 14,
            height: 9,
          },
        ],
      },
      {
        title: "Node.js",
        description: (
          <>Developing scalable backend services, REST APIs, and real-time applications with Node.js and Express.js.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/project-1.png",
            alt: "Node.js project image",
            width: 14,
            height: 9,
          },
        ],
      },
      {
        title: "NestJS",
        description: (
          <>Building modular, maintainable, and secure server-side applications using NestJS framework.</>
        ),
        images: [

        ],
      },
      {
        title: "AWS",
        description: (
          <>Deploying cloud-native applications, managing storage, servers, and scaling infrastructure on AWS.</>
        ),
        images: [

        ],
      },
      {
        title: "AI",
        description: (
          <>Integrating AI and machine learning models to create intelligent, automated web applications.</>
        ),
        images: [

        ],
      },
      {
        title: "n8n",
        description: (
          <>Automating workflows and connecting apps using n8n for seamless business processes.</>
        ),
        images: [

        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
