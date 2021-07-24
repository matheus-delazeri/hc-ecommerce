import React, { useState } from 'react';
import * as S from './styled';
import Header from '../Components/header';
import Menu from '../Components/menu';
import { useHistory } from 'react-router-dom';


export default function NewProduct() {
    let token = localStorage.getItem("token");
    const history = useHistory();
    const [ product, setProduct ] = useState({ 
        cod: "",
        name: "",
        weight: "",
        stock: "",
        price: "",
        createdAt: "18/11/2001"
    });
    function getTodayDate(){
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date+' '+time;
    }
    function saveToStorage(){
        let isOk = true;
        for(var key in product) {
            if(product[key] === ""){
                isOk = false;
            }
        }
        if(isOk){ 
            var products = JSON.parse(localStorage.getItem('products')) || [];
            let isSet = false;
            products.map(oldProduct => {
                if(oldProduct.cod === product.cod){
                    isSet = true;
                }
                return null;
            })
            if(!isSet){
                product.createdAt = getTodayDate();
                products.push(product);
                localStorage.setItem(`products`, JSON.stringify(products));
                alert("Produto cadastrado!");
                history.push("/admin/products");
            } else{
                alert(`O código: ${product.cod} já pertence a um produto.`);
            }
        }else{
            alert("Preencha todos os campos!");
        }
    }
    if(token !== null){
        return (
            <S.Main>
                <Header />
                <S.Body>
                        <Menu />
                        <S.Content>
                            <S.Title>Produtos</S.Title>
                            <S.Subtitle>Criar novo produto</S.Subtitle>
                            <br />
                            <S.InputTitle>*Código: <S.InputField
                                value={product.cod}
                                onChange={input => setProduct({...product, cod: input.target.value})}
                            ></S.InputField></S.InputTitle>
                            <S.InputTitle>*Nome: <S.InputField
                                value={product.name}
                                onChange={input => setProduct({...product, name: input.target.value})}
                            ></S.InputField></S.InputTitle>
                            <S.InputTitle>*Peso: <S.InputField
                                type="number"
                                value={product.weight}
                                onChange={input => setProduct({...product, weight: input.target.value})}
                            ></S.InputField></S.InputTitle>
                            <S.InputTitle>*Estoque: <S.InputField
                                type="number"
                                value={product.stock}
                                onChange={input => setProduct({...product, stock: input.target.value})}
                            ></S.InputField></S.InputTitle>
                            <S.InputTitle>*Preço: <S.InputField
                                type="number"
                                value={product.price}
                                onChange={input => setProduct({...product, price: input.target.value})}
                            ></S.InputField></S.InputTitle>
                            <br />
                            <S.Subtitle>Campos com <b>*</b> são obrigatórios.</S.Subtitle>
                            <br />
                            <S.NewBtn type="button" onClick={ saveToStorage }>Criar produto</S.NewBtn>
                        </S.Content>
                </S.Body>
            </S.Main>
        )
    } else {
        return (
            <>
            <center>
            <p>Permissão negada</p>
            </center>
            </>
        )
    }
}