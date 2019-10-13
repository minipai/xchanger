import { AppState, AppAction } from "../types";
import { defaultState, reducer } from "./useMoneyReducer";

const { moneys } = defaultState;

describe("reducer", () => {
  describe("type ADD", () => {
    it("push a default money object to moneys state", () => {
      const actionTypeAdd: AppAction = { type: "ADD" };
      const nextState = reducer(defaultState, actionTypeAdd);
      expect(nextState.moneys.length).toEqual(3);
    });
  });
  describe("type REMOVE", () => {
    it("remove a money object to moneys state by id", () => {
      const actionTypeAdd: AppAction = { type: "REMOVE", id: moneys[0].id };
      const nextState = reducer(defaultState, actionTypeAdd);
      expect(nextState.moneys).toEqual([moneys[1]]);
    });
  });
  describe("type UPDATE", () => {
    it("updates a money object index", () => {
      const actionTypeAdd: AppAction = {
        type: "UPDATE",
        id: moneys[1].id,
        payload: { currency: "USD" }
      };
      const nextState = reducer(defaultState, actionTypeAdd);
      expect(nextState.moneys[1].currency).toEqual("USD");
    });
  });
  describe("type BASE", () => {
    it("updates state.base", () => {
      const actionTypeAdd: AppAction = {
        type: "BASE",
        payload: "XXX"
      };
      const nextState = reducer(defaultState, actionTypeAdd);
      expect(nextState.base).toEqual("XXX");
    });
  });
  describe("type AMOUNT", () => {
    it("updates state.amount", () => {
      const actionTypeAdd: AppAction = {
        type: "AMOUNT",
        payload: 333
      };
      const nextState = reducer(defaultState, actionTypeAdd);
      expect(nextState.amount).toEqual(333);
    });
  });
});
