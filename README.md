# Find-your-DUO
<h4 align="center"> 
	 NextLevelWeek eSports 🚀 Find-your-DUO 
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EliezerGarbin/Find-your-DUO?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EliezerGarbin/Find-your-DUO">
	
  <a href="https://www.linkedin.com/in/eliezergarbin/">
    <img alt="Made by EliezerGarbin" src="https://img.shields.io/badge/made%20by-EliezerGarbin-%2304D361">
  </a>

  <a href="https://github.com/EliezerGarbin/Find-your-DUO/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EliezerGarbin/Find-your-DUO">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/EliezerGarbin/Find-your-DUO/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/EliezerGarbin/Find-your-DUO?style=social">
  </a>
</p>
<p align="center">
<a href="https://insomnia.rest/run/?label=NLW%201.0%20Ecoleta&uri=https%3A%2F%2Fraw.githubusercontent.com%EliezerGarbin%2FNLW-1.0%2Fmaster%2Fbackend%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>
<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>


## 💻 Project

The project is called Find your Duo. It is a platform to find the perfect partner to play your favorite game together, by connecting your [Twitch.tv][twitch] account.


<p align="center">
    <img alt="Example" title="Example" src="https://user-images.githubusercontent.com/59988262/190835730-c9ba4943-3635-40c5-b704-8465f6181d69.jpg" width="600px" />
</p>


## 🚀 Technologies

This project was developed with the following technologies:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Prisma][prisma]
- [SQLite][sqlite]
- [Express][express]
- [Vite][vite]
- [Tailwind][tailwind]
- [Expo][expo]

## 🔖 Layout

To access the layout use [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/).

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [npm][npm] installed on your computer.

From your command line:

### Install Back-end

```bash
# Clone this repository
$ git clone https://github.com/EliezerGarbin/Find-your-DUO.git

# Go into the repository
$ cd Find-your-DUO/server

# Install dependencies
$ npm install

# Run Migrates
$ npx prisma init --datasource-provider SQLite
$ npx prisma migrate dev

# Create datas
$ npx prisma studio

# Start server
$ npm run dev

# running on port 3333
```

### Install Front-end

```bash
# Clone this repository
$ git clone https://github.com/EliezerGarbin/Find-your-DUO.git

# Go into the repository
$ cd Find-your-DUO/web

# Install dependencies
$ npm install

# Run
$ npm run dev

# running on port 5173
```

### Install Mobile

```bash
# Clone this repository
$ git clone https://github.com/EliezerGarbin/Find-your-DUO.git

# Go into the repository
$ cd Find-your-DUO/mobile

# Install dependencies
$ npm install

# Run
$ expo start

# Expo will open, just scan the qrcode on terminal or expo page

```

## 🤔 How to contribute

- Make a fork;
- Create a branck with your feature: `git checkout -b my-feature`;
- Commit changes: `git commit -m 'feat: My new feature'`;
- Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/EliezerGarbin/Find-your-DUO/blob/master/LICENSE) for details.


Made with by Eliézer Garbin :wave: [Get in touch!](https://www.linkedin.com/in/eliezergarbin/)

                                                                                            
                                                                                            
[twitch]: https://www.twitch.tv/
[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[prisma]: https://www.prisma.io/
[sqlite]: https://www.sqlite.org/index.html
[express]: https://expressjs.com/
[vite]: https://vitejs.dev/
[tailwind]: https://tailwindcss.com/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[npm]: https://www.npmjs.com/
[vs]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
