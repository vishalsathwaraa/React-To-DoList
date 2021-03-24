import React, { useEffect } from "react";
import ToDoList from "./ToDoList";
import { gsap } from "gsap";

function App() {

  useEffect(() => {
    gsap.from("button , h3", { y: 200, duration: 1, opacity: 0 });
    gsap.from("input", { x: 200, duration: 1.5, opacity: 0 });
  }, []);

  return <ToDoList />;

}
export default App;
