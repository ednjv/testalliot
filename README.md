# Technical Alliot Test

A simple application based on the Google Maps API that displays weather information when you click on a location in the map.

## Pre-Requisites
- Node.js (>= 10.0.0)
- Docker
- Docker Compose

## Recommended

Use [NVM](https://github.com/creationix/nvm) to install Node.js and NPM, inside the root of the project execute:

```
$ nvm use
```

## Setup
- Clone this repo
- Install the dependencies on both frontend and backend folders by executing

```
$ npm install
```
- To setup the environment variables needed, create a `.env` file inside of the `frontend` and `backend` folders based on each `.env-template` file that's inside the respective folders
- Then on the root folder execute:

```
$ docker-compose up
```

By default the application starts at http://localhost:4200 and the API at http://localhost:3000
