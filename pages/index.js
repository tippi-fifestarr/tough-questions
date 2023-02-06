import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import Asker from "@/components/Asker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [result, setResult] = useState("");
  const [result1title, setResult1title] = useState("");
  const [result1description, setResult1description] = useState("");
  const [result2title, setResult2title] = useState("");
  const [result2description, setResult2description] = useState("");
  const [result3title, setResult3title] = useState("");
  const [result3description, setResult3description] = useState("");
  const [result4title, setResult4title] = useState("");
  const [result4description, setResult4description] = useState("");

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
            <h1>Break *Tough Questions* into Modules</h1>
            <textarea
              placeholder="start typing here"
              onChange={(e) => setPrompt(e.target.value)}
              className={styles.promptbox}
            />
          </div>
          <Asker
            promptReq={prompt}
            result={result}
            setResult={setResult}
            questionAnswered={questionAnswered}
            setQuestionAnswered={setQuestionAnswered}
            result1title={result1title}
            setResult1title={setResult1title}
            result1description={result1description}
            setResult1description={setResult1description}
            result2title={result2title}
            setResult2title={setResult2title}
            result2description={result2description}
            setResult2description={setResult2description}
            result3title={result3title}
            setResult3title={setResult3title}
            result3description={result3description}
            setResult3description={setResult3description}
            result4title={result4title}
            setResult4title={setResult4title}
            result4description={result4description}
            setResult4description={setResult4description}
          />
          <div className={styles.input}></div>
        </div>

        {/* conditionally show this grid when responses are returned */}
        {questionAnswered ? (
          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              onClick={console.log(prompt)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                {result1title} <span>-&gt;</span>
              </h2>
              <p className={inter.className}>{result1description}</p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                {result2title} <span>-&gt;</span>
              </h2>
              <p className={inter.className}>{result2description}</p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                {result3title} <span>-&gt;</span>
              </h2>
              <p className={inter.className}>{result3description}</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                {result4title} <span>-&gt;</span>
              </h2>
              <p className={inter.className}>{result4description}</p>
            </a>
          </div>
        ) : (
          <h1>
            <div className={styles.center}>Ask your question above!</div>
          </h1>
        )}
      </main>
    </>
  );
}
