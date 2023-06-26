import React from "react";
import StyledGlobalStyle from "./style/GlobalStyle";
import SinglePage from "./components/SinglePage";
import ErrorPage from "./components/Error404";

import { Route, Routes } from "react-router-dom";

// import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";

// TODO move Main Bit To Here.

function App() {
  return (
    <ErrorBoundary fallback="Error">
      <div>
        <StyledGlobalStyle />

        <Routes>
          <Route path="/" element={<SinglePage />} />
          {/* <Route path="/logement/:id" element={<FicheLogement />} /> */}
          {/* <Route path="/about" element={<APropos />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
