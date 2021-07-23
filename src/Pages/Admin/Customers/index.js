import React from 'react';
import * as S from '../styled';
import Header from '../Components/header';
import Menu from '../Components/menu';


export default function Customers() {
    let token = localStorage.getItem("token");
    if(token !== null){
        return (
            <S.Main>
                <Header />
                <S.Body>
                        <Menu />
                        <S.Content>

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