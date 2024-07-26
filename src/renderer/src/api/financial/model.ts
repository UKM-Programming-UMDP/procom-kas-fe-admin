export type FinancialModel = {
  request_id: string;
  amount: number;
  note: string;
  user: {
    npm: string;
    name: string;
    email: string;
  };
  payment: {
    status: {
      id: number;
      name: string;
    };
    type: {
      id: number;
      name: string;
    };
    target_provider: string;
    target_name: string;
    target_number: string;
    evidence: string;
  };
  created_at: string;
  transfered_evidence: string;
};

export type FinancialUpdateModel = {
  status: {
    id: number;
  };
  transfered_evidence: string;
};
