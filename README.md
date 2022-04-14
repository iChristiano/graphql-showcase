# graphql-showcase
The project is a basic showcase of a GraphQl (Apollo) backend in combination with an Express API. The application includes basic concepts of GraphQl like types, models and resolvers that enable getting data (Query), as well as updating data (Mutation). The showcase is based on a simple use case of an e-commerce application - an order history page, like e.g. Amazon.com includes. Where users can see what products they have already ordered. The basic functionality implemented includes query all orders, query all products, query products per price, query products per id, add new products, and add new product reviews. Apollo is used as the GraphQl server, Apollo is another GraphQl implementation and is very much the same as Facebooks reference implementation, but adds on top a lot of different extra features.

## Project execution
- Download the project
- NPM install all required dependencies
    > npm install 
- Server needs to be started via terminal in project folder
    > npm start
- Open a Browser and enter the provided GraphQl backend endpoint
    > http://localhost:3000/graphql
- The application will forward to the Apollo sandbox tool (a feature rich GraghQl client, including documentation, types, etc. similar to GraphiQl)
    > https://studio.apollographql.com/sandbox/explorer/
- Apollo sandbox tool can be used to query / mutate the implemented GraphQl backend:

    `query ExampleQuery {
    products {
        description
        price
    }
    orders {
        data
    }
    }`

*This showcase application is running on http://localhost:3000/graphql.*