import React from 'react';
import * as S from './styled';
import logo from '../../../Img/logo.png';


export default function Header() {
        return (
            <S.Header>
                <S.HeaderItem>
                        <S.Logo src={ logo }></S.Logo>
                </S.HeaderItem>
                <S.HeaderItem></S.HeaderItem>
                <S.HeaderItem></S.HeaderItem>
            </S.Header>
        )
}