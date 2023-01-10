import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SearchHeader from "./components/SearchHeader";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </>
  );
}

export default App;
