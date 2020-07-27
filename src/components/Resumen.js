import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ContenedorResumen = styled.div`
padding: 1rem;
text-align:center;
background-color: #00838F;
color: #fff;
margin-top:1rem;
`;

const Resumen = ({ datos }) => {
    const { marca, year, plan } = datos;
    if (marca === '' || year === '' || plan === '') {
        return null;
    }

    return (
        <Fragment>
            <ContenedorResumen>

                <h2>Resumen de cotización</h2>
                <ul>
                    <li>Marca: {marca} </li>
                    <li>Año: {year} </li>
                    <li>Plan: {plan} </li>

                </ul>
            </ContenedorResumen>
        </Fragment>
    );
}
Resumen.prototype={
    datos:PropTypes.object.isRequired
}

export default Resumen;