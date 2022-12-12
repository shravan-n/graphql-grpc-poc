package com.example.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="contract")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ContractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    int contractId;

    @Column(name="name")
    String name;

    @Column(name="type")
    String type;

    @Column(name="per_payment")
    float perPayment;

    @Column(name="payment_amount")
    float paymentAmount;

}
