# clubtree-react
Startup for club organization web app

## Technologies Used
* [MongoDB](https://www.mongodb.com/)
* [ExpressJS](https://expressjs.com/)
* [React](https://angularjs.org/)
* [NodeJS](https://nodejs.org/en/)

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

## Directory Structure

Effectively, the front-end and back-end can be treated as separate repositories. This is why you will see both folders containing separate `package.json` files. You can mostly develop in one environment without needing the other. The exception is when the front-end needs to use the REST API to get data from the back-end. The back-end will need to be running for that to happen.

* Front-end code is in the `client` folder. The contents of this folder was initially created with `create-react-app`. Read more about how it is organized and how it helps us by reading the [documentation](https://github.com/facebookincubator/create-react-app) on its GitHub.
* Back-end code is in the `server` folder. It was initially created with `express-generator`. To know more about what it did, read the [documentation](https://expressjs.com/en/starter/generator.html) on its website. You probably never have to touch anything in the `bin` folder.

## Installation

Before you can get the the full stack up and running, you will need to do the following:

1. Download and install [NodeJS](https://nodejs.org/en/).
2. Execute `npm install` in the root folder.
3. Run `npm install -g gluestick-cli` in the root folder.
4. Execute `npm install` in the `server` folder.

## Front-End Development

1. In the root folder, execute `gluestick start`.
2. A bunch of lines will perform some checking and whatnot.  Wait until you see that compilation on the server has successfully completed!
3. Your default browser should open automatically and take you to `localhost:8888`. You should see the homepage.

<!-- Note: If you need to use the REST API, follow the instructions to start the back-end first, then follow the instructions to start the front-end. When you get to Step 3, it will ask you if you want to use a different port. Type `yes` and the browser should automatically open to `localhost:3001`. -->

## Back-End Development

1. Open a new command line and go to the `server` folder.
2. Execute `npm start`.
3. Open a browser and go to `localhost:3000`. You should see the following response:
```
{"error":{"code":404,"message":"Not Found"}}
```

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

## FAQ

### How come I didn't need to start a MongoDB server? Where's the data?
We're currently using a cloud-hosted MongoDB server with [mLab](https://mlab.com/). Since we're still in development, the free tier that they have is good enough for us. Right now, the connection string is hard-coded, so even though developers are booting up instances of the Clubtree server on their own computers, they'll all be using the same MongoDB server - so be careful with the data! Someone else could be using it.
