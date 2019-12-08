import React from 'react';

import { Container } from './styles';

export default function ErrorMessage({ message, type }) {
    return (
        <Container type={type} >
            {message}
        </Container>
    );
}
