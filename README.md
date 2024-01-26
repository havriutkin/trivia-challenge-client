<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Trivia Challenge Client</h1>
  <p align="center">
    A front end for Trivia Challege app
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#trivia-challnege-info">About Trivia Challenge App</a></li>
        <li><a href="#overview">Short Overview</a></li>
      </ul>
    </li>
    <li> <a href="#project-structure">Project Structure</a> </li>
    <li><a href="#api-interactions">API Interaction</a></li>
    <li><a href="#state-managment">State Managment</a></li>
    <li><a href="#stlyes">Styles</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

In this section used technologies and project goals are described

### Built With

* [![React][React.js]][React-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
* [![FramerMotion][FramerMotion]][FramerMotion-url]

### Trivia Challenge Info
<p>Trivia Challange app - is a web app, that allows users to complete random quizes of different difficulty and keep track of their statistics.</p>
</p>Front-end is built using React and TaillwindCSS. More <a href="https://github.com/havriutkin/trivia-challenge-client">details here</a>.</p>
</p>Back-end is built using NodeJS, ExpressJS and PostgreSQL. More <a href="https://github.com/havriutkin/trivia-challenge-api">details here</a>.</p>

### Overview
<p>Trivia Challenge client handles front-end logic of an app. Styles, responsive design, state managment are implemented.</p>

<!-- Project Structure -->
## Project Structure
<p>
  /public      - folder for static files <br/>
  /src         - source code of a project <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;/componentes
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- functional components that are used few or more times across the app<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;/layout
    &nbsp;&nbsp;&nbsp;&nbsp;- static components, that appear across all pages <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;/pages
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- landing components, to which router directs <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;/providers
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- context providers (AuthContext, QuizContext)  <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;/services
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- handle interactions with API <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;/utils
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- contains helper functions and configurations  <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;App.js  <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;App.css  - contains custom TailwindCSS styles <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;index.js  <br/>
  .env         &nbsp;&nbsp;&nbsp;- contains environment variables, s.t. database credentials (included in .gitignore)  <br/>
  tailwind.config.js     &nbsp;&nbsp;&nbsp;- contains config of TailwindCSS <br/>
</p>


<!-- Api Interactions -->
## Api Interactions
<p>Services folder contains files that handle interaction with Trivia Chanllenge API. More [details about API here](https://github.com/havriutkin/trivia-challenge-api).</p>

<!-- State Managment -->
## State Managment
<p>In this project I did not use React Redux, because state is not that complex, and I wanted to gain deeper understanding of state managment in React</p>
<p>Therefore, state managment is implemented using React's built-in ContextProvider</p>
<p>Client side has two context providers: Auth (keeps track of user loggin status and user realted data) and Quiz (keeps track of quiz data)</p>
<p>ContextProvider allows to transfer data between different routes effectievly</p>


<!-- Styles -->
## Styles
<p>TailwindCSS with some custom styles is used to implement responsive design for small, medium and large screens</p>
<p>FramerMotion library is used to create animations and smooth transitions between different routes</p>

## Contact
Vladyslav Havriutkin - [@havriutkin](https://github.com/havriutkin) - havriutkin@gmail.com

Trivia Challenge App: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew

[React.js]: https://img.shields.io/badge/React.js-000000?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://react.dev

[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-000000?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com 

[FramerMotion]: https://img.shields.io/badge/FramerMotion-000000?style=for-the-badge&logo=framer&logoColor=white
[FramerMotion-url]: https://www.framer.com/motion/
