import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation, stagger } from '../animations'

import Head from 'next/head'

const About = ({ endpoint }) => {
  console.log(endpoint)

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
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
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

//!called every time  the page refreshed
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json()
  // console.log(data)
  return { props: { endpoint: process.env.VERCEL_URL } }
}

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About
