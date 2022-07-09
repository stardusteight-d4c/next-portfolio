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
      'I can build a beautiful and scalable SPA using <b>React</b> and <b>Next.js</b>',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about:
      'Handle servers and APIs using <b>Express</b> & others popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'Dynamic Applications',
    about:
      'Make an app more dynamic with <b>GraphQL</b> and <b>CMS</b>',
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
      'Team collaboration, readable code, continuous integration and continuous delivery',
  },
  {
    Icon: RiComputerLine,
    title: 'Nerver Stop Learning',
    about:
      "I'm always studying looking to build more complete and sophisticated applications",
  },
]

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'Javascript',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Typescript',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'Node.js',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Next.js',
    level: '35',
  },
  {
    Icon: BsCircleFill,
    name: 'Tailwindcss',
    level: '60',
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
    name: 'Cypress',
    level: '40',
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
    image_path: '/images/netflix.png',
    deployed_url: 'https://nextlv-flix.vercel.app/',
    github_url: 'https://github.com/stardusteight-d4c/nextlv_flix',
    category: ['React'],
    key_techs: ['React', 'Tailwindcss', 'Vite'],
  },
  {
    id: 2,
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
    id: 3,
    name: 'Secret Number - Web Speech API',
    image_path: '/images/secretNumber.png',
    deployed_url: 'https://stardusteight-d4c.github.io/game_speech-api/',
    github_url: 'https://github.com/stardusteight-d4c/game_speech-api',
    category: ['Javascript'],
    description:
      "A small game made with Web Speech API, using its constructor to create a new SpeechRecognition object, which has several event handlers available to detect when speech is input through the device's microphone.",
    key_techs: ['Node', 'Javascript'],
  },
  {
    id: 4,
    name: 'HZC | Single Page Application',
    description:
      'A Single Page Application built with Next.js and React. By default, Next.js pre-renders each page. This means that Next.js generates HTML for each page in advance, instead of doing everything via client-side JavaScript. Pre-rendering can result in better performance and SEO.',
    image_path: '/images/HZC.png',
    deployed_url: 'https://next-hzc.vercel.app/',
    github_url: 'https://github.com/stardusteight-d4c/next-hzc',
    category: ['React'],
    key_techs: ['React', 'Next.js'],
  },
]
