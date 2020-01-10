import React from 'react';
import { Link } from "react-router-dom";
import { Container } from './styles';

export default function AdItem({ data }) {
    return (
        <Container className="adItem">
            <Link to={`/ad/${data.id}`}>
                <img src={data.image} alt="" />
                <strong>{data.title}</strong>
                <span>{data.priceNegotiable ?  'Preço negociavel' : `R$ ${data.price}`}</span>
            </Link>
        </Container>
    );
}
