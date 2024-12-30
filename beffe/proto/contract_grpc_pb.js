// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var contract_pb = require("./contract_pb.js");

function serialize_com_example_Contract(arg) {
  if (!(arg instanceof contract_pb.Contract)) {
    throw new Error("Expected argument of type com.example.Contract");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_example_Contract(buffer_arg) {
  return contract_pb.Contract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_example_DeleteRequest(arg) {
  if (!(arg instanceof contract_pb.DeleteRequest)) {
    throw new Error("Expected argument of type com.example.DeleteRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_example_DeleteRequest(buffer_arg) {
  return contract_pb.DeleteRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_com_example_DeleteResponse(arg) {
  if (!(arg instanceof contract_pb.DeleteResponse)) {
    throw new Error("Expected argument of type com.example.DeleteResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_example_DeleteResponse(buffer_arg) {
  return contract_pb.DeleteResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_com_example_EmptyResponse(arg) {
  if (!(arg instanceof contract_pb.EmptyResponse)) {
    throw new Error("Expected argument of type com.example.EmptyResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_example_EmptyResponse(buffer_arg) {
  return contract_pb.EmptyResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var ContractServiceService = (exports.ContractServiceService = {
  getContract: {
    path: "/com.example.ContractService/getContract",
    requestStream: false,
    responseStream: false,
    requestType: contract_pb.Contract,
    responseType: contract_pb.Contract,
    requestSerialize: serialize_com_example_Contract,
    requestDeserialize: deserialize_com_example_Contract,
    responseSerialize: serialize_com_example_Contract,
    responseDeserialize: deserialize_com_example_Contract,
  },
  saveContract: {
    path: "/com.example.ContractService/saveContract",
    requestStream: false,
    responseStream: false,
    requestType: contract_pb.Contract,
    responseType: contract_pb.Contract,
    requestSerialize: serialize_com_example_Contract,
    requestDeserialize: deserialize_com_example_Contract,
    responseSerialize: serialize_com_example_Contract,
    responseDeserialize: deserialize_com_example_Contract,
  },
  deleteContract: {
    path: "/com.example.ContractService/deleteContract",
    requestStream: false,
    responseStream: false,
    requestType: contract_pb.DeleteRequest,
    responseType: contract_pb.DeleteResponse,
    requestSerialize: serialize_com_example_DeleteRequest,
    requestDeserialize: deserialize_com_example_DeleteRequest,
    responseSerialize: serialize_com_example_DeleteResponse,
    responseDeserialize: deserialize_com_example_DeleteResponse,
  },
  getContracts: {
    path: "/com.example.ContractService/getContracts",
    requestStream: false,
    responseStream: true,
    requestType: contract_pb.EmptyResponse,
    responseType: contract_pb.Contract,
    requestSerialize: serialize_com_example_EmptyResponse,
    requestDeserialize: deserialize_com_example_EmptyResponse,
    responseSerialize: serialize_com_example_Contract,
    responseDeserialize: deserialize_com_example_Contract,
  },
});

exports.ContractServiceClient = grpc.makeGenericClientConstructor(
  ContractServiceService
);
