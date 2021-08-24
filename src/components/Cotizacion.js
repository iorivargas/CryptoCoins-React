import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types'


const DivResultado = styled.div`
    color: #fff;
    font-size: 18px!important;
    font-family: Arial, Helvetica, sans-serif;
`;

const Precio = styled.p`
    font-size: 30px!important;
    /* margin-bottom: 0; */
    span{
            font-weight: bold;
        }
`;

const Resumen = styled.p`
        span{
            font-weight: bold;
        }
`;

const Cotizacion = ({result}) => {

    const {LOWDAY, PRICE, HIGHDAY, CHANGEPCT24HOUR, LASTUPDATE} = result;

    return ( 
        <DivResultado>
            <Precio>El precio es: <span>{PRICE}</span> </Precio>
            {/* <hr></hr> */}
            <Resumen>
                El precio mas alto del dia: <span>{HIGHDAY}</span> <br></br>
                El precio mas bajo del dia: <span>{LOWDAY}</span>  <br></br>
                Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}%</span> <br></br>
                Ultima actualizacion: <span>{LASTUPDATE}</span>
            </Resumen>

        </DivResultado>
     );
}

Cotizacion.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Cotizacion;