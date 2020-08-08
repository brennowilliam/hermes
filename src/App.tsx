import * as React from "react";
import "./styles.css";

import { Hermes } from "./hermes/core/index";

export default function App() {
  React.useEffect(() => {
    const hermes = new Hermes({
      queryKey: "assets",
      config: { retry: 3, timeout: 5000, cache: 30000 }
    });

    const hermesTwo = new Hermes();
    console.log(hermesTwo);
    const request = hermes.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log({ request });
  }, []);

  return (
    <div className="App">
      <h1>Network Tasks with Hermes</h1>

      <div id="http-demo-container">{renderGetView()}</div>
    </div>
  );
}

const renderGetView = () => {
  return <div id="get-method">this is the get view</div>;
};
