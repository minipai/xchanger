import React, { useContext } from "react";
import Big from "big.js";
import styled from "styled-components";
import { Input, Dropdown } from "semantic-ui-react";
import ButtonAddMoney from "./buttons/ButtonAddMoney";
import AppContext from "src/context/AppContext";
import { countryOptions } from "./const";

interface CuccencyFieldSetProps extends React.HTMLAttributes<HTMLElement> {}

const CuccencyFieldSet = styled((props: CuccencyFieldSetProps) => {
  const { className } = props;
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className={className}>
      <div>
        <Dropdown
          value={state.base}
          onChange={(e: any, data) => {
            dispatch({
              type: "BASE",
              payload: data.value
            });
          }}
          placeholder="Select Currency"
          fluid
          search
          selection
          options={countryOptions}
        />
      </div>
      <div>
        <Input
          placeholder="How much?"
          type="number"
          value={`${state.amount}`}
          onChange={(e: any) => {
            dispatch({
              type: "AMOUNT",
              payload: Big(e.target.value || "0").toString()
            });
          }}
        />
      </div>
      <div>
        <ButtonAddMoney />
      </div>
    </div>
  );
})`
  border: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 4px;
  margin: 0 0 1rem;

  > div {
    flex-shrink: 0;
    padding: 5px;

    > div {
      width: 100%;
    }
  }
  > div:nth-child(1) {
    width: 25%;
  }
  > div:nth-child(2) {
    flex-basis: 0;
    flex-grow: 3;
  }
`;

export default CuccencyFieldSet;
