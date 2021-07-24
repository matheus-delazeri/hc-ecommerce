import React from 'react';
import * as S from './styled';
import Header from './Components/header';
import Menu from './Components/menu';


export default function Admin() {
    let token = localStorage.getItem("token");
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    if(token !== null){
        return (
            <S.Main>
                <Header />
                <S.Body>
                        <Menu />
                        <S.Content>
                            <S.Title>Painel administrativo</S.Title>
                            <S.Subtitle>Visão geral da loja</S.Subtitle>
                            <br />
                            <S.Blocks>
                                <S.Block>
                                    <S.BlockHeader>Vendas</S.BlockHeader>
                                    <S.BlockContent>
                                        <S.BlockIcon className="fa fa-shopping-cart"></S.BlockIcon>
                                        <S.BlockText>R$240,00</S.BlockText>
                                    </S.BlockContent>
                                </S.Block>
                                <S.Block>
                                    <S.BlockHeader>Produtos</S.BlockHeader>
                                    <S.BlockContent>
                                        <S.BlockIcon className="fa fa-folder"></S.BlockIcon>
                                        <S.BlockText>{ products.length }</S.BlockText>
                                    </S.BlockContent>
                                </S.Block>
                                <S.Block>
                                    <S.BlockHeader>Clientes</S.BlockHeader>
                                    <S.BlockContent>
                                        <S.BlockIcon className="fa fa-users"></S.BlockIcon>
                                        <S.BlockText>{ customers.length }</S.BlockText>
                                    </S.BlockContent>
                                </S.Block>
                                <S.Block>
                                    <S.BlockHeader>Status</S.BlockHeader>
                                    <S.BlockContent>
                                        <S.BlockIcon className="fa fa-hdd-o"></S.BlockIcon>
                                        <S.BlockText>Ativo</S.BlockText>
                                    </S.BlockContent>
                                </S.Block>
                            </S.Blocks>
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