import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import ContextProvider from "./utils/context/context";
import { StyleSheetManager } from 'styled-components'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
        <Home />
      </StyleSheetManager>
    </ContextProvider>
  </React.StrictMode>,
)
