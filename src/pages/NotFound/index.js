import React from 'react';
import { Link } from 'react-router-dom'
// import { Container } from './styles';

export default function NotFound() {
    return (
        <>
            <h2>Ops...</h2>
            <p>Página não encontrada</p>
            <Link to="/" > Voltar para home </Link>
        </>
    );
}
