import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  return (
    <>
      <Head>
        <title>Teach Anything</title>
        <meta name="description" content="Axelar: Tough Questions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Ask, to Learn Anything&nbsp;
            <code className={styles.code}>using the OpenAI API</code>
          </p>
          <div>
            <a
              href="https://twitter.com/fifestarr"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/tf-logo4.png"
                alt="Tippi Fifestarr's logo"
                width={300}
                height={280}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div>
            <h1>Tough Questions</h1>
            <input></input>
          </div>
          <div className={styles.thirteen}>
            <button onClick={setQuestionAnswered}>Ask</button>
          </div>
          <div className={styles.input}></div>
        </div>

        {/* conditionally show this grid when responses are returned */}
        {questionAnswered ? (
          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Docs <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Learn <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Templates <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Discover and deploy boilerplate example Next.js&nbsp;projects.
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Deploy <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Instantly deploy your Next.js site to a shareable URL
                with&nbsp;Vercel.
              </p>
            </a>
          </div>
        ) : (
          <h1>
            <div className={styles.center}>ask your question above!</div>
          </h1>
        )}
      </main>
    </>
  );
}
