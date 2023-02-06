import React, { use } from "react";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

const Asker = ({
  promptReq,
  result,
  setResult,
  questionAnswered,
  setQuestionAnswered,
}) => {
  // const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  // const [questionAnswered, setQuestionAnswered] = useState(false);
  // how do I get the questionAnswered state into the main page, thereby updating the field to show the 4 modules?
  // useEffect(() => {
  //   if (questionAnswered) {
  //     console.log("questionAnswered: ", questionAnswered);
  //     console.log("prompt: ", prompt);
  //     // setPrompt(prompt);
  //     // setQuestionAnswered(true);
  //   }
  // }, [questionAnswered]);

  // this is the part that prepares the AI for the prompt from the user
  const prefix1 =
    "I'm going to send you a prompt, and I want you to respond as an expert in that field would, creating 4 modules, labeled 'module 1, overview: ', 'module 2, introduction to the topic: ', 'module 3, core learnings: ', and 'module 4, advanced studies: '.  Make sure your description of each module begins with the label but also includes a unique title related to the question and a brief 3 sentence summary of the content in the lessons.  Respond as if you were creating four modules for a student interested in learning more about the following prompt, each of which could later be divided into at least 5 lessons expanding on that course of study, which is being asked about in this next block of text, which is a prompt from the user: ";
  const prefix =
    "I'm going to send you a prompt, and I want you to respond as an expert in that field would, creating 4 modules, labeled 'module 1, overview: ', 'module 2, introduction to the topic: ', 'module 3, core learnings: ', and 'module 4, advanced studies: '. Make sure your answer for each module begins with the label followed by a unique title related to the question and this module, followed by a label for 'course description' and then the description that is a brief, engaging, and intelligent 3 sentence summary of the content in the lessons. Respond as if you were creating four modules for a student interested in learning more about the following prompt, each of which could later be divided into at least 5 lessons expanding on that course of study, which is being asked about in this next block of text, which is a prompt from the user: ";

  const generateModules = async () => {
    setGenerating(true);
    setQuestionAnswered(false);
    console.log("generating question from promptReq: ", promptReq);
    const gptResult = await fetch("/api/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        prefix: prefix,
        data: promptReq,
      }),
    });
    const result = await gptResult.json();
    console.log("result: ", result.output.text);
    setResult(result.output.text);
    setQuestionAnswered(true);
    setGenerating(false);
  };

  return (
    <div className={styles.thirteen}>
      {
        // prompt ? (
        //   <p>{prompt}</p>
        // ) :
        generating ? (
          <button
            onClick={alert(
              `asking '${prefix} ${promptReq.promptReq}'... Hold yer horses, sheesh!`
            )}
          >
            Asking...
          </button>
        ) : questionAnswered ? (
          <button onClick={generateModules}>Ask again!</button>
        ) : (
          <button className={styles.promptbuttons} onClick={generateModules}>
            Ask!
          </button>
        )
      }
    </div>
  );
};

// export Asker with the questionAnswered state variable and the result of the gpt call

export default Asker;
