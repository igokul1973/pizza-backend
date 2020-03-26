# Pizza App - GraphQL API

This app is a result of a 1-week test assignment I made for one of the companies. It represents a back-end for a Pizza store frontend where a user can make an order.

The app uses the [GRAND-stack](https://grandstack.io/) and specifically neo4j-graphql.js package that translates the GraphQL schema into a set of Cypher requests upon the application initialization as well as deploys in development environment the GUI for making the test requests. 

For your convenience, this app is hosted at Heroku at https://pizza-delivery-business-back.herokuapp.com

## Quick Start

Install dependencies:

```
yarn install
```

Start the GraphQL service:

```
yarn start
```

This will start the GraphQL service (by default on localhost:4000) where you can issue GraphQL requests or access GraphQL Playground in the browser:

![GraphQL Playground](img/graphql-playground.png)

## Configure

Set your Neo4j connection string and credentials in `.env`. For example:

*.env*

```
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=letmein
```

Note that grand-stack-starter does not currently bundle a distribution of Neo4j. You can download [Neo4j Desktop](https://neo4j.com/download/) and run locally for development, spin up a [hosted Neo4j Sandbox instance](https://neo4j.com/download/), run Neo4j in one of the [many cloud options](https://neo4j.com/developer/guide-cloud-deployment/), or [spin up Neo4j in a Docker container](https://neo4j.com/developer/docker/). Just be sure to update the Neo4j connection string and credentials accordingly in `.env`.

## Deployment

You can deploy to any service that hosts Node.js apps, but [Zeit Now](https://zeit.co/now) is a great easy to use service for hosting your app that has an easy to use free plan for small projects. 

To deploy your GraphQL service on Zeit Now, first install [Now Desktop](https://zeit.co/download) - you'll need to provide an email address. Then run

```
now
```

to deploy your GraphQL service on Zeit Now. Once deployed you'll be given a fresh URL that represents the current state of your application where you can access your GraphQL endpoint and GraphQL Playgound. For example: https://grand-stack-starter-api-pqdeodpvok.now.sh/

## Seeding The Database

Optionally you can seed the GraphQL service by executing mutations that will write sample data to the database:

```
yarn run seedDb
```
