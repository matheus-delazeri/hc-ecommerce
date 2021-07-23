import React from 'react';
import * as S from './styled';
import Header from '../Components/header';
import Menu from '../Components/menu';
import { useHistory } from 'react-router-dom';


export default function Products() {
    let token = localStorage.getItem("token");
    const history = useHistory();
    if(token !== null){
        return (
            <S.Main>
                <Header />
                <S.Body>
                        <Menu />
                        <S.Content>
                            <S.Title>Produtos</S.Title>
                            <S.Subtitle>Gerenciar produtos da loja</S.Subtitle>
                            <br />
                            <S.ProductsTable>
                                <thead>
                                    <tr>
                                        <S.ProductsTh>Código</S.ProductsTh>
                                        <S.ProductsTh>Nome</S.ProductsTh>
                                        <S.ProductsTh>Peso</S.ProductsTh>
                                        <S.ProductsTh>Estoque</S.ProductsTh>
                                        <S.ProductsTh>Preço</S.ProductsTh>
                                        <S.ProductsTh>Criado em</S.ProductsTh>
                                    </tr>
                                </thead>
                            </S.ProductsTable>
                            <br />
                            <S.NewBtn type="button" onClick={ function() {
                                history.push('/admin/newproduct')}
                            }>+ Criar Produto</S.NewBtn>

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