import React, { useState, useEffect } from "react";

export default function TodoHeader() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      weekday: "long", // Friday
      day: "numeric", // 27
      month: "long", // June
      year: "numeric", // 2025
    });

    setDate(formattedDate);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "20px",
        padding: "10px",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "24px", color: "#333" }}>
        {" "}
        <i style={{ margin: "3px" }} class="fa-solid fa-calendar-days"></i>
        My To-Do List
      </h2>
      <p style={{ margin: "5px 0", color: "#777" }}>{date}</p>
    </div>
  );
}
