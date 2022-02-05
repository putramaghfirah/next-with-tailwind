import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const custom404 = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Head>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <h1 className="text-center text-5xl font-bold dark:text-white">
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </h1>
        <p className="mt-2 text-center text-lg dark:text-white">
          Page not found.
        </p>
        <p className="text-center text-lg dark:text-white">
          Return to{' '}
          <Link href="/" passHref>
            <a className="font-bold text-blue-600">Home Page</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default custom404
