import { createContext, useContext } from "react";
import { yclient } from "../api/youtube";
import MockAsync from "../api/mockasync";
import YoutubeAsync from "../api/async";

export const YoutubeApiContext = createContext();

const client = new MockAsync();
// const client = new yclient();
const youtube = new YoutubeAsync(client);

export function YotubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
