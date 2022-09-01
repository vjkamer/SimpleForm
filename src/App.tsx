import React from "react";

import { ConfigurationForm } from "./components/ConfigurationForm";

import "./App.css";
import { ResultForm } from "./components/ResultForm";
import { Configuration } from "./components/types";

export type AppTabs = "configurationForm" | "resultForm";

function App() {
  const [currentTab, setCurrentTab] =
    React.useState<AppTabs>("configurationForm");

  const [configuration, setConfiguration] = React.useState<Configuration>({
    title: "",
    items: [],
    buttons: {
      applyButtonLabel: "Apply",
      cancelButtonLabel: "Cancel",
    },
  });

  return (
    <div>
      {currentTab === "configurationForm" ? (
        <ConfigurationForm
          setConfiguration={setConfiguration}
          setCurrentTab={setCurrentTab}
        />
      ) : (
        <ResultForm
          configuration={configuration}
          setCurrentTab={setCurrentTab}
        />
      )}
    </div>
  );
}

export default App;
