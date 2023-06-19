import React from "react";

interface JSONInputProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const JSONInput = ({ data, setData }: JSONInputProps) => {
  const handleDataInput = (e: any) => setData(e.target.value);

  return (
    <div className="input-wrapper">
      <label>JSON:</label>
      <textarea
        id="json-input"
        placeholder="Enter a valid JSON"
        value={data}
        onChange={handleDataInput}
      />
    </div>
  );
};

export { JSONInput };
