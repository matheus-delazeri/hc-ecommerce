import React, { useState } from 'react';
import * as S from './styled';
import Header from '../Components/header';
import Menu from '../Components/menu';
import { useHistory } from 'react-router-dom';
import { validate } from 'gerador-validador-cpf';


export default function NewCustomer() {
    let token = localStorage.getItem("token");
    const history = useHistory();
    const [ customer, setCustomer ] = useState({ 
        name: "",
        birthdate: "",
        cellphone: "",
        email: "",
        cpf: "",
        city: "",
        district: "",
        country: "",
        cep: "",
        state: "",
        address: "",
        addrnumber: "",
    });
    function validateEmail(){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(customer.email)){
            return true;
        }else{
            return false;
        }
    }
    function validateCEP(){
        if(customer.cep.indexOf('_') > -1){
            return false;
        }else{
            return true;
        }
    }
    function saveToStorage(){
        let isOk = true;
        let haveEmpty = false;
        for(var key in customer) {
            if(customer[key] === "" && key !== 'email' && key !== 'cellphone'){
                isOk = false;
                haveEmpty = true;
            }
        }
        if(haveEmpty){
            alert("Preencha todos os campos obrigatórios!");
            return;
        }
        if(customer['email'] !== "" && !validateEmail()){
            isOk = false;
            alert("O e-mail inserido é inválido");
        }
        if(!validate(customer.cpf)){
            isOk = false;
            alert("O CPF inserido não é válido");
        }
        if(!validateCEP()){
            isOk = false;
            alert("O CEP inserido não é válido");
        }
        if(isOk){ 
            var customers = JSON.parse(localStorage.getItem('customers')) || [];
            let isSet = false;
            customers.map(oldCustomer => {
                if(oldCustomer.cpf === customer.cpf){
                    isSet = true;
                }
                return null;
            })
            if(!isSet){
                customers.push(customer);
                localStorage.setItem('customers', JSON.stringify(customers));
                alert("Cliente cadastrado!");
                history.push("/admin/customers");
            } else{
                alert(`O CPF: ${customer.cpf} já está cadastrado.`);
            }
        }
    }
    if(token !== null){
        return (
            <S.Main>
                <Header />
                <S.Body>
                        <Menu />
                        <S.Content>
                            <S.Title>Clientes</S.Title>
                            <S.Subtitle>Cadastrar novo cliente</S.Subtitle>
                            <br />
                            <S.InfoContainer>
                                <S.InfoBlock>
                                    <S.BlockTitle>Dados pessoais</S.BlockTitle>
                                    <br />
                                    <S.InputTitle>*Nome: <S.InputField
                                        value={customer.name}
                                        onChange={input => setCustomer({...customer, name: input.target.value})}
                                    ></S.InputField></S.InputTitle>
                                    <S.InputTitle>*Data de nascimento: <S.InputMedium
                                        type="date"
                                        value={customer.birthdate}
                                        onChange={input => setCustomer({...customer, birthdate: input.target.value})}
                                    ></S.InputMedium></S.InputTitle>
                                    <S.InputTitle>Telefone: <S.InputValidate
                                        mask="(99)99999-9999"
                                        value={customer.cellphone}
                                        onChange={input => setCustomer({...customer, cellphone: input.target.value})}
                                    ></S.InputValidate></S.InputTitle>
                                    <S.InputTitle>E-mail: <S.InputField
                                        type="email"
                                        value={customer.email}
                                        onChange={input => setCustomer({...customer, email: input.target.value})}
                                    ></S.InputField></S.InputTitle>
                                    <S.InputTitle>*CPF: <S.InputValidate
                                        mask="999.999.999-99"
                                        value={customer.cpf}
                                        onChange={input => setCustomer({...customer, cpf: input.target.value})}
                                    ></S.InputValidate></S.InputTitle>
                                </S.InfoBlock>

                                <S.InfoBlock>
                                    <S.BlockTitle>Endereço</S.BlockTitle>
                                    <br />
                                    <S.InputTitle>*Cidade: <S.InputMedium
                                        value={customer.city}
                                        onChange={input => setCustomer({...customer, city: input.target.value})}
                                    ></S.InputMedium></S.InputTitle>
                                    <S.InputTitle>*Bairro: <S.InputMedium
                                        value={customer.district}
                                        onChange={input => setCustomer({...customer, district: input.target.value})}
                                    ></S.InputMedium></S.InputTitle>
                                    <S.InputTitle>*País: <S.InputMedium
                                        value={customer.country}
                                        onChange={input => setCustomer({...customer, country: input.target.value})}
                                    ></S.InputMedium></S.InputTitle>
                                    <S.InputTitle>*CEP: <S.InputValidate
                                        value={customer.cep}
                                        mask="99999-999"
                                        onChange={input => setCustomer({...customer, cep: input.target.value})}
                                    ></S.InputValidate></S.InputTitle>
                                    <S.InputTitle>*Estado: <S.InputSmall
                                        value={customer.state}
                                        onChange={input => setCustomer({...customer, state: input.target.value})}
                                    ></S.InputSmall></S.InputTitle>
                                    <S.InputTitle>*Endereço: <S.InputField
                                        value={customer.address}
                                        onChange={input => setCustomer({...customer, address: input.target.value})}
                                    ></S.InputField></S.InputTitle>
                                    <S.InputTitle>*Número: <S.InputSmall
                                        type="number"
                                        value={customer.addrnumber}
                                        onChange={input => setCustomer({...customer, addrnumber: input.target.value})}
                                    ></S.InputSmall></S.InputTitle>
                                </S.InfoBlock>
                            </S.InfoContainer>
                            <S.Subtitle>Campos com <b>*</b> são obrigatórios.</S.Subtitle>
                            <br/>
                            <S.NewBtn type="button" onClick={ saveToStorage }>Cadastrar Cliente</S.NewBtn>
                        </S.Content>
                </S.Body>
            </S.Main>
        )
    } else {
        return (
            <>
            <center>
            <p>Permissão negada</p>
            </center>
            </>
        )
    }
}