export type Money = { id: any; currency: string };
export type AppState = {
  base: string;
  amount: string;
  moneys: Money[];
};
export type AppAction = {
  type: "ADD" | "REMOVE" | "UPDATE" | "AMOUNT" | "BASE";
  payload?: any;
  id?: number;
};
