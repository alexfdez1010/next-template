import { Link, Snippet } from '@nextui-org/react';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start w-11/12 md:w-[700px] gap-5 my-5 p-4">
      <h2 className="text-5xl font-bold text-center mt-5">
        Welcome to <span className="text-primary">Next AI Template!</span>
      </h2>
      <p className="text-pretty">
        This is a Next.js template that helps you get started with AI-powered
        applications. It is the one that I use to create my AI projects. It is
        very opinionated. It implements dark mode, with a theme switcher, and it
        is prepared to modify easily the branding of your project. For the
        developing part, it includes directly ESLint and Prettier with a
        configuration to work directly on Visual Studio Code.
      </p>
      <p className="text-pretty">
        This template is based on Next.js, Next UI, Tailwind CSS, and Next.js
        Themes. For the AI part, it uses the AI library developed by Vercel.
      </p>

      <h3 id="installation" className="text-3xl font-semibold mt-5">
        Installation
      </h3>

      <p className="text-pretty">
        To get started, you need to have Node.js or any other JavaScript runtime
        compatible with Next.js installed on your machine. You can download it
        from the official website:
        <Link
          href="https://nodejs.org/en/download/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js Download
        </Link>
      </p>
      <p className="text-pretty">
        After that, go to the{' '}
        <Link
          href="https://github.com/alexfdez1010/next-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next AI Template
        </Link>{' '}
        repository and click on the `Use this template` button. Click on `Create
        a new repository` and follow the instructions.
      </p>
      <p className="text-pretty">
        You can also execute the following command in your terminal:
      </p>
      <Snippet color="primary" variant="bordered" codeString='npx create-next-app@latest --example https://github.com/alexfdez1010/next-template'>
        npx create-next-app@latest --example alexfdez1010/next-template
      </Snippet>
      <p className="text-pretty">
        This will create a new Next.js project based on the Next AI Template
        directly.
      </p>
      <p className="text-pretty">
        After that, you should clone the repository on your local machine. To
        install all the dependencies, run the following command in your
        terminal:
      </p>
      <Snippet color="primary" variant="bordered">
        npm i
      </Snippet>
      <p className="text-pretty">
        You can use another package manager like bun or pnpm, if you have it
        installed.
      </p>
      <h3 id="how-to-use" className="text-3xl font-semibold mt-5">
        How to use
      </h3>
      <p className="text-pretty">
        After finishing the installation, you can start the development server
        by running the following command:
      </p>
      <Snippet color="primary" variant="bordered">
        npm run dev
      </Snippet>
      <p className="text-pretty">
        After checking that everything is working properly, you can start
        editing the files. 
      </p>
      <ul className="list-disc pl-5">
        <li>
          The <code className="font-mono font-bold">app/layout.tsx</code> file
          is not meant to be modified except for the metadata part.
        </li>
        <li>
          To modify the header/footers, go to the{' '}
          <code className="font-mono font-bold">components/layout</code> folder.
        </li>
        <li>
          Here you can modify the{' '}
          <code className="font-mono font-bold">Header.tsx</code> and{' '}
          <code className="font-mono font-bold">Footer.tsx</code> files and the
          components that compose them.
        </li>
        <li>
          To modify the themes, go to the{' '}
          <code className="font-mono font-bold">tailwind.config.ts</code> file
          and modify the themes inside the{' '}
          <code className="font-mono font-bold">nextui</code> plugin.
        </li>
        <li>
          To modify the home page, go to the{' '}
          <code className="font-mono font-bold">app/page.tsx</code> file and
          modify the content.
        </li>
      </ul>
      <h3 id="references" className="text-3xl font-semibold mt-5">
        References
      </h3>
      <ul className="list-disc pl-5 text-lg justify-start w-full">
        <li>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>
        </li>
        <li>
          <Link
            href="https://nextui.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextUI
          </Link>
        </li>
        <li>
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/pacocoursey/next-themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Themes
          </Link>
        </li>
        <li>
          <Link
            href="https://sdk.vercel.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel AI Library
          </Link>
        </li>
        <li>
          <Link
            href="https://eslint.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESLint
          </Link>
        </li>
        <li>
          <Link
            href="https://prettier.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prettier
          </Link>
        </li>
        <li>
          <Link
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual Studio Code
          </Link>
        </li>
      </ul>
    </div>
  );
}
