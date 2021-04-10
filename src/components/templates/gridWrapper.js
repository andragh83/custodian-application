import React from 'react';
import styled from 'styled-components';

const GridWrapperStyle = styled.div`   
    
    margin-top: 20px;
    width: auto;
    display: grid;
    grid-template-columns: 525px 525px;   
    justify-items: streched; 
    grid-column-gap: 100px;
    grid-row-gap: 60px;

`

const GridWrapper = ({ children }) => (
    <GridWrapperStyle>
        {children}
    </GridWrapperStyle>
)

export default GridWrapper;