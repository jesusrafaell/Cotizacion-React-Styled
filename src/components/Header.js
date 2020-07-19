import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: blanchedalmond;
    color: #ffffff;
`;

const TextHeader = styled.h1`
    font-size: 2rem;
    text-align: center; 
    margin: 0;
    font-family: 'Slabo 72px', serif;
`;

const Header = ({title}) => {
    return (
        <ContenedorHeader> 
            <TextHeader>{title}</TextHeader> 
        </ContenedorHeader>
    );
}
 
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;