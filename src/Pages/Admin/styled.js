import styled from 'styled-components';

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
`;
export const Title = styled.h1`
    padding-top: 1%;
    font-size: 1.7rem;
    font-weight: 300;
    font-color: #444444;
    text-indent: 2%;
    @media (max-width: 990px) {
        padding-top: 2%;
    }
`;
export const Subtitle = styled.h1`
    font-size: .9rem;
    font-weight: 300;
    font-color: #888888;
    text-indent: 2%;
`;
export const Blocks = styled.div`
    display: flex;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    margin: 5px;

    @media (max-width: 990px) {
        margin: 0;
        flex-wrap: wrap;        
        padding-right: 3%;
    }
`;
export const Block = styled.div`
    margin: 0 2%;
    width: 25%;
    height: 150px;
    background-color: #f6f6f6;
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 20%);

    @media (max-width: 990px) {
        width: 45%;
        height: 100px;
        margin-bottom: 5%;
    }
`;
export const BlockHeader = styled.div`
    max-width: 100%;
    border-radius: 5px 5px 0 0;
    background-color: #228B22;
    font-size: 1rem;
    color: #fff;
    padding: 5% 5%;
`;
export const BlockContent = styled.div`
    display: flex;
    max-width: 100%;
    height: 75%;
    align-items: center;
`;
export const BlockIcon = styled.i`
    width: 50%;
    font-size: 3rem;
    text-indent: 15%;
    color: #228B22;

    @media (max-width: 990px) {
        font-size: 2rem;
    }
`;
export const BlockText = styled.h1`
    width: 50%;
    padding-right: 10%;
    font-weight: 300;
    font-size: 1.5rem;
    text-align: end;
    @media (max-width: 990px) {
        font-size: .85rem;
    }
`;