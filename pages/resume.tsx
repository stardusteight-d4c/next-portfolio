import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation } from '../animations'
import Head from 'next/head'

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Gabriel Sena | Resume</title>
      </Head>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <p className="font-semibold">Alura | Online Technology Courses</p>
            <p className="my-3">
              I'm a self-taught student and I've been doing online courses of
              two major edtech platforms - Alura and Rocketseat. In my process
              of learning new techniques the free resources available on the
              internet, such as videos and tutorials, also plays a big part in
              my development.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Certificates</h5>
          <div className="">
            <a
              className="cursor-pointer hover:underline"
              href="https://cursos.alura.com.br/user/gabssena/fullCertificate/8b9780eb6ec20658c9eb1515504b1ee0"
              target="_blank"
            >
              cursos.alura/user/gabssena
            </a>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
