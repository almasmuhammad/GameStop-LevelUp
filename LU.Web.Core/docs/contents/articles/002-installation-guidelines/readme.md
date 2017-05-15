
## Prerequisites

Although LU.Web.Core can be run without any development experience, it would be much easier if you already have some. 
The following instructions allow you to run a local copy on your machine.

## Install tools

1.	Install Node.js® and npm (one install) if they are not already on your machine.

    a.	Windows - https://nodejs.org/dist/v6.10.2/node-v6.10.2-x64.msi
    b.	Mac - https://nodejs.org/dist/v6.10.2/node-v6.10.2.pkg 

2.	From a command prompt

    a.	Run “node -v” to verify at least node 6.9.* version exists
    b.	Run “npm -v” to verify at least npm 3.*.* version exists
    c.	Run “npm install -g @angular/cli” to install Angular CLI globally (not for a particular project) (may take time to install npm packages)

## Clone repository and install dependencies

You will need to clone the source code of LU.Web.Core GitHub repository:

```bash
git clone https://github.com/joeydanielallen/gamestopDemo
```
After the repository is cloned, go inside of the repository directory and install dependencies:

```bash
cd LU.Web.Core
npm install
```
This will setup a working copy of LU.Web.Core on your local machine.

## Running local copy

To run a local copy in development mode, execute

```bash
npm start
```

Go to http://localhost:4200 or http://localhost:3000 in your browser.


To run the local copy in production mode and build the sources, execute:

```bash
npm run prebuild:prod && npm run build:prod && npm run server:prod
```

This will clear up your dist folder (where release files are located), generate a release build and start the 
built-in server.
Now you can copy the sources from the `dist` folder and use it with any backend framework or 
simply put it under a web server.

