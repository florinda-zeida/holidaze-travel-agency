import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeading = styled.h2`
    margin: 0px;
    padding: 0px;
    font-size: 18px;
    color: #2D5972;
    text-align:center;
    margin-top: 30px;
    font-weight: 500;

    @media (min-width: 768px) {
        font-size: 30px;
        margin-top: 50px;
        font-weight: 700;
    }
`; 


function Heading({ title }) {
    return <StyledHeading>{title}</StyledHeading>;
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Heading; 