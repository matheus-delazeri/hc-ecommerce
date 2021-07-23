import styled, { StyleSheetManager } from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
`;
export const Header = styled.div`
    display: flex;
    max-width: 100%;
    border-bottom: 1px solid #c5c7cc;
`;
export const HeaderItem = styled.div`
    width: 33%;
`;
export const Content = styled.div`
    display: flex;
    max-width: 100%;
    align-items: center;
`;
export const ContentItem = styled.div`
    width: 33%;
`;
export const Menu = styled.div`
    width: 50%;
    height: 100vh;
    background-color: #f6f6f6;
`;
export const MenuOption = styled.div`
    max-width: 100%;
    padding: 10% 0 10% 10%;
    font-size: 1.2rem;
    color: #228B22;

    &:hover{
        color: #fff;
        background-color: #228B22;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
    }
`;
export const Logo = styled.img`
    padding: 3% 0;
    display: block;
    margin-left: 10%;
    margin-right: auto;
    max-width: 50%;

`;