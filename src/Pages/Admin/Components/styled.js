import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    max-width: 100%;
    min-height: 10%;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c5c7cc;
    @media (max-width: 990px) {
        flex-direction: column;
        height: auto;
    }
`;
export const HeaderItem = styled.div`
    width: 33%;
    display: inline-block;
    @media (max-width: 990px) {
        width: auto;
    }
`;
export const Menu = styled.div`
    width: 15%;
    height: 90vh;
`;
export const MenuOption = styled.div`
    max-width: 100%;
    padding: 10% 0 10% 10%;
    color: #228B22;

    &:hover{
        color: #fff;
        background-color: #228B22;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
    }
    @media (max-width: 990px) {
        font-size: 1.5rem;
        text-align: center;
        padding-left: 0;
        padding-top: 25%;
    }
`;
export const MenuText = styled.span`
    font-size: 1.2rem;
    @media (max-width: 990px) {
        display: none;
    }
`;
export const Logo = styled.img`
    display: block;
    margin-left: 10%;
    margin-right: auto;
    max-width: 35%;
    @media (max-width: 990px) {
        min-width: 70%;
        padding: 2% 0;
        margin-left: auto;
    }
    &:hover{
        cursor: pointer;
    }
`;
export const LogoutContainer = styled.div`
    position: absolute;
    bottom: 3%;
    left: 1.4%;
    color: #228B22;
    font-size: 1.2rem;

    &:hover{
        cursor: pointer;
    }
    @media (max-width: 990px) {
        font-size: 1.5rem;
        left: 5%;
        bottom: 2%;
    }

`;
export const LogoutText = styled.span`
    font-family: sans-serif;
    font-weight: 500;
    @media (max-width: 990px) {
        display: none;
    }
`;
