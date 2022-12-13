import { credentials } from "@grpc/grpc-js";
import {ContractServiceClient} from "../proto/contract_grpc_pb"

const port = 9000;

export const client = new ContractServiceClient(
  `localhost:${port}`,
  credentials.createInsecure()
);
