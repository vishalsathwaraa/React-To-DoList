import { useState, useContext } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MapItems from "./MapItems";
import Form from "./Form";
import itemContext from "./Context";

const ToDoList = () => {

  const { items, setItems } = useContext(itemContext);
  const [input, setInput] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [newInput, setNewInput] = useState("");
  const [curId, setCurId] = useState("");


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

      setItems((items) => [...items, todo]);
    }
    setInput("");
  };

  //<--------------------- Delete Todo --------------------------->

  const deleteTodo = (id) => {

    setItems(items.filter(val => val.id !== id))}

  //<--------------------- Toggle Check Todo --------------------------->

  const checkTodo = (id) => {
    setItems((todo) => {
      return todo.map((val) => {
        if (val.id === id) {
          val.isCheck = true;
        }
        return val;
      });
    });
  };


  // <--------------------- Show Todo --------------------------->

  const editTodo = (list, id) => {
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
    setItems(todo => todo.map((val) => {
        if (curId === val.id) {
          val.list = newInput;
        }
        return val;
      }
    ));
  };

  //<--------------------- Empty Todo --------------------------->

  const emptyTodo = () => {
    setItems([]);
  };

  return (
    <section>
      <div className="container">
        <Form addTodo={addTodo} handleInput={handleInput} input={input} />

        <MapItems
          items={items}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          newInput={newInput}
          handleNewInput={handleNewInput}
          updateTodo={updateTodo}
          setOpen={setOpen}
          open={open}
        />

        <div className="btn">
          {items.length > 0 && (
            <Button
              animated
              className="remove-all"
              size="tiny"
              circular
              color="red"
              invert
              onClick={emptyTodo}
            >
              <Button.Content visible>Delete All Todo</Button.Content>
              <Button.Content hidden>
                <Icon name="delete" />
              </Button.Content>
            </Button>
          )}
          {items.length > 0 && (
            <Link to="/completed">
              <Button animated size="tiny" circular color="purple">
                <Button.Content visible>Completed task</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToDoList;
