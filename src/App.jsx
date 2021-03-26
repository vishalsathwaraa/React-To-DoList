import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToDoList from "./ToDoList";
import Completed from "./Completed";
import { gsap } from "gsap";
import itemContext from "./Context";

function App() {

  
  const [items, setItems] = useState([]);

  useEffect(() => {
    gsap.from("button", { y: 200, duration: 1.5, opacity: 0 });
    gsap.from("input,h3", { y: 200, duration: 1, opacity: 0 });
  }, []);


  return (
    <>
    <itemContext.Provider value={{ items , setItems }}>
      <Router>
        <Switch>
        <Route exact path="/">
            <ToDoList  />
          </Route>
          <Route path="/completed">
            <Completed />
          </Route>
        </Switch>
      </Router>
    </itemContext.Provider>
    </>
  );
}
export default App;
