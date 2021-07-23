import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    max-width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;
export const Container = styled.div`
    width: 20%;
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 20%);
    border-radius: 10px;
`;
export const Header = styled.div`
    border-radius: 10px 10px 0 0;
    width: 100%;
    background-color: #228B22;

`;
export const Content = styled.div`
    display: flex;
    max-width: 100%;
    padding: 10% 0;
    align-items: center;
    flex-direction: column;

`;
export const Title = styled.h1`
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: bold;
    text-align: center;
    color: #fff;
    padding: 5% 0;
    margin: 0;
`;
export const InputField = styled.input`
    width: 70%;
    border: 1px solid #ddd;
    height: 1.5rem;
    padding-left: 5%;
    margin: 2% 0;
    border-radius: 1rem;
    &:focus,
    &:active {
        outline: none;
    }
`;
export const InvalidCredentials = styled.p`
    display: block;
    font-size: 0.75rem;
    color: #ff0000;
    font-weight: 600;
    margin-top: 1rem;
`;
export const LoginBtn = styled.button`
    width: 40%;
    border-radius: 1rem;
    background-color: #228B22;
    border: 0;
    margin-top: 5%;
    padding: 2%;
    color: #fff;

    &:hover{
        cursor: pointer;
    }
`;