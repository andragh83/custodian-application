import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`   
        
    display: grid;
    grid-template-columns: 180px 180px;
    grid-gap: 10px;
    padding: 30px 30px;   
    border: none;      
    background-color: transparent;    

`

const CardFooter = ({ children }) => (
   
        <FooterWrapper>
            {children}
        </FooterWrapper>          
)
export default CardFooter;