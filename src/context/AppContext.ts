import { createContext } from "react";

type AppContextValue = { state: any; dispatch: (action: any) => any };
const AppContext = createContext<AppContextValue>({
  state: null,
  dispatch: () => {}
});

export default AppContext;
