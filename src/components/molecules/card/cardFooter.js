import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`   
        
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
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