import React from "react";

const CompletedTodo = (props) => {
  const { completed } = props;
  console.log(completed);

  return (
    <div className="completed-todo">
      <ol>
        {completed
          .filter((val, index) => completed.indexOf(val) === index)
          .map((val) => (
            <li>{val}</li>
          ))}
      </ol>
    </div>
  );
};

export default CompletedTodo;
