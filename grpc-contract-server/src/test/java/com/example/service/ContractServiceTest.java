package com.example.service;

import com.example.Contract;
import com.example.DeleteRequest;
import com.example.DeleteResponse;
import com.example.EmptyResponse;
import com.example.entity.ContractEntity;
import com.example.mapper.ContractMapper;
import com.example.repository.ContractRepository;
import io.grpc.stub.StreamObserver;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class ContractServiceTest {

    @Mock
    private ContractRepository contractRepository;

    @InjectMocks
    private ContractService contractService;

    @Mock
    StreamObserver<Contract> observer=mock(StreamObserver.class);

    @Mock
    StreamObserver<DeleteResponse> deleteObserver=mock(StreamObserver.class);

    @Mock
    ContractMapper contractMapper;

    @Test
    public void getContractTest(){
        ContractEntity contractEntity=new ContractEntity(1,"Contract1","Monthly",1000,1000);
        Contract contract=Contract.newBuilder().setContractId(1).setName("Contract1")
                .setType("Monthly").setPerPayment(1000).setPaymentAmount(1000).build();
        Mockito.when(contractRepository.findById(contract.getContractId())).thenReturn(Optional.of(contractEntity));
        Mockito.when(contractMapper.convertToContract(contractEntity)).thenReturn(contract);
        contractService.getContract(contract,observer);
        Mockito.verify(observer,times(1)).onCompleted();
        ArgumentCaptor<Contract> captor=ArgumentCaptor.forClass(Contract.class);
        Mockito.verify(observer,times(1)).onNext(captor.capture());
    }

    @Test
    public void getContractsTest() throws Exception{
        ContractEntity contractEntity=new ContractEntity(1,"Contract1","Monthly",1000,1000);
        Contract contract=Contract.newBuilder().setContractId(1).setName("Contract1")
                .setType("Monthly").setPerPayment(1000).setPaymentAmount(1000).build();
        List<ContractEntity> contractEntities=new ArrayList<>();
        contractEntities.add(contractEntity);
        EmptyResponse emptyResponse= EmptyResponse.newBuilder().build();
        Mockito.when(contractRepository.findAll()).thenReturn(contractEntities);
        Mockito.when(contractMapper.convertToContract(contractEntity)).thenReturn(contract);
        contractService.getContracts(emptyResponse,observer);
        Mockito.verify(observer,times(1)).onCompleted();
        ArgumentCaptor<Contract> captor=ArgumentCaptor.forClass(Contract.class);
        Mockito.verify(observer,times(1)).onNext(captor.capture());
    }

    @Test
    public void deleteContractTest() throws Exception{
        DeleteRequest deleteRequest= DeleteRequest.newBuilder().build();
        contractRepository.deleteById(deleteRequest.getId());
        contractService.deleteContract(deleteRequest,deleteObserver);
        Mockito.verify(deleteObserver,times(1)).onCompleted();
        ArgumentCaptor<DeleteResponse> captor=ArgumentCaptor.forClass(DeleteResponse.class);
        Mockito.verify(deleteObserver,times(1)).onNext(captor.capture());
    }

    @Test
    public void saveContract() throws Exception{
        ContractEntity contractEntity=new ContractEntity(1,"Contract1","Monthly",1000,1000);
        Contract contract=Contract.newBuilder().setContractId(1).setName("Contract1")
                .setType("Monthly").setPerPayment(1000).setPaymentAmount(1000).build();
        Mockito.when(contractRepository.save(contractEntity)).thenReturn(contractEntity);
        Mockito.when(contractMapper.convertToContract(contractEntity)).thenReturn(contract);
        contractService.saveContract(contract,observer);
        Mockito.verify(observer,times(1)).onCompleted();
        ArgumentCaptor<Contract> captor=ArgumentCaptor.forClass(Contract.class);
        Mockito.verify(observer,times(1)).onNext(captor.capture());
    }

}