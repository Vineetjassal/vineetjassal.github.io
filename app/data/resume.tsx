import { Icons } from "../components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dillion Verma",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "season5 (s5)",
      logoUrl: "https://pbs.twimg.com/profile_images/1591152764708585473/EXYGT1Z__400x400.jpg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Kirori Mal College",
      href: "https://kmc.du.ac.in",
      degree: "Bachelor's Degree of Mathematics (Hons.)",
      logoUrl: "https://yt3.googleusercontent.com/JoxvxdmTc-APDaHYoO6A1YnlfdzElqXRQmA1qC50wvFIogmQXFB8-v7NJj2eAmwORn5P1QotQw=s900-c-k-c0x00ffffff-no-rj",
      start: "Nov 2022",
      end: "Jun 2025",
    },
    {
      school: "Harvard University",
      href: "https://www.harvard.edu/",
      degree: "CS50's Introduction to Computer Science",
      logoUrl: "https://i.pinimg.com/originals/89/28/77/892877d47ba3695d5e9a68f44a325229.jpg",
      start: "Sep 2023",
      end: "Mar 2024",
    },
    {
      school: "Sumermal Jain Public School",
      href: "https://www.sumermaljainpublicschool.edu.in/",
      degree: "Class X and XII",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-LLcRzGcc2ZbFbo4uh9xlcfFUiwLM6Avfw&s",
      start: "2008",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "TrackList",
      href: "https://trytracklist.vercel.app/",
      dates: "June 2024 - August 2024",
      active: true,
      description:
        "A real-time Spotify playlist editor for effortless collaboration! Built with Liveblocks and shadcn/ui, this app lets friends curate playlists together, with instant updates and chat features. Add, shuffle, and remove songs seamlessly—perfect for group music sessions!",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "LiveBlocks",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://trytracklist.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vineetjassal/Tracklist",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://trytracklist.vercel.app/TrackList-Video.mp4",
    },
    {
      title: "Scalable Voting App",
      href: "https://scalable-voting-app.vercel.app/",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "Introducing an open-source real-time voting app for one-word opinions! Features include shareable URLs, QR code generation, downloadable Excel insights, and a sleek, minimalistic design for maximum engagement. Perfect for quick, simple opinion gathering—try it today!",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Redis",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://scalable-voting-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vineetjassal/scalable-voting-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://scalable-voting-app.vercel.app/scalablevotingdemo.mp4",
    },
    {
      title: "Scribble Saga",
      href: "https://scribblesaga.vercel.app/",
      dates: "March 2024 - April 2024",
      active: true,
      description:
        "Scribble Saga is an interactive, multiplayer drawing and guessing game where friends can connect, take turns drawing images, and guess words based on each other’s drawings. Players earn points depending on various factors, making it a fun, competitive, and engaging way to challenge creativity and quick thinking.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://scribblesaga.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vineetjassal/scribble",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://scribblesaga.vercel.app/scribbledemo.mp4",
    },
    {
      title: "Stockify (Building Stock Graph)",
      href: "https://getstockify.vercel.app/",
      dates: "October 2024 - Present",
      active: true,
      description:
        "Stockify is a tool tailored for designers and developers, enabling them to seamlessly incorporate real-time stock price movements—indicating stock values going up or down—directly into their projects. This integration simplifies financial data visualization and enhances the user experience in finance-related applications.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Aceternity UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://getstockify.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vineetjassal/Stockify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://getstockify.vercel.app/demo.mp4",
    },
    {
      title: "Filtering System",
      href: "#",
      dates: "August 2024",
      active: true,
      description:
        "You're creating a clothing filter system in Next.js that allows users to narrow down options by size, color, and price, making it easier to find items that match their preferences.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Vineetjassal/filtering-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://dms.licdn.com/playlist/vid/v2/D5605AQGfnKk3EVqUZg/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1721890524793?e=2147483647&v=beta&t=CObn_rfaRDRcaQTY0dEnyGPTMnuaJmYpIKejswkh06w",
    },
  ],
} as const;