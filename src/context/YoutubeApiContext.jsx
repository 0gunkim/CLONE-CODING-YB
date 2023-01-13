import { createContext, useContext } from "react";
import { Youtube } from "../api/async";
import { MockAsync } from "../api/mockasync";

export const YoutubeApiContext = createContext();

// const youtube = new Youtube();
const youtube = new MockAsync();

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
