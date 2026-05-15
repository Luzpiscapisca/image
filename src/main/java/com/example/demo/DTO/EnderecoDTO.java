package com.example.demo.DTO;


import java.io.Serializable;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "enderecoDTO")

public class EnderecoDTO implements Serializable{
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cep;
    private String bairro;
    private String rua;
    private String cidade;
    private String estado;
    private String numero;

    public EnderecoDTO(EnderecoDTO entity) {
        this.nome = entity.getNome();
        this.cep = entity.getCep();
        this.bairro = entity.getBairro();
        this.rua = entity.getRua();
        this.cidade = entity.getCidade();
        this.estado = entity.getEstado();
        this.numero = entity.getNumero();
    }
}
