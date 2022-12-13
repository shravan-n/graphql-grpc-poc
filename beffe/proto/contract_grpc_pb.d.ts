// package: com.example
// file: contract.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as contract_pb from "./contract_pb";

interface IContractServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getContract: IContractServiceService_IgetContract;
    saveContract: IContractServiceService_IsaveContract;
    deleteContract: IContractServiceService_IdeleteContract;
    getContracts: IContractServiceService_IgetContracts;
}

interface IContractServiceService_IgetContract extends grpc.MethodDefinition<contract_pb.Contract, contract_pb.Contract> {
    path: "/com.example.ContractService/getContract";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contract_pb.Contract>;
    requestDeserialize: grpc.deserialize<contract_pb.Contract>;
    responseSerialize: grpc.serialize<contract_pb.Contract>;
    responseDeserialize: grpc.deserialize<contract_pb.Contract>;
}
interface IContractServiceService_IsaveContract extends grpc.MethodDefinition<contract_pb.Contract, contract_pb.Contract> {
    path: "/com.example.ContractService/saveContract";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contract_pb.Contract>;
    requestDeserialize: grpc.deserialize<contract_pb.Contract>;
    responseSerialize: grpc.serialize<contract_pb.Contract>;
    responseDeserialize: grpc.deserialize<contract_pb.Contract>;
}
interface IContractServiceService_IdeleteContract extends grpc.MethodDefinition<contract_pb.DeleteRequest, contract_pb.DeleteResponse> {
    path: "/com.example.ContractService/deleteContract";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contract_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<contract_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<contract_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<contract_pb.DeleteResponse>;
}
interface IContractServiceService_IgetContracts extends grpc.MethodDefinition<contract_pb.EmptyResponse, contract_pb.Contract> {
    path: "/com.example.ContractService/getContracts";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<contract_pb.EmptyResponse>;
    requestDeserialize: grpc.deserialize<contract_pb.EmptyResponse>;
    responseSerialize: grpc.serialize<contract_pb.Contract>;
    responseDeserialize: grpc.deserialize<contract_pb.Contract>;
}

export const ContractServiceService: IContractServiceService;

export interface IContractServiceServer {
    getContract: grpc.handleUnaryCall<contract_pb.Contract, contract_pb.Contract>;
    saveContract: grpc.handleUnaryCall<contract_pb.Contract, contract_pb.Contract>;
    deleteContract: grpc.handleUnaryCall<contract_pb.DeleteRequest, contract_pb.DeleteResponse>;
    getContracts: grpc.handleServerStreamingCall<contract_pb.EmptyResponse, contract_pb.Contract>;
}

export interface IContractServiceClient {
    getContract(request: contract_pb.Contract, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    getContract(request: contract_pb.Contract, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    getContract(request: contract_pb.Contract, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    saveContract(request: contract_pb.Contract, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    saveContract(request: contract_pb.Contract, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    saveContract(request: contract_pb.Contract, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    deleteContract(request: contract_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: contract_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    deleteContract(request: contract_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contract_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    deleteContract(request: contract_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contract_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    getContracts(request: contract_pb.EmptyResponse, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<contract_pb.Contract>;
    getContracts(request: contract_pb.EmptyResponse, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<contract_pb.Contract>;
}

export class ContractServiceClient extends grpc.Client implements IContractServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getContract(request: contract_pb.Contract, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    public getContract(request: contract_pb.Contract, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    public getContract(request: contract_pb.Contract, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    public saveContract(request: contract_pb.Contract, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    public saveContract(request: contract_pb.Contract, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    public saveContract(request: contract_pb.Contract, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contract_pb.Contract) => void): grpc.ClientUnaryCall;
    public deleteContract(request: contract_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: contract_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteContract(request: contract_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contract_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteContract(request: contract_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contract_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public getContracts(request: contract_pb.EmptyResponse, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<contract_pb.Contract>;
    public getContracts(request: contract_pb.EmptyResponse, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<contract_pb.Contract>;
}
