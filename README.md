# Next AI Template

## Welcome to Next AI Template

This is a Next.js template that helps you get started with AI-powered applications. It is the one that I use to create my AI projects. It is very opinionated. It implements dark mode, with a theme switcher, and it is prepared to modify easily the branding of your project. For the developing part, it includes directly ESLint and Prettier with a configuration to work directly on Visual Studio Code.

This template is based on Next.js, Next UI, Tailwind CSS, and Next.js Themes. For the AI part, it uses the AI library developed by Vercel.

## Installation

To get started, you need to have Node.js or any other JavaScript runtime compatible with Next.js installed on your machine. You can download it from the official website: [Node.js Download](https://nodejs.org/en/download/)

After that, go to the [Next AI Template](https://github.com/alexfdez1010/next-template) repository and click on the `Use this template` button. Click on `Create a new repository` and follow the instructions.

You can also execute the following command in your terminal:

```sh
npx create-next-app@latest --example https://github.com/alexfdez1010/next-template
```

This will create a new Next.js project based on the Next AI Template directly. After that, you should clone the repository on your local machine. To install all the dependencies, run the following command in your terminal:

```sh
npm i
```

You can use another package manager like bun or pnpm, if you have it installed.

## How to use

After finishing the installation, you can start the development server by running the following command:

```sh
npm run dev
```

After checking that everything is working properly, you can start editing the files. 

- The `app/layout.tsx` file is not meant to be modified except for the metadata part.
- To modify the header/footers, go to the `components/layout` folder.
- Here you can modify the `Header.tsx` and `Footer.tsx` files and the components that compose them.
- To modify the themes, go to the `tailwind.config.ts` file and modify the themes inside the `nextui` plugin.
- To modify the home page, go to the `app/page.tsx` file and modify the content.

## References

- [Next.js](https://nextjs.org/)
- [NextUI](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js Themes](https://github.com/pacocoursey/next-themes)
- [Vercel AI Library](https://sdk.vercel.ai)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Visual Studio Code](https://code.visualstudio.com/)