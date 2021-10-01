# microservice-kafka-nest

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]-->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!--
  <a href="https://github.com/OuthBack/taq-challenge">
    <img src=".github/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

  <h3 align="center">Microservice with Kafka and Nest</h3>

  <p align="center">
    A little expriement with Nest and Kafka to make microservices
    <br />
    <br />
    <a href="https://taq-challenge.vercel.app">View Preview</a>
    ·
    <a href="https://github.com/OuthBack/taq-challenge/issues">Report Bug</a>
    ·
    <a href="https://github.com/OuthBack/taq-challenge/issues">Require Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Content Tabel</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
      <ul>
        <li><a href="#built-with">Built with:</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Requirements</a></li>
        <li><a href="#installation">Instalation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Site Preview</a></li>
    <li><a href="#license">Licence</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## 📖 About the project

A little expriement with Nest and Kafka to make microservices

### 🔋 Built with:

- [React.js](https://pt-br.reactjs.org)
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

<!-- GETTING STARTED -->

## :scroll: Getting Started

To run the project it is just:

### :warning: Requirements

- npm
  ```sh
  npm install npm@latest -g
  ```
- docker
- docker-compose
  ```sh
  sudo apt-get install docker-compose
  ```

### :gear: Installation

1. Start the docker container
  ```sh
  docker-compose up
  ```

2. Go to /api
  ```sh
  cd ./api
  ```
  and 
  ```sh
  cd ./microserviceA
  ```

3. Install the packages in BOTH directories
  ```sh
  npm install
  ```
  ou
  ```sh
  yarn
  ```
4. Start the application in BOTH directories
  ```sh
  yarn start
  ```

5. Call the api at http://localhost:3500/test/[any-number]
  example: http://localhost:3500/test/1
  Should return the number you pass in the url, in this case is 1

<!-- LICENÇA -->

## :pencil: Licence

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## :telephone_receiver: Contact

Henrique Figueiredo - riquessan@gmail.com

Project Link: [https://github.com/OuthBack/microservice-kafka-nest](https://github.com/OuthBack/microservice-kafka-nest)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/OuthBack/microservice-kafka-nest/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/OuthBack/microservice-kafka-nest/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/OuthBack/microservice-kafka-nest.svg?style=for-the-badge
[forks-url]: https://github.com/OuthBack/microservice-kafka-nest/network/members
[stars-shield]: https://img.shields.io/github/stars/OuthBack/microservice-kafka-nest.svg?style=for-the-badge
[stars-url]: https://github.com/OuthBack/microservice-kafka-nest/stargazers
[issues-shield]: https://img.shields.io/github/issues/OuthBack/microservice-kafka-nest.svg?style=for-the-badge
[issues-url]: https://github.com/OuthBack/microservice-kafka-nest/issues
[license-shield]: https://img.shields.io/github/license/OuthBack/microservice-kafka-nest.svg?style=for-the-badge
[license-url]: https://github.com/OuthBack/microservice-kafka-nest/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/henrique-figueiredo-0396921a7/
[product-screenshot]: .github/screenshot.png

