import React from "react";
import { Button, Header, Icon, Modal, Input } from "semantic-ui-react";

const MapItems = (props) => {
  const {
    items,
    open,
    checkTodo,
    deleteTodo,
    showTodo,
    newInput,
    handleNewInput,
    updateTodo,
    setOpen,
  } = props;

  return (
    <div>
      {items.map((todo, index) => (
        <div className="todo-container" key={index}>
          <div className="todoid">{(todo.id = index)}</div>
          <div
            className="text"
            style={{
              textDecoration: todo.isCheck ? "line-through" : "none",
            }}
          >
            {todo.list}
          </div>
          <input
            type="checkbox"
            className="icon checkbox"
            onChange={() => checkTodo(todo.id)}
            checked={todo.isCheck}
          />
          <i
            className="close circular icon red inverted "
            onClick={() => deleteTodo(todo.id)}
          ></i>

          {/*-------------------------  Modal Component  ---------------*/}

          <Modal
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={
              <Icon
                name="edit outline"
                className="edit"
                color="purple"
                onClick={() => showTodo(todo.list, todo.id)}
              />
            }
          >
            <Header content="Update ToDo List" />
            <Modal.Content>
              <Input fluid value={newInput} onChange={handleNewInput} />
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => setOpen(false)}>
                <Icon name="remove" /> Cancel
              </Button>
              <Button color="green" onClick={() => updateTodo(newInput)}>
                <Icon name="checkmark" /> Update
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      ))}
    </div>
  );
};
export default MapItems;
