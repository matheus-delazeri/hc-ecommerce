import styled from 'styled-components';
import InputMask from "react-input-mask";

export const Main = styled.div`
    width: 100%;
    height: 100vh;
`;
export const Body = styled.div`
    display: flex;
    max-width: 100%;
    height: 90%;
    background-color: #f6f6f6;
`;
export const Content = styled.div`
    width: 85%;
    line-height: 10px;
    background-color: #fff;
    padding-left: 2%;
`;
export const Title = styled.h1`
    padding-top: 1%;
    font-size: 1.7rem;
    font-weight: 300;
    font-color: #444444;
    @media (max-width: 990px) {
        padding-top: 2%;
    }
`;
export const Subtitle = styled.h1`
    font-size: .9rem;
    font-weight: 300;
    font-color: #888888;
`;
export const CustomersTable = styled.table`
    width: 95%;
    @media (max-width: 990px) {
        display: block;
        table-layout: fixed;
        overflow-x: auto;
    }
`;
export const CustomersTh = styled.th`
    color: #000;
    border: 1px solid #444444;
    background-color: #f6f6f6;
    font-size: .9rem;
    padding: .1% 0;
    font-weight: 300;
    line-height: 20px;
    @media (max-width: 990px) {
        min-width: 3rem;
        font-size: .8rem;
        padding: 0 0;
    }
`;
export const CustomersTd = styled.td`
    border: 1px solid #444444;
`;
export const InfoContainer = styled.div`
    display: flex;
    max-width: 100%;
    @media (max-width: 990px) {
        flex-direction: column;
    }
`;
export const InfoBlock = styled.div`
    width: 40%;
    @media (max-width: 990px) {
        width: 100%;
    }
`;
export const BlockTitle = styled.h1`
    padding-top: 1%;
    font-size: 1.2rem;
    font-weight: 300;
    font-color: #444444;
    @media (max-width: 990px) {
        padding-top: 2%;
    }
`;
export const InfoText = styled.h1`
    color: #444444;
    font-size: .8rem;
    font-weight: 300;
    text-align: center;
    line-height: 20px;
    @media (max-width: 990px) {
        white-space: nowrap;
    }
`;
export const NewBtn = styled.button`
    color: #fff;
    font-size: .8rem;
    padding: .8% 1%;
    background-color: #228B22;
    font-weight: 700;
    border: 0;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
    }
    @media (max-width: 990px) {
        padding: 1.5% 2%;
        margin-bottom: 5%;
    }
`;
export const InputTitle = styled.p`
    line-height: 10px;
    font-size: 1rem;
    font-weight: 300;
    color: #000;
    @media (max-width: 990px) {
        font-size: .8rem;
    }
`;
export const InputSmall = styled.input`
    width: 15%;
    border: 1px solid #ddd;
    height: 1.5rem;
    padding-left: 1%;
    border-radius: .5rem;
    @media (max-width: 990px) {
        width: 40%;
        padding-left: 1%;
    }
`;
export const InputMedium = styled.input`
    width: 30%;
    border: 1px solid #ddd;
    height: 1.5rem;
    padding-left: 1%;
    border-radius: .5rem;
    @media (max-width: 990px) {
        font-size: .6rem;
        width: 40%;
        padding-left: 1%;
    }
`;
export const InputValidate = styled(InputMask)`
    width: 30%;
    border: 1px solid #ddd;
    height: 1.5rem;
    padding-left: 1%;
    border-radius: .5rem;
    @media (max-width: 990px) {
        font-size: .6rem;
        width: 40%;
        padding-left: 1%;
    }
`;
export const InputField = styled.input`
    width: 50%;
    border: 1px solid #ddd;
    height: 1.5rem;
    padding-left: 1%;
    border-radius: .5rem;
    @media (max-width: 990px) {
        width: 60%;
        padding-left: 1%;
    }
`;