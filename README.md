# Axelar: Tough Questions

![Screenshot](public/toughscreen.png)

Tippi created this simple starter for his presentation using the create-next-app as template, inspired by https://www.tutorai.me/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How I did it:

1. First, I scraped out the index.js from the nextJS starter and filled it with my idea and "brand".
1. Then, I used state variables to conditionally render the 4 modules onClick of the Ask button.
1. Then I updated this readme and my presentation! [starter branch](https://github.com/tippi-fifestarr/tough-questions/blob/starter-branch)
1. The tricky part is connecting the OpenAI API.  First [get an API Key](https://platform.openai.com/account/api-keys).
1. Put the API Key in a .env.local like this:  OPENAI_API_KEY=ab-cdef (your api key)
1. Make an gpt.js in the api/ folder in /pages.  This takes the key and awaits response from OpenAI API
1. Make an Asker component that does the fetch POST request to /api/gpt and processes the response into parts (module title and description)
1. Tweaking the prompt and slice functions to get the parts exactly right most of the time.
1. Fill in the blanks

## Getting Started

> npm install

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/gpt). This endpoint can be edited in `pages/api/gpt.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Next Steps

1. Clean up the code. Use loops to process the returned modules

- _title 1_description is right here blah blah blah_another field you need_another one_ another one
- _title 2_description is right here blah blah blah_another field you need_another one_ another one
- _title 2_description is right here blah blah blah_another field you need_another one_ another one
  const modulesArr = data.split(\*)
  loop
  in each one
  make a new variable in loop for module split
  const module = split("\_")
  module[0] title
  module[1] description

2. Darkmode (some user testing showed white text on white background)
3. Prompt Chaining (onClick of module choice, takes shows user a lesson plan for that module)
4. Web3 stuff (login, mint a lesson when completed to save the content)
5. Axelar?

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
