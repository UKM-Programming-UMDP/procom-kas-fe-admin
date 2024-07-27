export type BalanceModel = {
  balance: number;
  updated_at: string;
};

export type BalanceHistoryModel = {
  amount: number;
  activity: "Add" | "Substract";
  note: string;
  user: {
    npm: string;
    name: string;
  };
  created_at: string;
};
