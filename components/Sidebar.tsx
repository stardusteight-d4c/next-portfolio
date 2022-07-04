import { AiFillGithub } from 'react-icons/ai'
import { HiDocumentDownload } from 'react-icons/hi'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Image
        src="https://avatars.githubusercontent.com/u/87643260?v=4"
        alt="avatar"
        className="mx-auto border rounded-full"
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-bold font-roboto">
        <span className="text-purple ">Gabriel</span> Sena
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Resume.pdf"
        download="Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <HiDocumentDownload className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-purple md:w-full ">
        <a
          href="https://github.com/stardusteight-d4c"
          target="_blank"
          aria-label="GitHub"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{' '}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>São Paulo, Brazil</span>
        </div>
        <p className="my-2 ">bellsena@outlook.com</p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open('mailto:bellsena@outlook.com')}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Theme
      </button>
    </>
  )
}

export default Sidebar
