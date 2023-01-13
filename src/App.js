import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SearchHeader from "./components/SearchHeader";
import { YotubeApiProvider } from "./context/YoutubeApiContext";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader />
      <YotubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YotubeApiProvider>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </>
  );
}

export default App;
