import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

const queryClient = new QueryClient();

// Global settings
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       cacheTime: 300_000, //5minutes cacheTime has defualt value of 300_000 milliseconds or five minutes and that means,
//       // if a query has no observer, meaning o component is that query that query is considered inactive.
//       //Now, the result of  Inactive queries is removed from the cache after five minutes, this is called garbage collection
//       staleTime: 10 * 1000, //10s this specifies how long the data is considered fresh, our implementaion shows that after 10s, they will become stale.
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
