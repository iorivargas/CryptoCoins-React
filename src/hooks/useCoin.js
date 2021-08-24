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
`;

const useCoin = (label, inicialState, coins) => {

    //State del custom hook
    const [state, updateState] = useState(inicialState);

    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectOptions
                onChange={ e => updateState(e.target.value) }
                value={state}
            >
                <option value=''>- Seleccione -</option>
                {coins.map(coin => (
                    <option key={coin.code} value={coin.code}>{coin.name}</option>
                ))}
            </SelectOptions>
        </Fragment>
    );

    //Se retorna state,interfaz y la fn que modifica el state updateState
    return [state, Select, updateState];
}
 
export default useCoin;