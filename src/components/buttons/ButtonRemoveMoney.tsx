import React, { useContext } from "react";
import { Button, Icon } from "semantic-ui-react";
import AppContext from "src/context/AppContext";

type ButtonAddMoneyProps = { disabled?: boolean; id: number };
const ButtonAddMoney = ({ disabled, id }: ButtonAddMoneyProps) => {
  const { dispatch } = useContext(AppContext);
  return (
    <Button
      disabled={disabled}
      inverted
      color="violet"
      icon
      onClick={() => dispatch({ type: "REMOVE", id })}
    >
      <Icon name="minus" aria-label="minus" />
    </Button>
  );
};

export default ButtonAddMoney;
