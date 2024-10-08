import express from 'express';
import graphqlServer from './graphql';

const app = express();

const startServer = async () => {
    await graphqlServer.start(); // Start the Apollo Server
    graphqlServer.applyMiddleware({ app }); // Then apply the middleware
  };
  
startServer();

export default app;