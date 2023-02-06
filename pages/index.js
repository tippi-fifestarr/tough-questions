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
                width={200}
                height={180}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div>
            <h1>Tough Questions</h1>
            <textarea
              placeholder="start typing here"
              className={styles.promptbox}
            />
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
                Title1: <span>-&gt;</span>
              </h2>
              <p className={inter.className}>description of *overview*</p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>Module2:</h2>
              <p className={inter.className}>introduction to the topic...</p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Module3: <span>-&gt;</span>
              </h2>
              <p className={inter.className}>Discover core learnings:</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>Module4</h2>
              <p className={inter.className}>advanced studies</p>
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
