import { Button, Input } from "semantic-ui-react";


const Form = (props) => {

const {addTodo,handleInput,input} = props

  return (
    <div>
    <h3>To-Do List</h3>
      <form onSubmit={addTodo}>
        <Input
          value={input}
          onChange={handleInput}
          onKeyPress={(event) => handleInput(event)}
          placeholder="Add Items..."
        />
        <Button content="Add" onClick={addTodo} />
      </form>
    </div>
  );
};

export default Form;
