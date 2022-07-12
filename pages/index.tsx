import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation, stagger } from '../animations'

import Head from 'next/head'

// Chamada a cada vez que a página recarrega
export const getServerSideProps: GetServerSideProps = async (
  _context: GetServerSidePropsContext
) => {
  return { props: { endpoint: process.env.VERCEL_URL || null } }
}

const About = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Gabriel Sena | Web Developer</title>
      </Head>
      <h6 className="my-3 text-base font-medium">
        Hi! My name is Gabriel and I'm 20 years old. I'm currently learning to
        develop applications to enter the tech market soon and be able to learn
        more about this world. I hope we can make progress together, after all
        there will always be a next level!
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
