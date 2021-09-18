<template>
  <div class="hide-scrollbar">
    <HeaderBar />
    <Router-View />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>

<script lang="ts">
import { createClient, provideClient, dedupExchange, fetchExchange } from '@urql/vue';
import { Cache, cacheExchange, QueryInput } from '@urql/exchange-graphcache';
import HeaderBar from "./components/HeaderBar.vue";
import { LoginMutation, LogoutMutation, MeDocument, MeQuery, RegisterMutation } from './generated/graphql';

function updateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}

export default {
  name: "App",
  components: { HeaderBar },
  setup () {
    const client = createClient({
      url: process.env.VUE_APP_BACKEND_URL,
      fetchOptions: {
        credentials: "include"
      },
      exchanges: [dedupExchange, cacheExchange({
        updates: {
          Mutation: {
            login: (_result, args, cache, info) => {
              updateQuery<LoginMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.login.errors) {
                    return query
                  } else {
                    return {
                      me: result.login.user
                    }
                  }
                }
              );
            },
            register: (_result, args, cache, info) => {
              updateQuery<RegisterMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.register.errors) {
                    return query
                  } else {
                    return {
                      me: result.register.user
                    }
                  }
                }
              );
            },
            logout: (_result, args, cache, info) => {
              updateQuery<LogoutMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                () => ({ me: null })
              );
            }
          },
        }
      }), fetchExchange]
    });
    provideClient(client);
  }
};
</script>
