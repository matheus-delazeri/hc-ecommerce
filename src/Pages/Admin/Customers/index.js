import React from 'react';
import * as S from './styled';
import Header from '../Components/header';
import Menu from '../Components/menu';
import { useHistory } from 'react-router-dom';


export default function Customers() {
    let token = localStorage.getItem("token");
    const history = useHistory();
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    function structAddress(customer){
        return `${customer.address}, ${customer.addrnumber} - ${customer.district}. ${customer.city}/${customer.state} - ${customer.country}`;
    }
    if(token !== null){
        return (
            <S.Main>
                <Header />
                <S.Body>
                        <Menu />
                        <S.Content>
                            <S.Title>Clientes</S.Title>
                            <S.Subtitle>Gerenciar clientes da loja</S.Subtitle>
                            <br />
                            <S.CustomersTable>
                                <thead>
                                    <tr>
                                        <S.CustomersTh>Nome</S.CustomersTh>
                                        <S.CustomersTh>Endereço</S.CustomersTh>
                                        <S.CustomersTh>CEP</S.CustomersTh>
                                        <S.CustomersTh>Data de nascimento</S.CustomersTh>
                                        <S.CustomersTh>Telefone</S.CustomersTh>
                                        <S.CustomersTh>E-mail</S.CustomersTh>
                                        <S.CustomersTh>CPF</S.CustomersTh>
                                    </tr>
                                </thead>
                                { customers.map(customer => {
                                    return(
                                    <tbody key={customer.cpf}>
                                        <tr>
                                            <S.CustomersTd><S.InfoText>{ customer.name }</S.InfoText></S.CustomersTd>
                                            <S.CustomersTd><S.InfoText>{ structAddress(customer) }</S.InfoText></S.CustomersTd>
                                            <S.CustomersTd><S.InfoText>{ customer.cep }</S.InfoText></S.CustomersTd>
                                            <S.CustomersTd><S.InfoText>{ customer.birthdate }</S.InfoText></S.CustomersTd>
                                            <S.CustomersTd><S.InfoText>{ customer.cellphone }</S.InfoText></S.CustomersTd>
                                            <S.CustomersTd><S.InfoText>{ customer.email }</S.InfoText></S.CustomersTd>
                                            <S.CustomersTd><S.InfoText>{ customer.cpf }</S.InfoText></S.CustomersTd>
                                        </tr>
                                    </tbody>
                                    )
                                })}
                            </S.CustomersTable>
                            <br />
                            <S.NewBtn type="button" onClick={ function() {
                                history.push('/admin/newcustomer')}
                            }>+ Cadastrar Cliente</S.NewBtn>

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