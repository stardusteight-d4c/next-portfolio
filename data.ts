import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { IProject, ISkill, Service } from './types'

import { BsCircleFill } from 'react-icons/bs'

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and dynamic SPA using <b>React</b> and <b>Next.js</b>',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about:
      'Handle servers and APIs using <b>Fetch API</b> & popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'Dynamic Applications',
    about: 'Make an app more dynamic with <b>GraphQL</b> and <b>CMS</b>',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about:
      'I am always active and <b>solving daily problems</b> in the digital world',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'Agile Software',
    about:
      'Team collaboration, readable code and <b>continuous improvement</b>',
  },
  {
    Icon: RiComputerLine,
    title: 'Nerver Stop Learning',
    about: 'Looking to build more complete and sophisticated applications',
  },
]

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'Javascript',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'Node.js',
    level: '40',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Next.js',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Tailwindcss',
    level: '50',
  },
]

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'Linux',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Git',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Framer',
    level: '45',
  },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Clone Netflix',
    description:
      'Clone of Netflix interface with Vite, React and Tailwindcss. Using a JavaScript object file to simulate an API that would provide the video data. Using some libraries to provide the side scrolling slide or to make the navigation of a Single Page Application, for example.',
    image_path: '/images/nextlv.png',
    deployed_url: 'https://nextlv-flix.vercel.app/',
    github_url: 'https://github.com/stardusteight-d4c/nextlv_flix',
    category: ['React'],
    key_techs: ['React', 'Tailwindcss', 'Vite'],
  },
  {
    id: 2,
    name: 'Twitch Clone | With NextAuth.js',
    description:
      'Clone the Twitch interface using some Headless UI components. A login and logout system was implemented with NextAuth.js and its providers, using APIs and authentication services from Google and Github with the OAuth protocol to allow users to log in through third-party websites.',
    image_path: '/images/twitch.png',
    deployed_url: 'https://twitch-clone-ten.vercel.app/',
    github_url: 'https://github.com/stardusteight-d4c/twitch-clone',
    category: ['React', 'Next.js'],
    key_techs: ['React', 'Next.js'],
  },
  {
    id: 3,
    name: 'Designium | Blog',
    image_path: '/images/designium.png',
    deployed_url: 'https://personal-blog-ten-sandy.vercel.app/',
    github_url: 'https://github.com/stardusteight-d4c/personal-blog',
    category: ['React', 'Next.js'],
    description:
      'A small blog fully manageable via Hygraph, using some of the most modern technologies on the market such as React, Next.js and GraphQL. With the content management system attached to the blog, we can publish any post and submit comments that will be reviewed and published or deleted.',
    key_techs: ['React', 'Next.js', 'GraphQL', 'Hygraph', 'Tailwindcss'],
  },
  {
    id: 4,
    name: 'Canvas and Javascript',
    description:
      'I used the HTML5 canvas element and its Javascript API to manipulate images, control audio streams and draw graphics animations. > I also used the vanilla-tilt.js script to add the effect of a smooth 3D tilt.',
    image_path: '/images/pong.png',
    deployed_url: 'https://stardusteight-d4c.github.io/pong-game/',
    github_url: 'https://github.com/stardusteight-d4c/pong-game',
    category: ['Javascript'],
    key_techs: ['Javascript', 'Canvas'],
  },
  {
    id: 5,
    name: 'Single Page Application',
    description:
      'A Single Page Application built with Next.js and React. By default, Next.js pre-renders each page. This means that Next.js generates HTML for each page in advance, instead of doing everything via client-side JavaScript. Pre-rendering can result in better performance and SEO.',
    image_path: '/images/HZC.png',
    deployed_url: 'https://next-hzc.vercel.app/',
    github_url: 'https://github.com/stardusteight-d4c/next-hzc',
    category: ['React', 'Next.js'],
    key_techs: ['React', 'Next.js'],
  },
  {
    id: 6,
    name: 'Web Speech API',
    image_path: '/images/secretNumber.png',
    deployed_url: 'https://stardusteight-d4c.github.io/game_speech-api/',
    github_url: 'https://github.com/stardusteight-d4c/game_speech-api',
    category: ['Javascript'],
    description:
      "A small game made with Web Speech API, using its constructor to create a new SpeechRecognition object, which has several event handlers available to detect when speech is input through the device's microphone.",
    key_techs: ['Node', 'Javascript'],
  },
  {
    id: 7,
    name: 'Rocket NFTs',
    image_path: '/images/rocketNFTs.png',
    deployed_url: 'https://rocket-nfts-three.vercel.app/',
    github_url: 'https://github.com/stardusteight-d4c/rocket-nfts',
    category: ['React'],
    description:
      "Construction of the Rocket NFTs home page, with React and TailwindCSS, was a challenge proposed by Rocketseat. To make the animations, I used Tailwind's tailwind.config.js file to create custom animations, such as the Marquee effect. I also used the React Reveal library, to add animations when scrolling.",
    key_techs: ['React', 'Tailwindcss', 'Vite'],
  },
  {
    id: 8,
    name: 'getStaticProps and getStaticPaths',
    description:
      'Practicing using the getStaticProps and getStaticPaths features from Next.js by creating dynamic routes and stored data in a Content Management System (CMS). Using GraphQL queries to make requests to DatoCMS and generate routes through the Product ID with its respective data via getStaticProps.',
    image_path: '/images/casaVerde.png',
    deployed_url: 'https://casa-verde-inky-seven.vercel.app/',
    github_url: 'https://github.com/stardusteight-d4c/casa-verde',
    category: ['React', 'Next.js'],
    key_techs: ['React', 'Next.js'],
  },
]
