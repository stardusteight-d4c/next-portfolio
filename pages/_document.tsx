import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="MERN stack developer looking for a job"
          />
          <meta
            name="keywords"
            content="Full Stack Web Developer, Freelancer, MERN Developer"
          />
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-purple to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
