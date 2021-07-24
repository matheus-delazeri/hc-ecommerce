import React from 'react';
import * as S from './styled';
import Header from '../Components/header';
import Menu from '../Components/menu';
import { useHistory } from 'react-router-dom';


export default function Products() {
    let token = localStorage.getItem("token");
    const history = useHistory();
    const products = JSON.parse(localStorage.getItem('products')) || [];
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
                                { products.map(product => {
                                    return(
                                    <tbody key={product.cod}>
                                        <tr>
                                            <S.ProductsTd><S.InfoText>{ product.cod }</S.InfoText></S.ProductsTd>
                                            <S.ProductsTd><S.InfoText>{ product.name }</S.InfoText></S.ProductsTd>
                                            <S.ProductsTd><S.InfoText>{ product.weight }</S.InfoText></S.ProductsTd>
                                            <S.ProductsTd><S.InfoText>{ product.stock }</S.InfoText></S.ProductsTd>
                                            <S.ProductsTd><S.InfoText>{ product.price }</S.InfoText></S.ProductsTd>
                                            <S.ProductsTd><S.InfoText>{ product.createdAt }</S.InfoText></S.ProductsTd>
                                        </tr>
                                    </tbody>
                                    )
                                })}
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