import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    max-width: 100%;
    border-bottom: 1px solid #c5c7cc;
    @media (max-width: 990px) {
        flex-direction: column;
    }
`;
export const HeaderItem = styled.div`
    width: 33%;
    @media (max-width: 990px) {
        width: auto;
    }
`;
export const Menu = styled.div`
    width: 15%;
    background-color: #f6f6f6;
    height: 80vh;
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
    padding: 3% 0;
    display: block;
    margin-left: 10%;
    margin-right: auto;
    max-width: 50%;
    @media (max-width: 990px) {
        width: 50%;
        padding: 2% 0;
        margin-left: auto;
    }
`;