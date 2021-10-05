import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
    color: red;
    font-weight: 400;
    font-size:15px;
`;

function ErrorMessage({ children }) {
    return (
        <StyledErrorMessage>{children}</StyledErrorMessage>
    );
}

ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorMessage;
