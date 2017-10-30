# clubtree-react
Startup for club organization web app

## Framework and Technologies Used
* [Gluestick](https://github.com/TrueCar/gluestick)
* [React](https://reactjs.org/)
* [Redux](http://redux.js.org/)
* [Boostrap](http://getbootstrap.com/)

## Development Tools

### Git

First and foremost, you'll need to download a version control system to pull and push changes. You can always use a git command line, but if you need a GUI for it, here are some options for you to choose from.

* [GitKraken](https://www.gitkraken.com/)
* [SourceTree](https://www.sourcetreeapp.com/)

### Code Editor

There's lots out there, but here are a few that our team enjoys using. Find one that suits your style! Bonus points if it's Vim ;-)

* [Atom](https://atom.io/)
* [Brackets](http://brackets.io/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Installation

Before you can get the the client build and running, you will need to do the following:

1. Download and install [NodeJS](https://nodejs.org/en/).
2. Execute `npm install` in the root folder.
3. Run `npm install -g gluestick-cli` in the root folder.

## How to Development

1. In the root folder, execute `gluestick start`.
2. A bunch of lines will perform some checking and whatnot. Wait until you see that compilation on the server has successfully completed!
3. Open up the browser and go to the `localhost:8880`. You should see the homepage.

## How to Deploy to Heroku

Normally, you wouldn't commit build files to the repository, but because the Heroku Buildpack hasn't been configured yet, we need to do it locally on the machine.

If you are using a Windows OS, you will need to install [additional software](https://stackoverflow.com/questions/21365714/nodejs-error-installing-with-npm) and/or the [Visual Studio 2015 C++ Standalone Compilter](http://landinghub.visualstudio.com/visual-cpp-build-tools) before you can run `npm install`. It is worth noting that you might get better luck with `npm install --msvs_version=2015` instead of setting the enviroment variable, when you get to that step.

1. Generate the build files on your local machine.

    If using Powershell, run these commands.
    ```
    Set-Item ENV:NODE_ENV "production"
    gluestick start
    ```

    If using Bash, run these commands.
    ```
    NODE_ENV=production gluestick build
    ```

2. Push the build files to a branch.

3. Go to the Heroku website. Make sure that the following Settings > Config Variables are set:

| Key                 | Value                                        |
|---------------------|----------------------------------------------|
| CLUBTREE_SERVER_URL | https://intense-retreat-44335.herokuapp.com/ |
| NODE_ENV            | production                                   |

4. Go to Deploy > Manual Deploy. Choose the branch that you want to deploy (e.g. the one with the new build files), and click Deploy Branch.

5. Wait a few minutes, and then go to https://intense-springs-61886.herokuapp.com to see the new server.

Note that the Clubtree API server also needs to be deployed to Heroku in order to have a fully functioning website.

## Helpful Tools

You don't have to download these programs now, but once you start getting comfortable with writing code, they might be useful for debugging issues.

* [Postman](https://www.getpostman.com/) - This can help you explore / troubleshoot Clubtree's REST API.
* [Robo3T](https://robomongo.org/) - This can help you explore / troubleshoot the MongoDB database.

## IMPORTANT!  If you are contributing

**Note, this is buggy.  Lol.**
What we're gonna try do this time around is make sure our code is well-formatted and not error-prone.  So before you make a pull request, be sure to run these three commands and ensure that they show up with no errors:

1.  `npm run format`.  This basically uses the `prettier` package to make your code look nice.
2.  `npm run lint`.  Makes sure your Javascript follows ES6 guidelines.
3.  `npm run flow`.  Makes sure your flow types work, so the wrong types aren't being passed around and causing errors.  If you don't know how flow works, I suggest reading about it.
