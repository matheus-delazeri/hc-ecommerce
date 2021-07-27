import React from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function Menu() {
        const history = useHistory();
        return (
            <S.Menu>
                <S.MenuOption onClick={ function() {
                    history.push('/admin');
                }}><i className="fa fa-home"></i><S.MenuText> Painel</S.MenuText></S.MenuOption>
                <S.MenuOption onClick={ function() {
                    history.push('/admin/products');
                } }><i className="fa fa-folder"></i><S.MenuText> Produtos</S.MenuText></S.MenuOption>
                <S.MenuOption onClick={ function() {
                    history.push('/admin/customers');
                } }><i className="fa fa-users"></i><S.MenuText> Clientes</S.MenuText></S.MenuOption>
                <S.LogoutContainer onClick={ function() {
                    history.push('/');
                } }>
                    <i className="fa fa-sign-out"><S.LogoutText> Sair</S.LogoutText></i>
                </S.LogoutContainer>
            </S.Menu>
        )
}