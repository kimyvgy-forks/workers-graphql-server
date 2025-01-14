import PokemonAPI from '../datasources/pokemon-api';

export {};

declare global {
  type ApolloDataSources = { pokemonAPI: PokemonAPI };
  type ApolloContext = { dataSources: ApolloDataSources };

  interface CorsOptions {
    allowCredentials?: string | undefined;
    allowHeaders?: string | undefined;
    allowOrigin?: string | undefined;
    allowMethods?: string | undefined;
  }

  interface GraphQLOptions {
    // Set the path for the GraphQL server
    baseEndpoint: string;

    // Set the path for the GraphQL playground
    // This option can be removed to disable the playground route
    playgroundEndpoint?: string;

    // When a request's path isn't matched, forward it to the origin
    forwardUnmatchedRequestsToOrigin?: boolean,

    // Enable debug mode to return script errors directly in browser
    debug?: boolean;

    // Enable CORS headers on GraphQL requests
    // Set to `true` for defaults (see `utils/setCors`),
    // or pass an object to configure each header
    // cors: {
    //   allowCredentials: 'true',
    //   allowHeaders: 'Content-type',
    //   allowOrigin: '*',
    //   allowMethods: 'GET, POST, PUT',
    // },
    cors?: CorsOptions;

    // Enable KV caching for external REST data source requests
    // Note that you'll need to add a KV namespace called
    // WORKERS_GRAPHQL_CACHE in your wrangler.toml file for this to
    // work! See the project README for more information.
    kvCache?: boolean;
  }
}
