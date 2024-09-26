import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gareth Thomas",
  initials: "GT",
  url: "https://forevergareth.com",
  location: "Orlando, FL",
  locationLink: "https://www.google.com/maps/place/orlando",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "https://avatars.githubusercontent.com/u/11306782?v=4",
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
    email: "oforevergareth@gmail.com",
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
      company: "RealDecoy Inc.",
      href: "https://realdecoy.com",
      badges: [],
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "data:image/jpeg;base64,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",
      start: "Oc 2018",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Techports",
      badges: [],
      href: "https://www.techports.org",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "data:image/png;base64,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",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Full Sail University",
      href: "https://fullsail.edu",
      degree: "BSc Game Development and Computer Science",
      logoUrl: "data:image/png;base64,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",
      start: "2024",
      end: "2025",
    },
    {
      school: "Brown's Town Community Colledge",
      href: "https://btcc.edu.jm",
      degree: "ASc Management Information Systems (MIS)",
      logoUrl: "data:image/png;base64,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",
      start: "2015",
      end: "2017",
    }
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
