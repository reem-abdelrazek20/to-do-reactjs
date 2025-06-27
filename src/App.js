import React, { useState, useEffect } from "react";
import Todo from "./components/to-do";
import Clock from "./components/clock";
import "./styles.css";

export default function App() {
  return (
    <section>
      <Clock />
      <Todo />
    </section>
  );
}
