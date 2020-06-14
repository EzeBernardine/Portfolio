import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router/Router';
// import {ApolloLink} from "apollo-link"
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
})

const App = () => (
    <ApolloProvider client={client}>
    <Router />
    </ApolloProvider>
  );
ReactDOM.render(<App/>, document.getElementById('root'))

// serviceWorker.unregister();
