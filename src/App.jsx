import React from "react";
import Header from "./components/Header";
import StyledGlobalStyle from "./style/GlobalStyle";
import MainBit from "./components/MainBit";
import StarBurstList from "./components/SpinnySelect"; // TODO

// import { Route, Routes } from "react-router-dom";

// import APropos from '../pages/aPropos' TODO
// import ErrorPage from '../pages/notFound'

// import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";

// TODO move Main Bit To Here.

// function ErrorFallback({ error }) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre style={{ color: "red" }}>{error.message}</pre>
//     </div>
//   );
// }

function App() {
  return (
    <ErrorBoundary fallback="Error">
      <div>
        <StyledGlobalStyle />

        {/* <Header /> */}
        <main>
          <MainBit />
        </main>

        {/* <StarBurstList /> */}

        {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
            <Route path="/about" element={<APropos />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes> */}

        {/* FOOTER  */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
