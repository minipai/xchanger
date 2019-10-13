import React, { useContext } from "react";
import { render } from "@testing-library/react";
import AppContext from "src/context/AppContext";
import ButtonAddMoney from "./ButtonAddMoney";

describe("ButtonAddMoney", () => {
  test("click dispatchs 'ADD'", () => {
    const contextMock = { dispatch: jest.fn(), state: null };
    const tree = (
      <AppContext.Provider value={contextMock}>
        <ButtonAddMoney />
      </AppContext.Provider>
    );
    const { getByLabelText } = render(tree);
    const button = getByLabelText("plus");
    button.click();
    expect(contextMock.dispatch).toHaveBeenCalledWith({ type: "ADD" });
  });
});
