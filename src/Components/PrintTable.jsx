import { useEffect, useState } from "react";

export default function PrintTable({ calculateTable }) {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    console.log("Print Table runs!");
    setRows(calculateTable());
  }, [calculateTable]);
  return (
    <div>
      {rows.map((row, index) => (
        <p key={index}>{row}</p>
      ))}
    </div>
  );
}
