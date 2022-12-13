export const TABLE_HEADINGS = {
  cashkick: ["Name", "Type", "Payment", "Payment amount", "Update", "Delete"],
};

export interface CONTRACT {
  contractId: number;
  name: string;
  type: string;
  perPayment: number;
  paymentAmount: number;
}

export interface CONTRACT_INPUT {
  name: string;
  type: string;
  perPayment: number;
  paymentAmount: number;
}

export const CONTRACT_DATA = [
  {
    id: 1,
    name: "Contract1",
    type: "Monthly",
    perPayment: 126722.64,
    paymentAmount: 126722.64,
  },
  {
    id: 2,
    name: "Contract2",
    type: "Monthly",
    perPayment: 126722.64,
    paymentAmount: 60360,
  },
  {
    id: 3,
    name: "Contract3",
    type: "Monthly",
    perPayment: 126722.64,
    paymentAmount: 60360,
  },
  {
    id: 4,
    name: "Contract4",
    type: "Monthly",
    perPayment: 126722.64,
    paymentAmount: 126722.64,
  },
  {
    id: 5,
    name: "Contract5",
    type: "Monthly",
    perPayment: 126722.64,
    paymentAmount: 60360,
  },
  {
    id: 6,
    name: "Contract6",
    type: "Monthly",
    perPayment: 126722.64,
    paymentAmount: 60360,
  },
];

export const contractData = {
  name: "",
  type: "Monthly",
  perPayment: 0,
  paymentAmount: 0,
};

export const ADD_FORM_HEADING = "Enter Contract Details";

export const LOGOUT = "Logout";

export const ADD_CONTRACT = "Add contract";

export const YOUR_CONTRACTS = "Your Contracts";

export const BACK = "Go to contracts";
