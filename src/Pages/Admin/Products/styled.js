import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
`;
export const Body = styled.div`
    display: flex;
    max-width: 100%;
`;
export const Content = styled.div`
    width: 85%;
    line-height: 10px;
    padding-left: 2%;
`;
export const Title = styled.h1`
    padding-top: 1%;
    font-size: 1.5rem;
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
export const ProductsTable = styled.table`
    width: 80%;
`;
export const ProductsTh = styled.th`
    color: #000;
    border: 1px solid #444444;
    background-color: #f6f6f6;
    font-size: 1rem;
    padding: 1% 0;
    font-weight: 300;
`;
export const ProductsTd = styled.td`
    color: #444444;
    font-size: 1.5rem;
    font-weight: 300;
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
`;
export const InputTitle = styled.p`
    line-height: 10px;
    font-size: 1rem;
    font-weight: 300;
    color: #000;
`;
export const InputField = styled.input`
    width: 20%;
    border: 1px solid #ddd;
    height: 1.5rem;
    padding-left: .5%;
    border-radius: .5rem;
`;