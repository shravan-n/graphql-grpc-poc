// package: com.example
// file: contract.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Contract extends jspb.Message { 
    getContractId(): number;
    setContractId(value: number): Contract;

    getName(): string;
    setName(value: string): Contract;

    getType(): string;
    setType(value: string): Contract;

    getPerPayment(): number;
    setPerPayment(value: number): Contract;

    getPaymentAmount(): number;
    setPaymentAmount(value: number): Contract;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contract.AsObject;
    static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contract;
    static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
    export type AsObject = {
        contractId: number,
        name: string,
        type: string,
        perPayment: number,
        paymentAmount: number,
    }
}

export class DeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        id: number,
    }
}

export class DeleteResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResponse;
    static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
    export type AsObject = {
        id: number,
    }
}

export class EmptyResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyResponse): EmptyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyResponse;
    static deserializeBinaryFromReader(message: EmptyResponse, reader: jspb.BinaryReader): EmptyResponse;
}

export namespace EmptyResponse {
    export type AsObject = {
    }
}
