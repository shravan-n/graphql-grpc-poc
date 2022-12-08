import { Contract } from "../../proto/contract_pb";
import { client } from "../utils";
import { EmptyResponse } from "../../proto/contract_pb";
import { AuthenticationError } from "apollo-server";
import { users } from "../db";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../constant";

export const Query = {
  getContract: (parent: any, { contractId }: any, { user }: any) => {
    if (!user) {
      throw new AuthenticationError("Invalid credentials");
    } else {
      return new Promise<Contract.AsObject>((resolve, reject) => {
        const request = new Contract();
        request.setContractId(contractId);
        client.getContract(request, (err, contract) => {
          if (err) {
            reject(err);
          } else {
            resolve(contract.toObject());
          }
        });
      });
    }
  },

  getContracts: (parent: any, args: any, { user }: any) => {
    if (!user) {
      throw new AuthenticationError("Invalid credentials");
    } else {
      return new Promise<Contract.AsObject[]>((resolve, reject) => {
        const stream = client.getContracts(new EmptyResponse());
        const contracts: Contract.AsObject[] = [];
        stream.on("data", (contract) => contracts.push(contract.toObject()));
        stream.on("error", reject);
        stream.on("end", () => resolve(contracts));
      });
    }
  },

  login: (parent: any, { username, password }: any, context: any) => {
    const user = users.find(
      (user) => user.name === username && user.password === password
    );
    if (user) {
      return sign({ data: user.name }, JWT_SECRET, { expiresIn: "1h" });
    } else {
      throw new AuthenticationError("Invalid Credentials");
    }
  },
};
