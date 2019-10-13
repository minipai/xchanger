import { useReducer } from "react";
import { AppState, AppAction } from "../types";
import produce from "immer";

const defaultState = {
  base: "AUD",
  amount: "100",
  moneys: [
    { id: Math.random(), currency: "NZD" },
    { id: Math.random(), currency: "USD" }
  ]
};

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "ADD":
      return produce(state, draft => {
        draft.moneys.unshift({
          id: Math.random(),
          currency: "AUD"
        });
      });

    case "REMOVE":
      return produce(state, draft => {
        draft.moneys = draft.moneys.filter(m => m.id !== action.id);
      });

    case "UPDATE":
      return produce(state, draft => {
        const target = draft.moneys.find(m => {
          return m.id === action.id;
        });
        Object.assign(target, action.payload);
      });

    case "AMOUNT":
      return produce(state, draft => {
        draft.amount = action.payload;
      });

    case "BASE":
      return produce(state, draft => {
        draft.base = action.payload;
      });

    default:
      return state;
  }
};

const useMoneyReducer = () => {
  return useReducer(reducer, defaultState);
};

export { defaultState, reducer };
export default useMoneyReducer;
