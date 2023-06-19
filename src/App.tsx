import { useState } from "react";
import "./styles.css";

import { JSONInput } from "./components/JSONInput";
import { JSONViewer } from "./components/JSONViewer";
import { PathInput } from "./components/PathInput";

export default function App() {
  const [path, setPath] = useState<string>("");
  const [data, setData] = useState<string>("");

  return (
    <div className="json-explorer">
      <JSONInput data={data} setData={setData} />

      <section>
        <PathInput data={data} path={path} setPath={setPath} />
        <JSONViewer data={data} setPath={setPath} />
      </section>
    </div>
  );
}
