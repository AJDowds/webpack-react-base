import * as React from "react";
import Testo from "webpack-react-base-auth";

interface AppInterface {
  title: string;
}

const App: React.FC<AppInterface> = ({ title }) => {
  return (
    <div>
      <h1>Hello + {title}</h1>
      <Testo />
    </div>
  );
};

export default App;
