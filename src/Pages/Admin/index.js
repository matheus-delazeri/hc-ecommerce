import React, { useState } from 'react';
import * as S from './styled';
import Header from './Components/header';
import Menu from './Components/menu';


export default function Admin() {
    let token = localStorage.getItem("token");
    if(token !== null){
        return (
            <S.Main>
                <Header />
                <S.Content>
                    <S.ContentItem>
                        <Menu />
                    </S.ContentItem>
                    <S.ContentItem></S.ContentItem>
                    <S.ContentItem></S.ContentItem>
                </S.Content>

            </S.Main>
        )
    } else {
        return (
            <>
            <center>
            <p>Permission denied</p>
            </center>
            </>
        )
    }
}