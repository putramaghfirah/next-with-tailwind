import Head from 'next/head'
import Link from 'next/link'

export const Home = (): JSX.Element => (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold pt-4 dark:text-white">
          Welcome to <span className="text-blue-600">Next.js!</span>
        </h1>
        <p className="text-2xl mt-1 dark:text-white">
          Starter template with tailwindcss, typescript, and eslint
        </p>

        <p className="text-lg dark:text-white">
          Go to page{' '}
          <Link href="/about" passHref>
            <a className="text-blue-600 font-bold">About</a>
          </Link>
        </p>
      </main>
    </div>
  </>
)

export default Home
