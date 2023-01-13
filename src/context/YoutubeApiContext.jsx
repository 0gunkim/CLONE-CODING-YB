import { createContext, useContext } from "react";
import { YoutubeClient } from "../api/youtubeClient";
import MockAsync from "../api/mockasync";
import Youtube from "../api/async";

export const YoutubeApiContext = createContext();

const client = new MockAsync();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

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
