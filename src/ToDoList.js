import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import CompletedTodo from "./CompletedTodo";
import MapItems from "./MapItems";
import Form from "./Form";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [newInput, setNewInput] = useState("");
  const [curId, setCurId] = useState("");
  const [showCheck, setShowCheck] = useState(false);
  const [btncontent, setBtnContent] = useState("Completed Task");

  // console.log(items[0]);

  const handleInput = (e) => {
    // console.log(input.match(/^\s*$/));
    setInput(e.target.value);
  };

  //<--------------------- Add Todo --------------------------->

  const addTodo = (e) => {
    e.preventDefault();

    if (!input.match(/^\s*$/)) {
      const todo = {
        id: null,
        list: input,
        isCheck: false,
      };

      setItems([...items].concat(todo));
    }
    setInput("");
  };

  //<--------------------- Delete Todo --------------------------->

  const deleteTodo = (id) => {
    setItems((todo) => {
      return todo.filter((val) => {
        return val.id !== id;
      });
    });
  };

  //<--------------------- Toggle Check Todo --------------------------->

  const checkTodo = (id) => {
    setItems((todo) => {
      return todo.map((val) => {
        if (val.id === id) {
          val.isCheck = true;

          setCompleted(
            [...completed].concat(
              items.filter((val) => val.isCheck).map((val) => val.list)
            )
          );
        }
        return val;
      });
    });
  };

  //<--------------------- Show Check Todo --------------------------->

  const showChecked = () => {
    setShowCheck(!showCheck);
    setBtnContent(
      btncontent === "Completed Task" ? "Show All Todo" : "Completed Task"
    );
  };

  // <--------------------- Show Todo --------------------------->

  const showTodo = (list, id) => {
    setisOpen(true);
    setNewInput(list);
    setCurId(id);
  };

  const handleNewInput = (e) => {
    setNewInput(e.target.value);
  };

  //<--------------------- Update Todo --------------------------->

  const updateTodo = () => {
    setOpen(false);
    setItems((todo) => {
      return todo.map((val) => {
        if (curId === val.id) {
          val.list = newInput;
        }
        return val;
      });
    });
  };

  //<--------------------- Empty Todo --------------------------->

  const emptyTodo = () => {
    setCompleted([]);
    setItems([]);
  };

  return (
    <section>
      <div className="container">
        <Form addTodo={addTodo} handleInput={handleInput} input={input} />

        {showCheck ? (
          <CompletedTodo
            setCompleted={setCompleted}
            items={items}
            completed={completed}
          />
        ) : (
          <MapItems
            items={items}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            showTodo={showTodo}
            newInput={newInput}
            handleNewInput={handleNewInput}
            updateTodo={updateTodo}
            setOpen={setOpen}
            open={open}
          />
        )}

        <div className="btn">
          {items != ''  && 
            <Button
              content="Delete All"
              className="remove-all"
              size="tiny"
              circular
              color="red"
              invert
              onClick={emptyTodo}
            />
          }
          {items != '' && (
            <Button
              content={btncontent}
              className="showCheck"
              size="tiny"
              circular
              color="red"
              onClick={showChecked}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ToDoList;
