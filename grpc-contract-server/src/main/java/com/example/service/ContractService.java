package com.example.service;

import com.example.*;
import com.example.entity.ContractEntity;
import com.example.mapper.ContractMapper;
import com.example.repository.ContractRepository;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@GrpcService
public class ContractService extends ContractServiceGrpc.ContractServiceImplBase {

    @Autowired
    ContractRepository contractRepository;

    @Autowired
    ContractMapper contractMapper;

    @Override
    public void getContract(Contract request, StreamObserver<Contract> responseObserver) {
        Optional<ContractEntity> result=contractRepository.findById(request.getContractId());
        if(result.isPresent()){
            responseObserver.onNext(contractMapper.convertToContract(result.get()));
            responseObserver.onCompleted();
        }
        else {
            throw new RuntimeException(String.format("Contract not found with id %s",request.getContractId()));
        }
    }

    @Override
    public void saveContract(Contract request, StreamObserver<Contract> responseObserver) {
        contractRepository.save(contractMapper.convertToContractEntity(request));
        responseObserver.onNext(request);
        responseObserver.onCompleted();
    }

    @Override
    public void deleteContract(DeleteRequest request, StreamObserver<DeleteResponse> responseObserver) {
        contractRepository.deleteById(request.getId());
        DeleteResponse deleteResponse= DeleteResponse.newBuilder().setId(request.getId()).build();
        responseObserver.onNext(deleteResponse);
        responseObserver.onCompleted();
    }

    @Override
    public void getContracts(EmptyResponse request, StreamObserver<Contract> responseObserver) {
        List<ContractEntity> contracts=contractRepository.findAll();
        for(ContractEntity contractEntity:contracts){
            responseObserver.onNext(contractMapper.convertToContract(contractEntity));
        }
        responseObserver.onCompleted();
    }
}
