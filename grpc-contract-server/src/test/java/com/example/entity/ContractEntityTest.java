package com.example.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ContractEntityTest {

    @Test
    void contractEntityTest(){
        ContractEntity contract=new ContractEntity();
        contract.setContractId(2);
        contract.setName("Contract2");
        contract.setType("Monthly");
        contract.setPerPayment(1000);
        contract.setPaymentAmount(1000);

        assertEquals(2,contract.getContractId());
        assertEquals("Contract2",contract.getName());
        assertEquals("Monthly",contract.getType());
        assertEquals(1000,contract.getPerPayment());
        assertEquals(1000,contract.getPaymentAmount());
    }

}