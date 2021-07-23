import React, { useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router';
import auth from '../Admin/auth';


export default function Home() {
    localStorage.clear();
    const [ user, setUser] = useState('');
    const [ password, setPassword] = useState('');
    const [ error, setError ] = useState(false);
    const history = useHistory();
    const userAdm = 'admin';
    const passAdm = 'admin';
    let authToken = btoa(Math.floor(Math.random() * 10000) * auth.key);
    function login() {
        if(user === userAdm && password === passAdm){
            localStorage.setItem("token", authToken);
            history.push('/admin');
        }else{
            setError(true);
        }
    }
    return (
        <>
        <S.Main>
           <S.Container>
                <S.Header>
                    <S.Title>Painel administrativo</S.Title>
                </S.Header>
                <S.Content>
                    <S.InputField placeholder="Usuário"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    onFocus={input => input.target.placeholder = ""}
                    onBlur={input => input.target.placeholder = "Usuário"}
                    ></S.InputField>
                    <S.InputField type="password" placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onFocus={input => input.target.placeholder = ""}
                    onBlur={input => input.target.placeholder = "Senha"}
                    ></S.InputField>
                    { error ? <S.InvalidCredentials>As credenciais informadas estão erradas</S.InvalidCredentials> : ''}
                    <S.LoginBtn type="button" onClick={ login }>Login</S.LoginBtn>
                </S.Content>
            </S.Container> 
        </S.Main>
        </>
    )
}