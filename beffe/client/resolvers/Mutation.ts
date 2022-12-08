import { AuthenticationError } from "apollo-server";
import { Contract, DeleteRequest } from "../../proto/contract_pb";
import { client } from "../utils";

export const Mutation = {
  createContract: (parent: any, { contractInput }: any, { user }: any) => {
    if (!user) {
      throw new AuthenticationError("Invalid credentials");
    } else {
      return new Promise<Contract.AsObject>((resolve, reject) => {
        const request = new Contract();
        request.setName(contractInput.name);
        request.setType(contractInput.type);
        request.setPerPayment(contractInput.perPayment);
        request.setPaymentAmount(contractInput.paymentAmount);
        client.saveContract(request, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.toObject());
          }
        });
      });
    }
  },

  updateContract: (
    parent: any,
    { contractId, contractInput }: any,
    { user }: any
  ) => {
    if (!user) {
      throw new AuthenticationError("Invalid credentials");
    } else {
      return new Promise<Contract.AsObject>((resolve, reject) => {
        const request = new Contract();
        request.setContractId(contractId);
        request.setName(contractInput.name);
        request.setType(contractInput.type);
        request.setPerPayment(contractInput.perPayment);
        request.setPaymentAmount(contractInput.paymentAmount);
        client.updateContract(request, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.toObject());
          }
        });
      });
    }
  },

  deleteContract: (parent: any, { contractId }: any, { user }: any) => {
    if (!user) {
      throw new AuthenticationError("Invalid credentials");
    } else {
      return new Promise<Boolean>((resolve, reject) => {
        const request = new DeleteRequest();
        request.setId(contractId);
        client.deleteContract(request, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.toObject().id == contractId ? true : false);
          }
        });
      });
    }
  },
};
