import React from 'react';
import * as S from '.././styled';


export default function Menu() {
        return (
            <S.Menu>
                <S.MenuOption><i class="fa fa-home"></i> Painel</S.MenuOption>
                <S.MenuOption><i class="fa fa-folder"></i> Produtos</S.MenuOption>
                <S.MenuOption><i class="fa fa-users"></i> Clientes</S.MenuOption>
            </S.Menu>
        )
}