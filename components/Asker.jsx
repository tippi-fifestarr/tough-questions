import React, { use } from "react";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

const Asker = ({
  promptReq,
  result,
  setResult,
  questionAnswered,
  setQuestionAnswered,
  result1title,
  setResult1title,
  result1description,
  setResult1description,
  result2title,
  setResult2title,
  result2description,
  setResult2description,
  result3title,
  setResult3title,
  result3description,
  setResult3description,
  result4title,
  setResult4title,
  result4description,
  setResult4description,
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
  const prefix =
    "I'm going to send you a prompt, and I want you to respond as an expert in that field would, creating 4 modules, labeled exactly as 'Module 1, Overview: ', 'Module 2, Introduction to the Topic: ', 'Module 3, Core Learnings: ', and 'Module 4, Advanced Studies: '. Make sure you format the labels exactly as I gave them to you.  Make sure your answer for each module begins with the label directly followed by 'Title1: ', 'Title2: ', 'Title3: ', or 'Title4: ' and a unique title related to the question and this module. On a new line give the label for 'CD1: ' or 'CD2: ', 'CD3: ', 'CD4: ', depending on which one it is) and then the description that is a brief, engaging, and intelligent 3 sentence summary of the content in the lessons. Respond as if you were creating four modules for a student interested in learning more about the following prompt, each of which could later be divided into at least 5 lessons expanding on that course of study, which is being asked about in this next block of text, which is a prompt from the user: ";

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
    // set result1title to equal the result.output.text that is after "Title1: " and before "CD1: "
    setResult1title(
      result.output.text.slice(
        result.output.text.indexOf("Title1: ") + 8,
        result.output.text.indexOf("CD1: ")
      )
    );
    // set result1description to equal the result.output.text that is after "CD1: " and before "Title1: "
    setResult1description(
      result.output.text.slice(
        result.output.text.indexOf("CD1: ") + 5,
        result.output.text.indexOf("Module 2")
      )
    );
    // set result2title to equal the result.output.text that is after "Title2: " and before "CD2: "
    setResult2title(
      result.output.text.slice(
        result.output.text.indexOf("Title2: ") + 8,
        result.output.text.indexOf("CD2: ")
      )
    );
    // set result2description to equal the result.output.text that is after "CD2: " and before "Module 3, Core Learnings: "
    setResult2description(
      result.output.text.slice(
        result.output.text.indexOf("CD2: ") + 5,
        result.output.text.indexOf("Module 3")
      )
    );
    // set result3title to equal the result.output.text that is after "Title3: " and before "CD3: "
    setResult3title(
      result.output.text.slice(
        result.output.text.indexOf("Title3: ") + 8,
        result.output.text.indexOf("CD3: ")
      )
    );
    // set result3description to equal the result.output.text that is after "CD3: " and before "Module 4, Advanced Studies: "
    setResult3description(
      result.output.text.slice(
        result.output.text.indexOf("CD3: ") + 5,
        result.output.text.indexOf("Module 4")
      )
    );
    // set result4title to equal the result.output.text that is after "Title4: " and before "CD4: "
    setResult4title(
      result.output.text.slice(
        result.output.text.indexOf("Title4: ") + 8,
        result.output.text.indexOf("CD4: ")
      )
    );
    // set result4description to equal the result.output.text that is after "CD4: "
    setResult4description(
      result.output.text.slice(result.output.text.indexOf("CD4: ") + 5)
    );

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
