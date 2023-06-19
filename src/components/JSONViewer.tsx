import React from "react";

interface JSONViewerProps {
  data: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

const JSONViewer = ({ data, setPath }: JSONViewerProps) => {
  // update path on key click
  const handleKeyClick = (path: string) => setPath(path);

  // recursively render JSON data
  const renderJSONData = (data: any, parentPath = "") => {
    const isArray = Array.isArray(data);
    const entries = Object.entries(data);

    return (
      <>
        {isArray ? "[" : "{"}

        <div className="indent">
          {entries.map(([key, value], index) => {
            const currentPath = parentPath
              ? isArray
                ? `${parentPath}[${key}]`
                : `${parentPath}.${key}`
              : key;

            return (
              <span className="json-entry" key={key}>
                {!isArray && (
                  <span className="json-key">
                    <span onClick={() => handleKeyClick(currentPath)}>
                      {key}
                    </span>
                    :
                  </span>
                )}

                {typeof value === "object" && value !== null ? (
                  renderJSONData(value, currentPath)
                ) : (
                  <span className="json-value">{JSON.stringify(value)}</span>
                )}

                {index < entries.length - 1 ? "," : ""}
              </span>
            );
          })}
        </div>

        {isArray ? "]" : "}"}
      </>
    );
  };

  try {
    const json = JSON.parse(data);

    return <pre className="json-viewer">{renderJSONData(json)}</pre>;
  } catch {
    return <pre className="json-viewer">invalid json</pre>;
  }
};

export { JSONViewer };
