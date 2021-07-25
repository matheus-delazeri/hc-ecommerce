import React from 'react';
import * as S from './styled';
import logo from '../../../Img/logo.png';
import { useHistory } from 'react-router-dom';


export default function Header() {
        const history = useHistory();
        return (
            <S.Header>
                <S.HeaderItem>
                        <S.Logo onClick={ function() {
                            history.push('/admin') 
                        }} src={ logo }></S.Logo>
                </S.HeaderItem>
                <S.HeaderItem></S.HeaderItem>
                <S.HeaderItem>
                </S.HeaderItem>
            </S.Header>
        )
}