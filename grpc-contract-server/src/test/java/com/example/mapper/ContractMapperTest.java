package com.example.mapper;

import com.example.Contract;
import com.example.entity.ContractEntity;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ContractMapperTest {

    @InjectMocks
    ContractMapper contractMapper;

    @Test
    void contractMapperTest(){
        ContractEntity contractEntity=new ContractEntity(1,"Contract1","Monthly", 1000,1000);
        Contract contract=Contract.newBuilder().setContractId(1).setName("Contract1")
                .setType("Monthly").setPerPayment(1000).setPaymentAmount(1000).build();
        assertEquals(contract.getContractId(),contractMapper.convertToContract(contractEntity).getContractId());
        assertEquals(contractEntity.getContractId(),contractMapper.convertToContractEntity(contract).getContractId());
    }

}