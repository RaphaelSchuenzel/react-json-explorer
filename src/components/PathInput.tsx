import React from "react";
import _ from "lodash";

interface PathInputProps {
  data: string;
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

const PathInput = ({ data, path, setPath }: PathInputProps) => {
  const handlePathInput = (e: any) => setPath(e.target.value);

  try {
    const json = JSON.parse(data);
    const fullPath = _.get(json, path);

    return (
      <div className="input-wrapper">
        <label>Path:</label>
        <input
          id="path-input"
          placeholder="Enter (or select) a path"
          value={path}
          onChange={handlePathInput}
        />

        {typeof fullPath !== "undefined" && (
          <pre>{JSON.stringify(fullPath)}</pre>
        )}
      </div>
    );
  } catch {
    return <></>;
  }
};

export { PathInput };
