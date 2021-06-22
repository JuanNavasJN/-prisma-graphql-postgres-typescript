# Backend

### Using:

-   Prisma
-   GraphQL - Apollo Server
-   Typescript
-   PostgreSQL

Following this tutorial:

https://medium.com/geekculture/how-to-setup-full-stack-apollo-gql-codegen-prisma-2-0-typescript-react-part-1-the-backend-e9eae9518dc9

## Commands

```sh
# You’ve made changes to your Prisma schema and want to apply them to your database.
yarn prisma migrate dev --preview-feature

# You’ve made changes to your Prisma schema, and you want to work with these changes in your Typescript code (e.g. you need to autocompletion and IntelliSense to pick up on changes).
yarn prisma generate

# Start Apollo Server and your GraphQL Server/API. Note: For the next command, “yarn generate,”to work, the GraphQL API must be running.
yarn start

# You’ve made changes to your GraphQL schema, and you want to work with them in your Typescript code by having GQL-Codegen do its thing (e.g. change the return type or arguments of resolvers)
yarn generate


```
