import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components/hero'
import { Input } from '../components/input'
import { cn } from '../components/hero'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dshort</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Hero />
        <div className='flex gap-4 no-wrap'>

          <input
            type="text"
            placeholder="Paste your link here"
            className={cn('py-2.5 px-5 mr-2 mb-2', 'rounded-md border border-gray-300')}
            pattern={"^[-a-zA-Z0-9]+$"}
            title="Only alphanumeric characters and hypens are allowed. No spaces."
            required
          />
          <Input type='button' value='Create' onClick={() => alert('tranqui pa, no esta terminado')} />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Diego
        </a>
      </footer>
    </div>
  )
}

export default Home
