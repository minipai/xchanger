import React, { useContext } from "react";
import { render } from "@testing-library/react";
import AppContext from "src/context/AppContext";
import ButtonRemoveMoney from "./ButtonRemoveMoney";

describe("ButtonRemoveMoney", () => {
  test("click dispatchs 'REMOVE'", () => {
    const contextMock = { dispatch: jest.fn(), state: null };
    const tree = (
      <AppContext.Provider value={contextMock}>
        <ButtonRemoveMoney id={123} />
      </AppContext.Provider>
    );
    const { getByLabelText } = render(tree);
    const button = getByLabelText("minus");
    button.click();
    expect(contextMock.dispatch).toHaveBeenCalledWith({
      type: "REMOVE",
      id: 123
    });
  });
});
