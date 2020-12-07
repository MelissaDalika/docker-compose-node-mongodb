DOCKER_COMPOSE MONGO & NODEJS EXAMPLE

npm init

npm i express mongoose

Create new folder src with index.js and database.js files

    - connect to server  $ node src/index.js

Create Dockerfile whit node image

    - install https://hub.docker.com/_/node
    - create file .dockerignore for node_modules
    - script package.json start

    $ docker build -t hellonode .
    $ docker images
    $ docker run -p 4000:3000 hellonode

Create docker-compose.yml file

    - install docker compose https://docs.docker.com/compose/install/  Linux
    - insert mongo image https://hub.docker.com/_/mongo
    - links mongo at docker-compose.yml file web services

Require mongoose from database.js file 

    - connect to mongo not localhost

Require database.js from index.js    

$ docker-compose -v
$ docker-compose build
$ docker images
$ docker-compose up

Create routes folder and index.routes.js
    - Router from express

Insert in docker-compose.yml file volumes

Create .gitignore and README.md files

$ docker-compose build
$ docker images
$ docker-compose up

See volumes

$ docker ps
$ docker exec -it exampleapp bash
# ls -a

Install nodemon and babel

$ npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
$ npm install --save-dev nodemon
- Create .babelrc
- Change script to package.json
     "start": "nodemon --exec babel-node index.js",

$ docker-compose stop
$ docker-compose build
$ docker-compose up

Check Browser http://localhost:5000/

Insert docker logs none from mongo image

$ docker-compose build
$ docker-compose up





