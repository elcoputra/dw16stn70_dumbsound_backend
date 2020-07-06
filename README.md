

# Welcome to Dumbsound Backend!

  

Dumbsound is a music streaming service, providing music from various countries, artists

and record labels.

[Go to frontend](https://github.com/elcoputra/dw16stn70_dumbsound_frontend)

## Current Status

PROTOTYPE

  

## Technology

  

Create React App, Express.js, Material UI, Moment.Js, Hapi Joi, React Jingke Music Player, Redux, Redux Thunk, Axios, Bycript, Cors, Dotenv, Jsonwebtoken, Sequelize, MariaDB.

  ## Depedency
  - node
  - npm

## Missing feature

- ~~Delete Music~~
- ~~Search Music~~
- ~~Update Music~~

# Short Documentation
### Starting project on your computer

 - Clone or fork this project.
 - Install all packge, in terminal `$ npm install` on project folder.
- And start project with `$ npm start` or `$ npm test` on project folder.

### Setup project and database for local machine

on your_project/config/config.json edit your ***development*** data

    "username":  "your_database_usernama",
    "password":  "your_database_password",
    "database":  "dumbsound-dev", // or you can insert your own database
    "host":  "127.0.0.1", // your localhost
    "dialect":  "mysql", // or you can change to "postgres" if using PostgresSQL
- make .env file on root project and add `TOKEN_KEY=YOUR_TOKEN_HERE`, change **YOUR_TOKEN_HERE** with your token.
 - for local mysql stack recomended use **xampp** or you can install derectly database from [MariaDB](https://mariadb.org/).
 - or if using postgres recomended use Lapp from **bitnami** or you can install derectly database from [PostgreSQL](https://www.postgresql.org/).
 - run `$ npx sequelize-cli db:migrate` to create default table for
   dumbsound if you get error **" If your database doesn't exists yet"**
   run `$ npx sequelize-cli db:create`.
 - now generate data default for testing `$ npx sequelize-cli db:seed:all`.
 - now **start** your project again, now the dumbsound project has basic
   data in datadatabse.

### Setup project and database for Heroku
#### Project
 - Go to dashboard heroku, and create new app.
 - Go to Resources tab and add Add-ons, and add Heroku Postgres or JawsDB mysql for using mysql.
 - now go to setting and see **Config Vars** click the button **Reveal Config Vars** for see all vars available.
   - DATABASE_URL is your database url it will consume by `"use_env_variable":  "DATABASE_URL",` on your_project/config/config.json on ***production***.
   - add key `NODE_ENV` with value `production`, because we will use production state for deployment.
   - add key `TOKEN_KEY` with value `YOUR_TOKEN_HERE`, it will consume by jwt.
   - add key `PORT` with value `5000`, or you can use another port if you wish.
   - Deploy your project, go to tab Deploy on Heroku and look at the Deployment method section.

And now the dumbsound project is successfully deployed (I hope 🤓).

#### Database
If the dumbsound project has been successfully deployed, now let's make the database work properly

- If you deploy project with heroku cli you already have the cli on your machine, but if you deploy use github, you must install heroku cli first [Download Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line).
- Now login, in terminal your project `$ heroku login`
- now run heroku bash `$ heroku run bash `
- migrating `$ npx sequelize-cli db:migrate`
- running Seeds `$ npx sequelize-cli db:seed:all`

Now your project ready to use, yeayyyy...... 😆
