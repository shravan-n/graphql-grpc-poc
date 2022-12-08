package com.example.mapper;

import com.example.Contract;
import com.example.entity.ContractEntity;
import org.springframework.stereotype.Service;

@Service
public class ContractMapper {

    public ContractEntity convertToContractEntity(Contract contract){
        ContractEntity contractEntity=new ContractEntity();
        contractEntity.setContractId(contract.getContractId());
        contractEntity.setName(contract.getName());
        contractEntity.setType(contract.getType());
        contractEntity.setPerPayment(contract.getPerPayment());
        contractEntity.setPaymentAmount(contract.getPaymentAmount());
        return contractEntity;
    }

    public Contract convertToContract(ContractEntity contractEntity) {
        return Contract.newBuilder()
        .setContractId(contractEntity.getContractId())
        .setName(contractEntity.getName())
        .setType(contractEntity.getType())
        .setPerPayment(contractEntity.getPerPayment())
        .setPaymentAmount(contractEntity.getPaymentAmount()).build();
    }

}
