package com.senai.aula.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank(message = "Nome é obrigatorio")
    private String nome;

    @Column(nullable = false)
    @NotBlank(message = "Telefone é obrigatório")
    private String telefone;

    @Column(nullable = false)
    @NotBlank(message = "CPF é obrigatório")
    private String cpf;

    @Column(nullable = false)
    @NotBlank(message = "CEP é obrigatório")
    private String cep;

    @Column(nullable = false)
    @NotBlank(message = "E-mail é obrigatorio")
    @Email(message = "Deve ser um e-mail válido.")
    private String email;

    @Column(nullable = false)
    @NotBlank(message = "Senha é obrigatoria")
    @Size(min = 3, message = "A senha deve ter no minimo 3 caracteres.")
    private String senha;

    public Usuario() {
    }

    public Usuario(Long id, String nome, String telefone, String cpf, String cep, String email, String senha) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.cep = cep;
        this.email = email;
        this.senha = senha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome é obrigatorio") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "Nome é obrigatorio") String nome) {
        this.nome = nome;
    }

    public @NotBlank(message = "Telefone é obrigatório") String getTelefone() {
        return telefone;
    }

    public void setTelefone(@NotBlank(message = "Telefone é obrigatório") String telefone) {
        this.telefone = telefone;
    }

    public @NotBlank(message = "CPF é obrigatório") String getCpf() {
        return cpf;
    }

    public void setCpf(@NotBlank(message = "CPF é obrigatório") String cpf) {
        this.cpf = cpf;
    }

    public @NotBlank(message = "CEP é obrigatório") String getCep() {
        return cep;
    }

    public void setCep(@NotBlank(message = "CEP é obrigatório") String cep) {
        this.cep = cep;
    }

    public @NotBlank(message = "E-mail é obrigatorio") @Email(message = "Deve ser um e-mail válido.") String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank(message = "E-mail é obrigatorio") @Email(message = "Deve ser um e-mail válido.") String email) {
        this.email = email;
    }

    public @NotBlank(message = "Senha é obrigatoria") @Size(min = 3, message = "A senha deve ter no minimo 3 caracteres.") String getSenha() {
        return senha;
    }

    public void setSenha(@NotBlank(message = "Senha é obrigatoria") @Size(min = 3, message = "A senha deve ter no minimo 3 caracteres.") String senha) {
        this.senha = senha;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", telefone='" + telefone + '\'' +
                ", cpf='" + cpf + '\'' +
                ", cep='" + cep + '\'' +
                ", email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                '}';
    }
}

