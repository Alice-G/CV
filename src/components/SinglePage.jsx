import React from "react";
import Header from "./Header";
import MainBit from "./MainBit";
import Footer from "./Footer";

// TODO move Main Bit To Here.

function SinglePage() {
  return (
    // <ErrorBoundary fallback="Error">
    <div>
      <Header />
      <main>
        <MainBit />
      </main>
      <Footer />
    </div>
    // </ErrorBoundary>
  );
}

export default SinglePage;
