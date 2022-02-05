import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'

interface Props {}

export const HomePage: NextPage<Props> = () => (
  <>
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-gray-800">
        <h1 className="pt-4 text-4xl font-bold dark:text-gray-100">
          Welcome to <span className="text-blue-600">Next.js!</span>
        </h1>
        <p className="mt-1 text-2xl dark:text-gray-100">
          Starter template with tailwindcss, typescript, and eslint
        </p>
        <p className="text-lg dark:text-gray-100">
          Go to page{' '}
          <Link href="/second" passHref>
            <a className="font-bold text-blue-600">Second</a>
          </Link>
        </p>
      </main>
    </div>
  </>
)

export default HomePage
