import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import MyModal from '../components/modal';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minesweeper</title>
        <meta name="description" content="A minesweeper game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex justify-center items-center flex-wrap">
          <h1 className="text-5xl font-bold text-center">
            Welcome to Minesweeper
          </h1>
          <MyModal />
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-bold">Start a new game</h2>
          <div className="mt-4 flex justify-center items-center">
            <Link href="/easy" className="m-2">
              <button className="w-full bg-green-500 hover:bg-green-700 p-2 rounded">
                <span>Easy</span>
              </button>
            </Link>
            <Link href="/medium" className="m-2">
              <button className="w-full bg-yellow-500 hover:bg-yellow-700 p-2 rounded">
                <span>Medium</span>
              </button>
            </Link>
            <Link href="/hard" className="m-2">
              <button className="w-full bg-red-500 hover:bg-red-700 p-2 rounded">
                <span>Hard</span>
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>A footer will go here!</footer>
    </div>
  );
};

export default Home;
