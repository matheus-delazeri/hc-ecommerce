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
        price: ""
    });
    function saveToStorage(){
        let isOk = true;
        for(var key in product) {
            if(product[key] === ""){
                isOk = false;
            }
        }
        if(isOk){ 
            var products = JSON.parse(localStorage.getItem('products')) || {};
            if(products[product.cod]!==undefined){
                alert(`O código: ${product.cod} já pertence a um produto.`);
                return;
            }
            products[product.cod] = product;
            console.log(products);
            localStorage.setItem(`products`, JSON.stringify(products));
            alert("Produto cadastrado!");
            history.push("/admin/products");
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