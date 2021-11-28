import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";

function QueryProvider(props) {
  const queryClient = new QueryClient({
    defaultConfig: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 60000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default QueryProvider;
