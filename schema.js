const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    CatBreeds: [Cat!]
    CatByName(catName: ID!): [Cat!]!
  }

  type Cat {
    id: ID!
    name: String!
    origin: String!
    life_span: String!
    wikipedia_url: String
    image: CatImage
    description: String!
    code: Int!
    success: Boolean!
    message: String!
  }

  type CatImage {
    id: ID
    code: Int!
    url: String
    success: Boolean!
    message: String!
  }

`;

module.exports = typeDefs;
