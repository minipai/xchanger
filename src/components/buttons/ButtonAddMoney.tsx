import React, { useContext } from "react";
import { Button, Icon } from "semantic-ui-react";
import AppContext from "src/context/AppContext";

const ButtonAddMoney = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <Button color="violet" icon onClick={() => dispatch({ type: "ADD" })}>
      <Icon name="plus" aria-label="plus" />
    </Button>
  );
};

export default ButtonAddMoney;
