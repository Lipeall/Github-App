import React from "react";
import App from "./App";
import { ResetCSS } from "./components/global/resetCSS";
import GithubProvider from "./components/providers/github-provider";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;