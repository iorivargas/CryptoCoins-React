import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types'

//Custom hooks
import useCoin from '../hooks/useCoin';
import useCryptoCoin from '../hooks/useCryptoCoin';
import axios from 'axios';

//Components
import Error from './Error'

const Btn = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Form = ({saveResult, saveShowResult, saveLoading}) => {

    //state del listado de criptomonedas
    const[cryptoList, saveCryptoList] = useState([]);
    
    const COINS = [
        { code: 'USD', name: 'Dolar de Estados Unidos'},
        { code: 'MXN', name: 'Peso Mexicano'},
        { code: 'EUR', name: 'Euro'},
        { code: 'GBP', name: 'Libra Esterlina'}
    ];

    //utilizamos el custom hook useCoin
    const [coin, SelectCoins] = useCoin('Elige tu Moneda','', COINS);

    //utilizar custom hook useCryptoCoin
    const [cryptoCoin, SelectCrypto] = useCryptoCoin('Elige tu Criptomoneda', '', cryptoList);

    //State para el Error
    const [error, saveError] = useState(false);

    //Ejecutar  llamado a la API
    useEffect(() => {
        //se hace la peticion mediante axios
        const callApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);
            
            saveCryptoList(result.data.Data);
            
        }
        callApi();
        
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Validar
        if( coin  === '' || cryptoCoin  === '' ){
            saveError(true);
            return;
        }
        saveError(false);

        //Consultar API
        const APIConsult = async () => {
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;

            const result = await axios.get(url);

            saveResult(result.data.DISPLAY[cryptoCoin][coin]);
        }

        APIConsult();

        //show spinner
        saveLoading(true)

        //after 3 sec delete spinner and show the result
        setTimeout(() => {
            saveLoading(false);
            saveShowResult(true);
            
        }, 3000);

    }
    return ( 
            <form
                onSubmit={handleSubmit}
            >
                { error 
                    ? 
                        <Error 
                            mensaje="Ambos campos son obligatorios"
                        /> 
                    : 
                        null 
                }

                <SelectCoins />

                <SelectCrypto />

                <Btn 
                    type="submit"
                    value="Calcular"
                />
            </form>
        );
}

Form.propTypes = {
    saveResult: PropTypes.func.isRequired,
    saveShowResult: PropTypes.func.isRequired,
    saveLoading: PropTypes.func.isRequired
}
 
export default Form;