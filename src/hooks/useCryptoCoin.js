import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

    const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectOptions = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    color: #000;
`;

const useCryptoCoin = (label, inicialState, coins) => {

    // conins
    // console.log(coins);
    

    //State del custom hook
    const [state, updateState] = useState(inicialState);

    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectOptions
                onChange={ e => updateState(e.target.value) }
                value={state}
            >
                <option value=''>- Seleccione -</option>
                {coins.map(coin => (
                    <option key={coin.CoinInfo.Id} value={coin.CoinInfo.Name}>{coin.CoinInfo.FullName}</option>
                ))}
            </SelectOptions>
        </Fragment>
    );

    //Se retorna state,interfaz y la fn que modifica el state updateState
    return [state, SelectCrypto, updateState];
}
 
export default useCryptoCoin;