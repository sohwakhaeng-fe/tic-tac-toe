import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };
  return (
    <div className="square" onClick={handleClick}>
      {value}
    </div>
  );
}
