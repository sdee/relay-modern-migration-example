# Migrating to Relay Modern

This repository contains 2 branches: 

- **classic**: Relay Classic
- **modern**: Relay Modern

You can read the full tutorial describing the migration [here](https://www.graph.cool/docs/tutorials/migrating-to-relay-modern-eijooto4se/).

## Example ([Live demo](https://demo-react-relay-todo-example.netlify.com) & [GraphQL Playground](https://api.graph.cool/relay/v1/cj1nq71xyfabv0199bp3a7hhf))

![](http://imgur.com/75LEao7.gif)

## Quickstart

### 1. Clone example repository

```sh
git clone https://github.com/graphcool-examples/react-relay-todo-quickstart.git
cd react-relay-todo-quickstart
```

### 2. Create GraphQL API with [`graphcool`](https://www.npmjs.com/package/graphcool)

```sh
# Install Graphcool CLI
npm install -g graphcool

# Create a new project based on the Todo schema
graphcool init --schema http://graphqlbin.com/todo.graphql
```

This creates a GraphQL API for the following schema:

```graphql
type Todo {
  text: String!
  complete: Boolean!
}
```

### 3. Connect the app with your GraphQL API

Copy the `Relay API` endpoint to `./src/app.js` as the argument for the constructor of `Relay.DefaultNetworkLayer`, replacing `__RELAY_API_ENDPOINT__ `:

```js
// replace `__RELAY_API_ENDPOINT__ ` with the endpoint from the previous step
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('__RELAY_API_ENDPOINT__')
);
```

Further, open `package.json` and paste the endpoint as the value for the `url` key, again replacing `__RELAY_API_ENDPOINT__ `:

```js
"graphql": {
  "request": {
    "url": "__RELAY_API_ENDPOINT__"
  }
},
```

### 4. Install dependencies & run locally

```sh
yarn install
yarn start # open http://localhost:3000 in your browser
```

## Next steps

* [Advanced GraphQL features](https://www.graph.cool/docs/tutorials/advanced-features-eath7duf7d/)
* [Authentication & Permissions](https://www.graph.cool/docs/reference/authorization/overview-iegoo0heez/)
* [Implementing business logic with serverless functions](https://www.graph.cool/docs/reference/functions/overview-boo6uteemo/)

## Help & Community [![Slack Status](https://slack.graph.cool/badge.svg)](https://slack.graph.cool)

Join our [Slack community](http://slack.graph.cool/) if you run into issues or have questions. We love talking to you!

![](http://i.imgur.com/5RHR6Ku.png)
