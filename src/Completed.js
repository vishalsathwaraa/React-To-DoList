import { useContext } from "react";
import itemContext from "./Context";
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router";

const Completed = () => {
  const history = useHistory();
  const { items } = useContext(itemContext);
  let checkedItem = items.filter(val => val.isCheck === true);

  return (
    <div className="completed">
      <div className="completed-todo">
        {checkedItem.length > 0 ? (
          <h2>Completed Task</h2>
        ) : (
          <h2>No Completed Task</h2>
        )}

        <ol>
          {checkedItem.map((val, index) => (
            <li key={index}>{val.list}</li>
          ))}
        </ol>
        <Button
          animated
          color="purple"
          size="tiny"
          circular
          onClick={() => history.push("/")}
        >
          <Button.Content visible>Show All Todo</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </div>
    </div>
  );
};

export default Completed;
