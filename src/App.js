import React from "react";
import Gamer from "./Gamer";
import { Provider } from "react-redux";
import store from "./redux/store";
import QueryProvider from "./hooks/QueryProvider";

function App() {
  return (
    <Provider store={store}>
      <QueryProvider>
        <Gamer />
      </QueryProvider>
    </Provider>
  );
}

export default App;
