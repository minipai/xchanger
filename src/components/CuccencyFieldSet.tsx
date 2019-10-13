import React, { useContext } from "react";
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";
import ButtonRemoveMoney from "./buttons/ButtonRemoveMoney";
import AppContext from "src/context/AppContext";
import { countryOptions } from "./const";
import { Money } from "src/types";

interface CuccencyFieldSetProps extends React.HTMLAttributes<HTMLElement> {
  data: Money;
  amount: string;
  disableRemove: boolean;
}

const CuccencyFieldSet = styled((props: CuccencyFieldSetProps) => {
  const { className, amount, data, disableRemove } = props;
  const { dispatch } = useContext(AppContext);

  return (
    <div className={className}>
      <div>
        <Dropdown
          placeholder="Select Currency"
          fluid
          search
          selection
          value={data.currency}
          options={countryOptions}
          onChange={(e, _data) => {
            dispatch({
              type: "UPDATE",
              payload: { currency: _data.value },
              id: data.id
            });
          }}
        />
      </div>
      <div>
        <input value={amount} readOnly />
      </div>
      <div>
        <ButtonRemoveMoney id={data.id} disabled={disableRemove} />
      </div>
    </div>
  );
})`
  border: 0;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
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
    flex-grow: 3;
    flex-basis: 0;
    > input {
      background: rgba(0, 0, 0, 0.2) !important;
      border: 0 solid rgba(0, 0, 0, 0.1) !important;
      color: #fff !important;
      font-size: 1.5rem;
      line-height: 1.5rem;
      height: 100%;
      width: 100%;
      padding: 0.5rem;
      border-radius: 4px;
    }
  }
`;

export default CuccencyFieldSet;
