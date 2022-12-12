# React Application Architecture for Production	
React Application Architecture for Production	, published by Packt

<a href="https://www.packtpub.com/product/react-application-architecture-for-production/9781801070539"><img src="https://static.packt-cdn.com/products/9781801070539/cover/smaller" alt="React Application Architecture for Production" height="256px" align="right"></a>

This is the code repository for [React Application Architecture for Production](https://www.packtpub.com/product/react-application-architecture-for-production/9781801070539), published by Packt.

**Learn best practices and expert tips to deliver enterprise-ready React web apps**

## What is this book about?

This book is for intermediate-level web developers who already have a solid understanding of JavaScript, React, and web development in general and want to build large-scale React applications effectively. Beginner-level TypeScript experience, along with JavaScript and React, will be beneficial.

This book covers the following exciting features:

* Use a good project structure that scales well with your application
* Create beautiful UIs with Chakra UI and emotion
* Configure a base Next.js app with static code analysis and Git hooks
* Learn to mock API endpoints for prototyping, local development and testing
* Choose an optimal rendering strategy in Next.js based on the page needs
* Learn to choose the best state management solution for given problem
* Write unit tests, integration tests and e2e tests in your React Application
* Deploy your React applications on Vercel

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1801070539) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the project files are organized into folders.
## Requirements

- Node.js 16+
- npm 8+

[There are a couple of different ways to install node and npm.](https://www.nodejsdesignpatterns.com/blog/5-ways-to-install-node-js/)

• VSCode (optional) is currently the most popular editor/IDE for JavaScript/TypeScript, so we will be using it. It is open source, has great integration with TypeScript, and we can extend its features via extensions. It can be downloaded from here: https://code.visualstudio.com/.

## Installation

To start using the code files, the first step is to clone the repository locally on your machine.

If you are using the repository for the first time, once it is cloned locally, you need to do the following steps:

Install the dependencies:

```sh
npm install
```

Configure environment variables by creating the `.env` file and copy the content from `.env.example`:

```sh
cp .env.example .env
```

## Usage

Select a chapter code:

```sh
npm run stage:switch
```

Start the dev server:

```sh
npm run dev
```

Save changes of the selected chapter code:

```sh
npm run stage:save
```

Clear the chapter selection:

```sh
npm run stage:clear
```


The code will look like the following:

```
const Page = () => {
     return <div>Welcome to the page!</div>
}
export default Page;


```

**Following is what you need for this book:**

Building large-scale applications in production can be overwhelming with the amount of tooling choices and lack of cohesive resources. To address these challenges, this hands-on guide covers best practices and web application development examples to help you build enterprise-ready applications with React in no time.

With the following software and hardware list you can run all code files present in the book (Chapter 1-10).

We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://packt.link/DjfrW).


### Related products <Other books you may enjoy>
* Micro State Management with React Hooks  [[Packt]](https://www.packtpub.com/product/micro-state-management-with-react-hooks/9781801812375) [[Amazon]](https://www.amazon.com/Micro-State-Management-React-Hooks/dp/1801812373)

* Mastering React Test-Driven Development  [[Packt]](https://www.packtpub.com/product/mastering-react-test-driven-development/9781789133417) [[Amazon]](https://www.amazon.com/Mastering-React-Test-Driven-Development-well-tested/dp/1789133416)

## Get to Know the Author
**Alan Alickovic** is a software engineer, consultant, mentor, and open source enthusiast. During the years of his software engineering career, he has gained extensive experience in building applications of various scales for start-ups and large organizations in a variety of different industries. He also has plenty of experience in leading and mentoring engineers and helping them grow and progress in their careers.

### Download a free PDF

 <i>If you have already purchased a print or Kindle version of this book, you can get a DRM-free PDF version at no cost.<br>Simply click on the link to claim your free PDF.</i>
<p align="center"> <a href="https://packt.link/free-ebook/9781800562738">https://packt.link/free-ebook/9781800562738 </a> </p>
